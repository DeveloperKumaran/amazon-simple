import { Fragment, useContext, useState,useEffect } from "react";
import { Route, Routes, Navigate } from "react-router";
import Home from "./components/Home";
import SignIn from './components/Authentication/Signin'

import CartContext from "./components/store/CartContext";
import { About } from "./components/About";

function App() {
  const ctx = useContext(CartContext);

  

  return (
    
      <Routes>
        <Route
          path="/"
          element={
            <Home/>
          }
        />
        <Route
          path="/signin"
          element={
            <div>
              {!ctx.isLoggedIn ? (
                <SignIn />
              ) : (
                <Navigate to="/" replace={true} />
              )}
            </div>
          }
        />


      <Route
          path="/about"
          element={
           
             <About/>
          }
        />
      </Routes>
    
  );
}

export default App;






















/*import { Fragment, useContext, useState } from "react";import { Route, Routes } from "react-router";
import Home from "./components/Home";
import SignIn from './components/Authentication/Signin'

import CartContext from "./components/store/CartContext";


function App() {

  const ctx = useContext(CartContext)
  return (
 
   <Fragment><Routes>
    <Route path="/" element={
         <div>
            {(ctx.isLoggedIn) &&<Home />}
            {!(ctx.isLoggedIn) && <SignIn/>}
            </div>
          }/>
          </Routes>


        
  </Fragment>
 
  );
}

export default App;
*/
