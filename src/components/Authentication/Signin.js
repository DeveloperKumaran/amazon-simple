import { Fragment } from "react";
import React from "react";
import { useState, useRef , useContext} from "react";


import '../Authentication/Signin.css'
import { hasFormSubmit } from "@testing-library/user-event/dist/utils";
import CartContext from "../store/CartContext";


const SignIn = ()=>{

    const emailRef = useRef();
    const passwordRef = useRef();

    const ctx = useContext(CartContext);

    const submitHandler = (e)=>{
         
         e.preventDefault();

         const enteredEmail = emailRef.current.value;
         const enteredPassword  = passwordRef.current.value;

         fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAGP8olt2a_pJo1J_xNWeZOBsgbrInnDz0',
         {
            method:"POST",
            body : JSON.stringify({
                email:enteredEmail,
                password:enteredPassword,
                returnSecureToken:true
            }),
            headers:{
                'Content-Type' : 'application/json'
            }
         }).then((res)=>{
            if(res.ok){
                   const isLoggedIn = true;
                   ctx.setIsLoggedIn(isLoggedIn);
            }
         })
    }


    
    return(
    <Fragment >
        <div className="container" >
              <div className="title">
                     <h1>Sign In</h1>
              </div>

              <div className="description">
                  <p>
                    Please enter your e-mail adress to login.
                  </p>
              </div>

            <form onSubmit={submitHandler} >
                <label htmlFor="mail">E-mail</label>
                <input id="mail"  type="mail" ref={emailRef}/>

                <label htmlFor="password">Password</label>
                <input id="password" type="text" ref={passwordRef} />
            
              
               
             
             <button className="btn-submit" type="submit">Sign In</button>
            </form>
        </div>

    </Fragment>
    )
}


export default SignIn