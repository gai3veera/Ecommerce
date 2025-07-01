// src Product.js
import React, { useContext } from 'react';
import { Card, Button, message } from 'antd';
import { CartContext } from './CartContext';

const { Meta } = Card;

const products = [
  { id: 1, name: 'Strawberry', image: '/product-img-1.jpg', price: 'Rs. 150' },
  { id: 2, name: 'Grapes', image: '/product-img-2.jpg', price: 'Rs. 200' },
  { id: 3, name: 'Lemon', image: '/product-img-3.jpg', price: 'Rs. 50' },
  { id: 4, name: 'Avocado', image: '/product-img-4.jpg', price: 'Rs. 500' },
  { id: 5, name: 'Green Apple', image: '/product-img-5.jpg', price: 'Rs. 500' },
  { id: 6, name: 'Berry', image: '/product-img-6.jpg', price: 'Rs. 250' }
];

function Product() {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (item) => {
    addToCart(item);
    message.success(`${item.name} added to cart`);
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '30px', justifyContent: 'center' }}>
      {products.map((item) => (
        <Card
          key={item.id}
          hoverable
          style={{ width: 240 }}
          cover={<img alt={item.name} src={item.image} />}
          actions={[
            <Button type="primary" onClick={() => handleAddToCart(item)}>
              Add to Cart
            </Button>
          ]}
        >
          <Meta title={item.name} description={item.price} />
        </Card>
      ))}
    </div>
  );
}

export default Product;
