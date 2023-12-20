import React, { useEffect, useState, useContext } from 'react';
import { Offcanvas, Button } from 'react-bootstrap';
import Modal from './UI/Modal';
import CartContext from './store/CartContext';

const Cart = (props) => {
  const [total, setTotal] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const ctx = useContext(CartContext);

  const remover = (item) => {
    // Decrement quantity
    if (item.quantity > 0) {
      item.quantity -= 1;
    }

    // Check if quantity is 0 and remove the item
    if (item.quantity === 0) {
      // Find the index of the item in the array
      const indexToRemove = ctx.items.findIndex((cartItem) => cartItem === item);

      // Remove the item from the array and store the removed item
      const removedItem = ctx.items.splice(indexToRemove, 1)[0];

      // Update the total price and quantity
      updateTotal();

      // Return the removed item
      return removedItem;
    }

    // Update the total price and quantity
    updateTotal();

    // Note: You might want to handle the logic when the quantity becomes 0, e.g., removing the item from the cart.
  };

  const closeCart = () => {
    ctx.handleCart();
  };

  // Calculate the total price and quantity whenever the cart items change
  useEffect(() => {
    updateTotal();
  }, [ctx.items]);

  const updateTotal = () => {
    let newTotal = 0;
    let newQuantity = 0;

    // Calculate total price and quantity
    ctx.items.forEach((item) => {
      newTotal += item.price * item.quantity;
      newQuantity += item.quantity;
    });

    // Update state
    setTotal(newTotal);
    setQuantity(newQuantity);
  };

  return (
    <Modal>
      <table className="table table-borderless">
        <thead>
          <button className="close-btn" onClick={closeCart}>
            close
          </button>
          <tr>
            <th scope="col" className="text-center">
              Item
            </th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
          </tr>
        </thead>
        <tbody>
          {ctx.items.map((i, index) => (
            <tr key={index}>
              <td className="d-flex">
                <img src={i.img1} alt="" width="50px" height="50px" />
                <div>{i.name}</div>
              </td>
              <td>{i.price}</td>
              <td className="text-center">
                <div>{i.quantity}</div>
              </td>
              <td>
                <button className="but" onClick={() => remover(i)}>
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="w-100 text-end mt-1 fw-bolder">Total: ${total.toFixed(2)}</div>
      <Button className="mt-5 w-100">Purchase</Button>
    </Modal>
  );
};

export default Cart;






















































/*

import React, { useEffect, useState,useContext } from 'react'
import { Offcanvas,Button } from 'react-bootstrap';

import Modal from './UI/Modal';
import CartContext from './store/CartContext';

 const Cart = (props) => {

  const[total,setTotal] = useState(0);
  const[quantity,setQuantity] = useState(0);
 
  const ctx = useContext(CartContext);
  
  const remover = (item)=>{
    
    let qty = (item.quantity)-1;
    setQuantity(qty);
    item.quantity= quantity;

  }

  const closeCart = ()=>{
    ctx.handleCart();
  }

  
 
  
  
  

  return (
    <Modal>
     
           <table class="table table-borderless">
              <thead>
                <button className='close-btn' onClick={closeCart} >close</button>
                <tr>
                  <th scope="col" className='text-center'>Item</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                </tr>
              </thead>
              <tbody>
              {ctx.items.map((i,index)=>(
                <tr >   
                  <td className='d-flex '>
                    <img src={i.img1} alt="" width='50px' height='50px' />
                    <div>{i.name}</div>
                  </td>
                  <td >{i.price}</td>
                  <td className='text-center'>
                    <div>{i.quantity}</div>
                    
                  </td>
                  <td >        
                  <button  className='but' onClick={() => remover(i)}>X</button>
                  </td>
                </tr>
                 ))}
              </tbody>
            </table>     
          <div className='w-100 text-end mt-1 fw-bolder'>Total:{total} </div>
          <Button className='mt-5 w-100'>Purchase</Button>      
    </Modal>
    
  )
}
export default Cart;


*/