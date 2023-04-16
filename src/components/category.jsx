import React, { useState, useEffect } from 'react';


import './category.css';

import { Link, useParams } from 'react-router-dom';
import { getItemsByCategory } from '../services/firebase';

export const Category = () => {
  

  const [peliculas, setPeliculas] = useState([]);
  const { category } = useParams();
  useEffect(() => {
    
    getItemsByCategory(category).then((respuesta) => {
      setPeliculas(respuesta);
    });
  },[category]);

  //const peliculasFiltradas = peliculas.filter(pelicula => pelicula.category === category);

  return (
    <div className="category">
      <h1>Resultados para la categoría {category}</h1>
      <div className="peliculas">
        {peliculas.map((pelicula) => (
          <div className="pelicula" key={pelicula.id}>
            <img src={pelicula.productImage} alt={pelicula.productName} />
            <h2 className="product-title">{pelicula.productName}</h2>
            <p className="product-category">{pelicula.category}</p>
            <p className="product-price">${pelicula.price}</p>
            <Link className="product-link" to={`/peliculas/${pelicula.id}`}>Ver detalles</Link>
          </div>
        ))}
      </div>
    </div>
  );
};
