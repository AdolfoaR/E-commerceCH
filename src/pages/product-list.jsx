
import React from 'react';
import { TiendaContext } from '../../context/tienda-context'
import { PELICULAS } from '../../peliculas'
import { CartItem } from './cart-item'

export const ProductList = ({ peliculas }) => {
    const filteredProducts = activeCategory
      ? PELICULAS.filter((peliculas) => peliculas.category === activeCategory)
      : peliculas;
  
    return (
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
          </li>
        ))}
      </ul>
    );
  };