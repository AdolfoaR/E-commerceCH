import React from "react";

export const Pelicula = ({ data }) => {
  return (
    <div className="pelicula">
      <img src={data.productImage} alt={data.productName} />
      <h3>{data.productName}</h3>
      <p>{data.descripcion}</p>
      <button>Agregar al carrito</button>
    </div>
  );
};