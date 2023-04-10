import React, { useState } from 'react';
import { PELICULAS } from '../../peliculas';
import './tienda.css';
import { Link, Navigate } from 'react-router-dom';
import { AgregarAlCarrito } from './agregarcarrito';

export const Tienda = () => {
  

 

  return (
    <div className="container">
      
        <h1 className="logo">Tienda</h1>
      
        <ul className="products">
          {PELICULAS.map((pelicula) => (
            <li className="product" key={pelicula.id}>
              <img src={pelicula.productImage} alt={pelicula.productName} />
              <h2 className="product-title">{pelicula.productName}</h2>
              <p className="product-category">{pelicula.category}</p>
              <p className="product-price">{pelicula.price}</p>
              <Link className="product-link" to={`/pelicula/${pelicula.id}`}>Ver detalles</Link>
            </li>
          ))}
        </ul>
      
    </div>
  ); 
   }