
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AgregarAlCarrito } from '../pages/tienda/agregarcarrito';
import { getSingleItem } from '../services/firebase';


function DetallesPelicula() {
  
  const [peliculas, setPeliculas] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    
      getSingleItem(id).then((respuesta) => {
        setPeliculas(respuesta);
      });
    },[id]);
 



  //const pelicula = peliculas.find((pelicula) => pelicula.id === (id));

 

  return (
    
<div className="movie-details">
  <h1 className="movie-title">{peliculas.productName}</h1>
  <div className="movie-info">
    <img className="movie-image" src={peliculas.productImage} alt={peliculas.productName} />
    <div className="movie-details-text">
      <h2 className="movie-subtitle">Titulo: {peliculas.productName}</h2>
      <p className="movie-category">Genero: {peliculas.category} </p>
      <p className="movie-description">Descripcion: {peliculas.description}</p>
      <p className="movie-price">Precio: ${peliculas.price}</p>
      <AgregarAlCarrito pelicula={peliculas} />
    </div>
  </div>
</div>


  );
}

export default DetallesPelicula;
