import React, { useState } from 'react';
import "./form.css"
const CheckoutForm = ({ onCheckout }) => {
    
    const [userData, setUserData] = useState({
        username: "",
        email: "",
        phone: "",
      });
      function handleInputChange(evt) {
        const inputText = evt.target.value;
        const inputName = evt.target.name;
        //userData["phone"] -> userData.phone
        const newUserData = { ...userData };
        newUserData[inputName] = inputText;
        setUserData(newUserData);
      }
    
      function onSubmit(evt) {
        evt.preventDefault();
        onCheckout(userData);
        
      
        // Actualizar el estado para mostrar el mensaje de compra exitosa
        
      }

      

  return (
     
    <div className="form-container">
    <h2 className="form-title">Ingresa tus datos para completar la compra 🛍</h2>
    <form onSubmit={onSubmit}>
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
  </div>
  
      );
    
       }
export default CheckoutForm;

