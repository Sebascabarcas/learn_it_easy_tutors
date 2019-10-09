import React, {useState} from 'react';
import {Button, Form, Icon, Input, Layout, Menu, notification, Typography, Row, Col} from 'antd';
import {Link} from 'react-router-dom';
import Landing from '../../../layouts/Landing';

const { Title, Text } = Typography;

const Home = () => {
  const {success, error} = notification;
  const [open, setOpen] = useState (false);
  const [email, setEmail] = useState ('');
  const [password, setPassword] = useState ('');

  const handleSubmit = e => {
    e.preventDefault ();
  };
  return (
    <Landing>
    </Landing>
  );
};

export default Home;
