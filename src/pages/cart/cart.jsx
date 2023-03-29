import React, { useContext } from 'react'
import { TiendaContext } from '../../context/tienda-context'
import { PELICULAS } from '../../peliculas'
import { CartItem } from './cart-item'


export const Cart = () => {
  const {cartItems} = useContext(TiendaContext)
  return (
    <div className='carrito'>
      <div>
        <h1>Productos</h1>
      </div>
      <div className='cartItems'>
        {PELICULAS.map ( (peliculas)=>{
          if (cartItems [peliculas.id] !== 0 ) {
            return < CartItem data ={peliculas}/>;
          }

        } ) }

      </div>
      
    </div>
  )
}
