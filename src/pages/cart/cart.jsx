import React, { useContext } from 'react'
import { TiendaContext } from '../../context/tienda-context'
import { PELICULAS } from '../../peliculas'
import { CartItem } from './cart-item'
import { useNavigate } from 'react-router-dom'
import "./cart.css"


export const Cart = () => {
  const {cartItems, getTotalAmount} = useContext(TiendaContext)
  const totalAmount= getTotalAmount()
  const navigate = useNavigate()
  return (
    <div className='carrito'>
      <div>
        <h1>Productos</h1>
      </div>
      <div className='carrito'>
        {PELICULAS.map ( (peliculas)=>{
          if (cartItems[peliculas.id] !== 0 ) {
            return < CartItem data ={peliculas}/>;
          }

        } ) }

      </div>
      {totalAmount > 0 ? (
      <div className='checkout'>
        <p>subtotal de productos: ${totalAmount}  </p>
        <button onClick={()=>navigate("/")}>Continuar comprando</button>
        <button>Finalizar compra</button>
      </div>
      ) : (
        <h1> El carrito esta vacio</h1>
      )
      }
    </div>
  )
}
