import React, { useState } from 'react'
import { products } from './ProductsArray'
import{Navbar,Container,Card,Row,Col,Nav} from 'react-bootstrap'
import '../Product/ProductList.css'
import { useRef, useContext } from 'react'
import CartContext from '../store/CartContext'


const ProductList = () => {
  
  const[exist,setExist] = useState(false)
  const[quantity,setQuantity] = useState(0);
  const ctx = useContext(CartContext);

 

  const addItem = (item)=>{
       
    const existingItem = ctx.items.find((i) => i.id === item.id);
    if (existingItem) {
      
      existingItem.quantity += 1;
    }

    else{
      ctx.addItem(item);
    }
   
    

    

  }
   return ( 
    <>
    <div className="grid-container">
      {

        products.map((item)=>{
          return(
            <div key={item.id}>
          <div className='card' >
             
                <h2 className='title' >{item.name}</h2>
              
              
             
                <img className='product-image' src={item.img1} />
             
              
                <h2 className='product-price' >${item.price}</h2>
          </div>
          <button className='add-btn' onClick={()=>addItem(item)}>ADD TO CART</button>
          </div>
        )})
      }
      
    </div>
    
    
  </>
);
};


export default ProductList



/*


 const titleRef = useRef('');
  const imgRef = useRef('');
  const priceRef = useRef()


const newItem = {
      name: titleRef.current.innerText,
      img: imgRef.current.src,
      price: priceRef.current.innerText,

    }


*/