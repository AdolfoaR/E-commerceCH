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

const getTotalAmount = ()=>{
  let totalAmount =0
  for (const item in cartItems){
    if (cartItems[item] > 0){
      let itemInfo = PELICULAS.find((Pelicula)=> Pelicula.id=== Number(item))
      totalAmount += cartItems[item] * itemInfo.price
    }
  }
return totalAmount;
}

  const addToCart= (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
  }
  const removeCart= (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
  }

  const updateCartCount = (newAmount, itemId)=> {
    setCartItems((prev)=> ({...prev, [itemId]: newAmount}))
  }

  const contexValue= {cartItems, addToCart,removeCart , updateCartCount, getTotalAmount}

  return (
    <TiendaContext.Provider value={contexValue} > {props.children}  </TiendaContext.Provider>
  )
  
};
