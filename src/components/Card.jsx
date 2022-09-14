import React from 'react'
import '../styles/app.css'
const Card = () => {
    const persona ={name:"florencio",edad:30, pelicula:"star war", musica:"Hola Beats" }
  return (
    <ul className='card'>
        <li> <span className='negrita'> 😀Nombre:</span> {persona.name}</li>
        <li> <span className='negrita'>Edad: </span>{persona.edad}</li>
        <li> <span className='negrita'>Pelicula Favorita:</span> {persona.pelicula}</li>
        <li> <span className='negrita'>Musica Favorita:</span> {persona.musica}</li>
    </ul>
  )
}

export default Card

//rafce   React ArrowFucntion compenent 
