

import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "react-feather";
import "./navbar.css";
const categories = [
  "Acción",
  "Aventura",
  "Comedia",
  "Drama",
  "Terror",
  "Romance",
];

export const  Navbar= () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={require("../components/emo.png")} alt="" width={100} height={40} />
      </div>
      <div className="links">
        <Link to="/"> Tienda </Link>
        <Link to="/cart">
          <ShoppingCart size={40} />
        </Link>
      </div>
      <div>
        <ul>
          {categories.map((category) => (
            <li key={category}>
              <Link to={`/category/${category}`}>{category}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}