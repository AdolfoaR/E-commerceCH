
import  React, { createContext, useState, useEffect } from 'react';
import { getItems } from '../services/firebase';

export const TiendaContext = createContext();

const getDefaultCart = (numItems) => {
  return Array.from({ length: numItems }, () => 0).reduce(
    (cart, _, index) => ({ ...cart, [index + 1]: 0 }),
    {}
  );
};

export const TiendaContexto = (props) => {
  const [peliculas, setPeliculas] = useState([]);
  const [cartItems, setCartItems] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await getItems();
      setPeliculas(response);
      setCartItems(getDefaultCart(response.length));
    };
    fetchData();
  }, []);

  const getTotalAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        const item = peliculas.find((pelicula) => pelicula.id === itemId);
        console.log(item); // Agregar aquí
        totalAmount += cartItems[itemId] * item.price;
      }
    }
    return totalAmount;
  };
  

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] ? prev[itemId] + 1 : 1 }));
  };

  const removeCart = (itemId) => {
    if (cartItems[itemId] > 0) {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] ? prev[itemId] - 1 : 0 }));
    }
  };

  const updateCartCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const contextValue = { cartItems, addToCart, removeCart, updateCartCount, getTotalAmount};

  return <TiendaContext.Provider value={contextValue}>{props.children}</TiendaContext.Provider>;
};
