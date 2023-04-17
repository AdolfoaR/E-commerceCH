import React, { useState } from 'react';
import CheckoutForm from './CheckoutForm';
import "./modal.css"
const Modal = ({ onClose, children }) => {
    return (
      <div className="modal-background" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    );
  };
export default Modal;
