import React from 'react';
import { Typography, Button, Image, Card } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Title, Paragraph } = Typography;

function Home() {
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate('/products');
  };

  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <Title>🍏 Welcome to Organic Store</Title>
      <Paragraph>
        Eat healthy, stay healthy. 100% fresh and organic fruits delivered to your door.
      </Paragraph>

      <Image
        src="/product-img-1.jpg"
        alt="Organic"
        width={300}
        preview={false}
      />

      <div style={{ marginTop: '20px' }}>
        <Button type="primary" size="large" onClick={handleShopNow}>
          Shop Now
        </Button>
      </div>

      <Card
        title="Why Choose Us?"
        style={{ width: 300, margin: '40px auto' }}
      >
        <p>✔ 100% Organic</p>
        <p>✔ Fast Delivery</p>
        <p>✔ Affordable Prices</p>
      </Card>
    </div>
  );
}

export default Home;
