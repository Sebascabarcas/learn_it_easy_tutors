import React, {useState} from 'react';
import {Button, Form, Icon, Input, Layout, Menu, notification, Typography, Row, Col} from 'antd';
import {Link} from 'react-router-dom';
import Landing from '../../../layouts/Landing';

const { Title, Text } = Typography;

const Home = () => {
  return (
    <Landing>
      <div className="landing-title-container">
        < Title>LEARN FAST, LEARN EASY. LEARN IT EASY </Title>
        <Button type="primary" size="large">Try It Now</Button>
      </div>

    </Landing>
  );
};

export default Home;
