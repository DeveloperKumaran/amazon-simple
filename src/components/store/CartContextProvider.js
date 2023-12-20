import { useReducer, useState } from 'react';

import CartContext from '../store/CartContext'





const CartProvider = (props) => {
 const[cartItem,setCartItem] = useState([])
 const[showCart,setShowCart] = useState(false)
 const[isLoggedIn,setIsLoggedIn] = useState(false)
 

 const addItemHandler = (newItem)=>{
         
    const newCartItem = [...cartItem,newItem]
            setCartItem(newCartItem)

            console.log(newCartItem)
            console.log(cartItem)
 }

 const removeItemHandler = ()=>{

 }

 const loginHandler = (res)=>{
           setIsLoggedIn(res);
 }


 const handleCartPop = ()=>{
    setShowCart(!(showCart));
}

  const cartContext = {
  items:cartItem,
  totalAmount: 0,
  addItem: addItemHandler,
  removeItem: removeItemHandler,
  handleCart: handleCartPop,
  showCart:showCart,
  setIsLoggedIn:loginHandler,
  isLoggedIn:isLoggedIn

  };
   
  
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;