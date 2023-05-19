import React from 'react'

function MangaAPi() {
    const obtenerManga=async()=>{
        console.log("buscando manga!!");

    }
    const adelante=()=>{
        console.log("paginando hacia adelante!!");

    }
    const atras=()=>{
        console.log("buscando paginando hacia atras!!");

        
    }
  return (
    <div>
        <h1>Petición al API de Manga</h1>
        <button onClick={obtenerManga}>Traer Mangas</button>
        <button onClick={adelante}>Siguiente</button>
        <button onClick={atras}>Atrás</button>
    </div>
  )
}

export default MangaAPi