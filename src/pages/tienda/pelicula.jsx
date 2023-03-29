import React, { useContext } from 'react'
import { TiendaContext } from '../../context/tienda-context';
export const Pelicula = (props) => {
    const {id, productName, price, productImage, category} = props.data;
    const {addToCart, cartItems} = useContext(TiendaContext)
    const cartItemCantidad = cartItems[id]
    
  return (
    <div className='nombrePelicula'>
        <img src={productImage}  />
        <div className='datos'>
            <p> 
                <b> {productName} </b>
            </p>
            <p> ${price} </p>
        </div>
        <button className='addToCartBttn' onClick={ () => addToCart(id)} >Agregar al carrito</button>
           {cartItemCantidad > 0  && <> ({cartItemCantidad}) </> }    
    </div>
  )
}
