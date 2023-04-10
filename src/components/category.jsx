import React from "react";
import { PELICULAS } from "../peliculas";
import { useParams } from "react-router-dom";
import  Pelicula   from "./pelicul";
//import "./category.css"
import { Link, Navigate } from 'react-router-dom';


export const Category = () => {
  const { category } = useParams();
  const peliculasDeCategoria = PELICULAS.filter(pelicula => pelicula.category === category);
  
  return (
    <div className="category">
      <h1>Resultados para la categoría {category}</h1>
      <div className="peliculas ">
      {peliculasDeCategoria.map((peliculas) => (
  <Pelicula key={peliculas.id} data={peliculas} />
))}
 
      </div>
      
    </div>
  );
}




export default Category;