import React, { useContext } from 'react';
import { TiendaContext } from '../context/tienda-context';
import { Link } from "react-router-dom";
import { ShoppingCart } from "react-feather";
import "./navbar.css";

export const Navbar = ({ categories }) => {

  const { cartItems } = useContext(TiendaContext);

  const cantidadEnCarrito = Object.values(cartItems).reduce(
    (total, cantidad) => total + cantidad,
    0
  );

  return (
    <div className="navbar">
      <div className="logo">
      <Link to="/"> 
  <img
    src={require("../components/emo.png")}
    alt=""
    width={100}
    height={40}
  />
</Link>
      </div>
      <div className="links">
        <Link to="/"> Tienda </Link>
        
        <Link to="/cart">
          <ShoppingCart size={40} /><span>{cantidadEnCarrito}</span>
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
};