import React from 'react'
import { PELICULAS } from '../../peliculas'
import {Pelicula} from "./pelicula"
import "./tienda.css"



export  const Tienda = () => {
  return (
    <div className='tienda'>
      <div className='greeting'>
      <h1> bienvenidos a la tienda</h1>
      </div>
      <div className='peliculas'> {PELICULAS.map((peliculas)=>(<Pelicula data={peliculas} />) )} </div>
      
    </div>
  )
}

