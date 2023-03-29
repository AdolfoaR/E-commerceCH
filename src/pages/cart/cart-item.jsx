import React, {useContext} from 'react'
import { TiendaContext } from '../../context/tienda-context'


export const CartItem = (props) => {

    const {id, productName, price, productImage}= props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(TiendaContext);
  return (
    <div className='cartitem'>
        <img src= {productImage} />
        <div className='description'>
            <p> {productName} </p>
            <p> {price} </p>
            <div className='count'>
                <button> - </button>
                <input value={cartItems[id] } />

            </div>
        </div>
        
    </div>
  )
}
