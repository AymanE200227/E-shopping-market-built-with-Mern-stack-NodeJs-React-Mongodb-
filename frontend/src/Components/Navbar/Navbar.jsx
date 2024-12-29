import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import logo from '../Assets/logo.png'
export const Navbar = () => {
  const [menu, setMenu] =useState('shop');
  return (
    <div className="Navbar">
      <div className="Navbar-logo">
        <img src={logo} alt="" />
        <p>Friday Shop</p>
      </div>
          <ul className="nav-menu">
            <li onClick={()=>{setMenu("shop")}} ><Link to="/">Shop</Link> {menu==="shop"?<hr/>:null}</li>
            <li onClick={()=>{setMenu("men")}} ><Link to="/men">men</Link>{menu==="men"?<hr/>:null}</li>
            <li onClick={()=>{setMenu("women")}} ><Link to="/Women">Women</Link> {menu==="women"?<hr/>:null}</li>
            <li onClick={()=>{setMenu("kids")}} ><Link to="/Kids">Kids</Link>{menu==="kids"?<hr/>:null}</li>
          </ul>
          <div className="nav-login-cart">
            <button><Link to="/Login">Login</Link></button>
            <Link to="/Cart">
            <img src={logo} alt="" />
            </Link>
            <div className="nav-cart-counter">0</div>
          </div>
    </div>
  )
}