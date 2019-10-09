import React, {useState} from 'react';
import {Button, Form, Icon, Input, Layout, Menu, notification, Typography, Row, Col} from 'antd';
import {Link} from 'react-router-dom';
import Landing from '../../../layouts/Landing';

const { Title, Text } = Typography;

const Product = () => {
  return (
    <Landing>
      <div className="landing-title-container">
        <Title>THE BEST PLACE FOR STUDENTS AND TEACHERS </Title>
        <Title level={4} style={{marginBottom: 25  }}>In learn it easy we improve the relation between students and teachers, making fast connections for fast education.</Title>
        <br/>
        <Button type="primary" size="large">Try It Now</Button>
      </div>

    </Landing>
  );
};

export default Product;
