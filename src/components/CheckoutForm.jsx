import React, { useState } from 'react';
import "./form.css"
const CheckoutForm = ({ onCheckout, onClose, orderId }) => {
  const [isOrderCompleted, setIsOrderCompleted] = useState(false);
  const [orderCreated, setOrderCreated] = useState(false);
  
    const [userData, setUserData] = useState({
        username: "",
        email: "",
        phone: "",
      });
      function handleInputChange(evt) {
        const inputText = evt.target.value;
        const inputName = evt.target.name;
        const newUserData = { ...userData };
        newUserData[inputName] = inputText;
        setUserData(newUserData);
      }
    
      function onSubmit(evt) {
        evt.preventDefault();
        onCheckout(userData);
        setIsOrderCompleted(true);
      }
      const handleClearCart = () => {
        console.log("Cart cleared!");
        onClose();
        setOrderCreated(false);
      };
      

      return (
        <div className="form-container">
          
          {isOrderCompleted ? (
            <div className='success-message'>
            <p>¡Felicitaciones, tu compra ha sido exitosa!- Tu codigo de orden es: {orderId} </p>
           
            <button onClick={handleClearCart}>Volver a la tienda</button>
            </div>
          ) : (
            <form onSubmit={onSubmit}>
              <h2 className="form-title">Ingresa tus datos para completar la compra </h2>
              <div className="form-group">
                <label>Nombre</label>
                <input value={userData.username} name="username" type="text" required onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input value={userData.email} name="email" type="email" required onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label>Teléfono</label>
                <input value={userData.direccion} name="phone" type="text" required onChange={handleInputChange} />
              </div>
              <button type="submit">Crear orden</button>
            </form>
          )}
        </div>
      );
      
    
       }
export default CheckoutForm;
