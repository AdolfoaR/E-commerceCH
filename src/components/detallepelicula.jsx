import React from 'react';
import "./detallepelicula.css"
import DetallePeliculaPage from '../pages/DetallePeliculaPage';

import { AgregarAlCarrito } from '../pages/tienda/agregarcarrito';
const DetallePelicula = ({ pelicula, onClose }) => {
  return (
    <div className="detalle-pelicula">
      <div className="detalle-pelicula-header">
        <h2>{pelicula.productName}</h2>
        <button onClick={onClose}>Cerrar</button>
      </div>
      <div className="detalle-pelicula-body">
        <img src={pelicula.productImage} alt={pelicula.productName} />
        <p>{pelicula.description}</p>
        <p>Precio: ${pelicula.price}</p>
        <AgregarAlCarrito pelicula={pelicula} />

        
        
      </div>
    </div>
  );
};

export default DetallePelicula;

