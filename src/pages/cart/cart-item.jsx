import React, {useContext} from 'react'
import { TiendaContext } from '../../context/tienda-context'

export const CartItem = (props) => {
  const { cartItems, addToCart, removeCart, updateCartCount } =
  useContext(TiendaContext);



  const { data } = props;

  if (!data) {
    return null;
  }



    const {id, productName, price, category, productImage}= data;
    
    



  return (
   
    
    <div className='cartItems'>
      
      <img src= {productImage} />
        <div className='description'>
        
            <p> {productName} </p>
            <p> ${price} </p>
            <div className='count'>
                <button onClick={()=>removeCart(id)}> - </button>
                <input value={cartItems[id] ?? 0} onChange={(e)=>updateCartCount((e.target.value), id)} />
                <button onClick={()=>addToCart(id)}> +</button>
            </div>
        </div>
        
    </div>
    
);
 }