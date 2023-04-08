import React, {useContext} from 'react'
import { TiendaContext } from '../../context/tienda-context'


export const CartItem = (props) => {

    const {id, productName, price, category, productImage}= props.data;
    const { cartItems, addToCart, removeCart, updateCartCount } =
    useContext(TiendaContext);
  return (
    <div className='cartItems'>
        <img src= {productImage} />
        <div className='description'>
            <p> {productName} </p>
            <p> {price} </p>
            <div className='count'>
                <button onClick={()=>removeCart(id)}> - </button>
                <input value={cartItems[id] } onChange={(e)=>updateCartCount(Number(e.target.value), id)} />
                <button onClick={()=>addToCart(id)}> +</button>
            </div>
        </div>
        
    </div>
  )
}
