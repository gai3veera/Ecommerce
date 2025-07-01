// src/Cart.js
import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const { cart, removeFromCart, getTotalItems, getTotalPrice } = useContext(CartContext);
  const navigate = useNavigate(); 

  const handleProceed = () => {
    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    navigate('/payment');
  };

  return (
    <div style={{ padding: '30px' }}>
      <h2>Your Cart 🛒</h2>
      <p><strong>Total Items:</strong> {getTotalItems()}</p>
      <p><strong>Total Price:</strong> Rs.{getTotalPrice()}</p>

      {cart.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index} style={{ marginBottom: '10px' }}>
                {item.name} - ₹{item.price}
                <Button
                  danger
                  size="small"
                  style={{ marginLeft: '10px' }}
                  onClick={() => removeFromCart(index)}
                >
                  Remove
                </Button>
              </li>
            ))}
          </ul>

          <div style={{ marginTop: '30px' }}>
            <Button type="primary" size="large" onClick={handleProceed}>
              Confirm & Proceed to Payment
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
