import React from 'react';
import DetallePeliculaPage from '../pages/DetallePeliculaPage';

const BotonVerDetalle = ({ pelicula, handleMostrarDetalles }) => {
  return (
    <button onClick={() => handleMostrarDetalles(pelicula)}>Ver detalle</button>
  );
};

export default BotonVerDetalle;
