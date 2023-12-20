import React from 'react';

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  handleCart: ()=>{},
  showCart:false,
  setIsLoggedIn:()=>{},
  isLoggedIn:false
  
});

export default CartContext;