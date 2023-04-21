import React, { useState, useEffect } from 'react';

import './tienda.css';
import { Link } from 'react-router-dom';
import { getItems } from '../../services/firebase';

export const Tienda = () => {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    
      getItems().then((respuesta) => {
        setPeliculas(respuesta);
      });
    },[]);
 
  return (
    <div className="container">
      <h1 className="logo">Tienda</h1>
      <ul className="products">
        {peliculas.map((pelicula) => (
          <li className="product" key={pelicula.id}>
            <img src={pelicula.productImage} alt={pelicula.productName} />
            <h2 className="product-title">{pelicula.productName}</h2>
            <p className="product-category">{pelicula.category}</p>
            <p className="product-price">${pelicula.price}</p>
            <Link className="product-link" to={`/peliculas/${pelicula.id}`}>Ver detalles</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};