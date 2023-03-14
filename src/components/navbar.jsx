import React from 'react'
import { Link } from "react-router-dom"
import { ShoppingCart } from "phosphor-react"
import "./navbar.css"


export  const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo'>
       <img src={require("../components/emo.png")}  alt="" width={100} height={40} />
      </div>
     <div className='links'>
      <Link to="/"> Tienda </Link>
      <Link to= "/cart"> 
       <ShoppingCart size={40}/>
      </Link>

     </div>
    </div>
  )
}
