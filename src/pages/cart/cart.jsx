

import React, { useContext, useState, useEffect } from 'react'
import { TiendaContext } from '../../context/tienda-context'
import { CartItem } from './cart-item'
import { useNavigate } from 'react-router-dom'
import "./cart.css"
import { getItems } from '../../services/firebase'
import CheckoutForm from '../../components/CheckoutForm'
import { createOrder } from '../../services/firebase'


export const Cart = () => {
  const context =useContext(TiendaContext);
  const { cartItems, getTotalAmount, clearCart } = context;
  const totalAmount = getTotalAmount();
  const navigate = useNavigate();
  const [peliculas, setPeliculas] = useState([]);
  const [orderCreated, setOrderCreated] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState(null);
  const [orderId, setOrderId] = useState("");
  const [showCheckout, setShowCheckout] = useState(false);
  const [cartItem, setCartItems] = useState([]);
  

  
  
  const onClose = () => {
    clearCart()
    navigate('/')
    setShowCheckout(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSubmitForm = (data) => {
    setFormData(data);
    setShowModal(false);
  };

  useEffect(() => {
    getItems().then((respuesta) => {
      setPeliculas(respuesta);
    });
  }, []);

  async function handleCheckout(userData) {
    setShowModal(true); 


    const cartItemsDetails = Object.keys(cartItems).map((itemId) => {
      const item = peliculas.find((pelicula) => pelicula.id === itemId);
      return {
        ...item,
        quantity: cartItems[itemId],
      };
    }).filter((item) => item.quantity > 0);
    
    const filteredCartItems = cartItemsDetails.filter((item) => item.quantity > 0);
    const order = {
      items: filteredCartItems,
      buyer: userData,
      total: totalAmount,
      date: new Date(),
    };

    const orderId = await createOrder(order);
    console.log('Order created with ID:', orderId);
    setOrderId(orderId);
    setOrderCreated(true);
    
  }
  

  return (
    <div className='carrito'>
      <div className='cartIt'>
      <h1>Productos</h1>
      {Object.entries(cartItems)
      .filter(([id, cantidad]) => cantidad > 0)
      .map(([id, cantidad]) => {
        const pelicula = peliculas.find(p => p.id === id);
        return <CartItem key={id} data={pelicula} cantidad={cantidad} />;
      })}
      </div>
      {totalAmount > 0 ? (
        <div className='checkout'>
          <p>subtotal de productos: ${totalAmount} </p>
          <button className='agregar-carrito-btn'onClick={() => navigate('/')}>Continuar comprando</button>
          <button className='agregar-carrito-btn'onClick={handleCheckout}>Finalizar compra</button>
          {showModal && (
  
  <CheckoutForm onCheckout={handleCheckout} onClose={onClose}  orderId={orderId} />
 
)}
        </div>
      ) : (
        <h1> El carrito esta vacio</h1>
      )}
    </div>
  );
};