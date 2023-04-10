import React, { useState } from 'react';
import DetallePeliculaPage from '../pages/DetallePeliculaPage';
import { Link, Navigate } from 'react-router-dom';
const Pelicula = ({ data }) => {
  

  return (
    <div className="pelicula">
      <img src={data.productImage} alt={data.productName} />
      <h3>{data.productName}</h3>
      <Link className="product-link" to={`/pelicula/${data.id}`}>Ver detalles</Link>
    </div>
  );
};

export default Pelicula;




