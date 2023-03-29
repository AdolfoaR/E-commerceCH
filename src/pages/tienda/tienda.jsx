import React from 'react'
import { PELICULAS } from '../../peliculas'
import {Pelicula} from "./pelicula"
import "./tienda.css"
import { useParams } from "react-router-dom";


export const Tienda = () => {
  const { category } = useParams();

  const peliculasFiltradas = PELICULAS.filter(
    (pelicula) => pelicula.categoria === category
  );

  return (
    <div className="tienda">
      <div className="greeting">
        <h1>bienvenidos a la tienda</h1>
      </div>
      <div className="peliculas">
      {peliculasFiltradas.map((peliculas) => (
  <Pelicula key={peliculas.id} data={peliculas} />
))}
      </div>
    </div>
  );
};