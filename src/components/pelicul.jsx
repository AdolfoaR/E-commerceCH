import  DetallePelicula  from './detallepelicula';
import React, { useState } from 'react';

const Pelicula = ({ data }) => {
  const [mostrarDetalles, setMostrarDetalles] = useState(false);
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null);

  const handleMostrarDetalles = (pelicula) => {
    setPeliculaSeleccionada(pelicula);
    setMostrarDetalles(true);
  };

  const cerrarDetalle = () => {
    setPeliculaSeleccionada(null);
    setMostrarDetalles(false);
  };

  return (
    <div className="pelicula">
      <img src={data.productImage} alt={data.productName} />
      <h3>{data.productName}</h3>
      
      

      <div>

      </div>
      <button onClick={() => handleMostrarDetalles(data)}>Ver detalles</button>
      {mostrarDetalles && (
        <DetallePelicula pelicula={peliculaSeleccionada} onClose={cerrarDetalle} />
      )}
    </div>
   
    
  );
};

export default Pelicula;
