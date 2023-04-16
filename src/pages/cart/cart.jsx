import React, { useContext, useState, useEffect } from 'react'
import { TiendaContext } from '../../context/tienda-context'

import { CartItem } from './cart-item'
import { useNavigate, useParams } from 'react-router-dom'
import "./cart.css"
import { getItems } from '../../services/firebase'

export const Cart = () => {
  const {cartItems, getTotalAmount} = useContext(TiendaContext)
  const totalAmount = getTotalAmount();

  const navigate = useNavigate()

  
  
    const [peliculas, setPeliculas] = useState([]);
    let { id } = useParams();
  
    useEffect(() => {
      
        getItems().then((respuesta) => {
          setPeliculas(respuesta);
        });
      },[]);

  return (
    <div className='carrito'>
      
      <div className='carrito'>
      {peliculas.map((pelicula) => {
  if (cartItems[pelicula.id] > 0) {


    return <CartItem key={pelicula.id} data={pelicula} />;

    
  }
})}

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