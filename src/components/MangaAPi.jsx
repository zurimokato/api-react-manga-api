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
    <div>
        <h1>Petición al API de Manga</h1>
        <button onClick={obtenerManga}>Traer Mangas</button>
        <button onClick={adelante}>Siguiente</button>
        <button onClick={atras}>Atrás</button>
        {
            mangas.map((manga)=>(
                <div key={manga.mal_id}>
                    <h3>{manga.mal_id} -  {manga.title}</h3>
                    <h4>Popularidad:  {manga.popularity}</h4>
                    <h4>Número de volumenes:  {manga.volumes}</h4>
                    <img src={manga.images.jpg.large_image_url} alt={manga.title} />
                    <hr></hr>
                </div>
                
            ))
        
        }

    </div>
  )
}

export default MangaApi