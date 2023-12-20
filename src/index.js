import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import CartProvider from './components/store/CartContextProvider';
import App from './App';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<CartProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</CartProvider>
);


