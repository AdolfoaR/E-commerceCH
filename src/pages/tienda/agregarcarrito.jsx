import React, { useContext } from 'react'
import { TiendaContext } from '../../context/tienda-context';


  export const AgregarAlCarrito = ({ pelicula }) => {
    const { addToCart, cartItems } = useContext(TiendaContext)
    const cartItemCantidad = cartItems[pelicula.id]
    return (
      <div className='agregar-carrito'>
        <button className='agregar-carrito-btn' onClick={() => addToCart(pelicula.id)}>Agregar al carrito</button>
        {cartItemCantidad > 0 && <> ({cartItemCantidad}) </>}
      </div>
    )
  }