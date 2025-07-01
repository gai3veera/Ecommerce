import React, { useState } from 'react';
import { Card, Typography, Form, Input, Button, Divider, message } from 'antd';

const { Title } = Typography;

function Payment() {
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);

    //  Save payment details to localStorage
    localStorage.setItem('paymentDetails', JSON.stringify(values));

    setTimeout(() => {
      message.success('Payment submitted successfully!');
      console.log('Saved to localStorage:', values);
      setLoading(false);
    }, 1000);
  };

  return (
    <div style={{ maxWidth: 600, margin: '50px auto', padding: '20px' }}>
      <Card bordered>
        <Title level={3}>🧾 Payment Page</Title>

        <Divider orientation="left">Customer Info</Divider>

        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Full Name"
            name="name"
            rules={[{ required: true, message: 'Please enter your name' }]}
          >
            <Input placeholder="John Doe" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: 'Please enter your email' },
              { type: 'email', message: 'Email is not valid' },
            ]}
          >
            <Input placeholder="john@example.com" />
          </Form.Item>

          <Form.Item
            label="Shipping Address"
            name="address"
            rules={[{ required: true, message: 'Please enter your address' }]}
          >
            <Input placeholder="123, Main Street, City" />
          </Form.Item>

          <Divider orientation="left">Order Summary</Divider>
          <p><strong>Product:</strong> Organic Apples (2kg)</p>
          <p><strong>Total:</strong> ₹350</p>

          <Form.Item>
            <Button type="primary" htmlType="submit" block loading={loading}>
              Pay Now
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

export default Payment;
