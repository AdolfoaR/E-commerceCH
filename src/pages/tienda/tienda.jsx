import React, { useState } from 'react';
import { PELICULAS } from '../../peliculas';
import { DetallePelicula } from '../../components/detallepelicula';
import './tienda.css';
import { useParams } from 'react-router-dom';

export const Tienda = () => {
  const { category } = useParams();

  const peliculasFiltradas = PELICULAS.filter(
    (pelicula) => pelicula.categoria === category
  );

  const [mostrarDetalles, setMostrarDetalles] = useState(false);
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null);

  const handleMostrarDetalles = (pelicula) => {
    setPeliculaSeleccionada(pelicula);
    setMostrarDetalles(true);
  };


const cerrarDetalle = () => {
    setPeliculaSeleccionada(null);
  }
  return (
    <div className="tienda">
      <div className="greeting">
        <h1>Bienvenidos a la tienda</h1>
      </div>
      <div className="peliculas">
        {peliculasFiltradas.map((pelicula) => (
          <div className="pelicula" key={pelicula.id}>
            <img src={pelicula.productImage} alt={pelicula.productName} />
            <button onClick={() => handleMostrarDetalles(pelicula)}>
              Ver detalles
            </button>
          </div>
        ))}
      </div>
      {peliculaSeleccionada && <DetallePelicula pelicula={peliculaSeleccionada} onClose={cerrarDetalle} />}
    </div>
  );
};
