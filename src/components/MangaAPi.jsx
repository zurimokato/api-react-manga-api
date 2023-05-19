import React from 'react'

function MangaApi() {
     const [mangas,setMangas]=React.useState([]);
     const [paginacion, setPaginacion]=React.useState(1);
     const obtenerManga=async()=>{
        console.log("buscando manga!!");
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };

          
          try {
            const response = await fetch(`https://api.jikan.moe/v4/manga?page=${paginacion}&orderby=mal_id`, requestOptions);
            const result = await response.text();
            const data= JSON.parse(result).data;

            setMangas(data)
            console.log(paginacion);


            console.log(data);
          } catch (error) {
            console.log('error', error);
          }

       

    }
    const adelante=()=>{
        setPaginacion(paginacion+1);
        obtenerManga();
    }

    const atras=()=>{
        setPaginacion(paginacion-1);
        obtenerManga();
    }
  return (
    <div className='container'>
        <h1>Petición al API de Manga</h1>
        <button type="button" className='btn btn-primary' onClick={obtenerManga}>Traer Mangas</button>
        <button type="button" className='btn btn-outline-info' onClick={adelante}>Siguiente</button>
        <button type="button" className='btn btn-outline-info' onClick={atras}>Atrás</button>
        {
            mangas.map((manga)=>(
                <div className='container' key={manga.mal_id} >
                    <div className='d-flex justify-content-center'>
                        <div className="card" style={{width:'500px',margin: '1% 0%'}}>
                                <div className="card-header">
                                    <h5 className="card-title">{manga.mal_id} -  {manga.title}</h5>
                                </div>
                               
                                <div className="card-body">
                                    <div className='d-flex justify-content-center'>
                                        <img src={manga.images.jpg.large_image_url} alt={manga.title}/>
                                    </div>
                                    
                                    <p className="card-text">{manga.synopsis}</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Popularidad:  {manga.popularity}</li>
                                    <li className="list-group-item">Número de volumenes:  {manga.volumes}</li>
                                </ul>
                        </div>
                    </div>
                </div>  
            ))
        
        }
       <p>Página {paginacion}</p> <button type='button' className='btn btn-outline-info' onClick={adelante}>Siguiente</button>
        <button type="button" className='btn btn-outline-info' onClick={atras}>Atrás</button>

    </div>
  )
}

export default MangaApi