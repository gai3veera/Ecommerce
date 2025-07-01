// src/Components/Header.js
import React, { useContext } from 'react';
import { Menu, Badge } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';

function Header() {
  const { getTotalItems } = useContext(CartContext);

  return (
    <Menu mode="horizontal">
      <Menu.Item key="home">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="products">
        <Link to="/products">Products</Link>
      </Menu.Item>
      <Menu.Item key="cart" style={{ marginLeft: 'auto' }}>
        <Link to="/cart">
          <Badge count={getTotalItems()} showZero>
            <ShoppingCartOutlined style={{ fontSize: '20px' }} />
          </Badge>
        </Link>
      </Menu.Item>
    </Menu>
  );
}

export default Header;
