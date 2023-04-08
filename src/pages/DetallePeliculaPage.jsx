import React from 'react';
import DetallePelicula from '../components/detallepelicula';

const DetallePeliculaPage = ({ pelicula }) => {
return (
<div>
<DetallePelicula pelicula={pelicula} />
</div>
);
};

export default DetallePeliculaPage;