import React, { useState, useContext } from 'react';
import AmazonLogo from '../assets/amazon-logo.png';
import CartLogo from '../assets/shopping-bag.png';
import CartContext from '../store/CartContext';
import Cart from '../Cart';
import '../Nav/navBar.css';

const Header = (props) => {
  const ctx = useContext(CartContext);

  const handleCartPop = () => {
    ctx.handleCart();
  };

  return (
    <div className="navbar">
      <div className="navbar-brand">
        <img className="brand-logo" src={AmazonLogo} alt="Amazon Logo" />
      </div>
      <div className="navbar-links">
        <a href="/">HOME</a>
        <a href="/list">STORE</a>
        <a href="/about">ABOUT</a>
        <a href="/contact">CONTACT US</a>
      </div>
      <div className="cart-button">
        <button className="cart-button" onClick={handleCartPop}>
          <img className="cart-logo" src={CartLogo} alt="Cart Logo" />

          <div className="round-container">
            <h2 className="total-qty">{ctx.items.length}</h2>
          </div>
        
        </button>

        
      </div>
      
    </div>
  );
};

export default Header;


//Cart<Badge className='ms-2 fw-bolder'bg="danger">{props.cartCount}</Badge>