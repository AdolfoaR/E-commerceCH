import { PELICULAS } from "../peliculas";
import { useParams } from 'react-router-dom';
import { AgregarAlCarrito } from '../pages/tienda/agregarcarrito';
//import "./detallepelicula.css"
function DetallesPelicula(props) {
  const { id } = useParams();
  const pelicula = PELICULAS.find((pelicula) => pelicula.id === parseInt(id));

 

  return (
    
<div className="movie-details">
  <h1 className="movie-title">{pelicula.productName}</h1>
  <div className="movie-info">
    <img className="movie-image" src={pelicula.productImage} alt={pelicula.productName} />
    <div className="movie-details-text">
      <h2 className="movie-subtitle">Titulo: {pelicula.productName}</h2>
      <p className="movie-category">Genero: {pelicula.category} </p>
      <p className="movie-description">Descripcion: {pelicula.description}</p>
      <p className="movie-price">Precio: ${pelicula.price}</p>
      <AgregarAlCarrito pelicula={pelicula} />
    </div>
  </div>
</div>


  );
}

export default DetallesPelicula;
