// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Header from './Components/Header';
import Product from './Components/Product';
import Cart from './Components/Cart';
import { CartProvider } from './Components/CartContext';
import Payment from './Components/Payment';

function App() {
  return (
    
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
           <Route path="/payment" element={<Payment />} />
           
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
