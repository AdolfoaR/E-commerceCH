import React from "react";
import { PELICULAS } from "../peliculas";
import { useParams } from "react-router-dom";
import { Pelicula } from "../pages/tienda/pelicula";

export const Category = () => {
  const { category } = useParams();
  const peliculasDeCategoria = PELICULAS.filter(pelicula => pelicula.category === category);
  console.log("category:", category);
console.log("peliculasDeCategoria:", peliculasDeCategoria);

  return (
    <div className="category">
      <h1>Resultados para la categoría {category}</h1>
      <div className="peliculas">
      {peliculasDeCategoria.map((peliculas) => (
  <Pelicula key={peliculas.id} data={peliculas} />
))}
      </div>
    </div>
  );
}




export default Category;