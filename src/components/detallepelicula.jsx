import React from 'react';
import "./detallepelicula.css"


export const DetallePelicula = ({ pelicula, onClose }) => {
    const {id, productName, price, productImage, category} = pelicula;
    
  return (
    <div className="detalle-pelicula fullscreen">
      <h2>{productName}</h2>
      <img src={productImage} alt={productName} />
      <p>{category}</p>
      <p>Precio: {price}</p>
      <button className='cerrar' onClick={onClose}>Cerrar</button>
    </div>
  );
};