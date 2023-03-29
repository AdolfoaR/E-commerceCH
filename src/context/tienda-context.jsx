import React, {createContext, useState} from 'react'
import { PELICULAS } from '../peliculas'
export const TiendaContext = createContext (null)

const getDefaultCart = () => {
  let cart = {};
  for(let i = 1; i < PELICULAS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
}
export const TiendaContexto =  (props) => {
  const [cartItems, setCartItems]= useState(getDefaultCart());
  const addToCart= (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
  }
  const RemoveCart= (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
  }

  const contexValue= {cartItems, addToCart, RemoveCart}

  return (
    <TiendaContext.Provider value={contexValue} > {props.children}  </TiendaContext.Provider>
  )
  
};
