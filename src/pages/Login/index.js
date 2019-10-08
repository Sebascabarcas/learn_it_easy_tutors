import React, {useState} from 'react';
import {Button, Form, Icon, Input, Layout, Menu, notification, Typography, Row, Col} from 'antd';
import {Link} from 'react-router-dom';
import Landing from '../Landing';

const { Title, Text } = Typography;

const Login = () => {
  const {success, error} = notification;
  const [open, setOpen] = useState (false);
  const [email, setEmail] = useState ('');
  const [password, setPassword] = useState ('');

  const handleSubmit = e => {
    e.preventDefault ();
  };
  return (
    <Landing>
      <div className="form-container">
        <Title style={{fontSize: 60, textAlign: ''}}>Learn It Easy</Title>
        {/* <Text type="secondary">Ant Design</Text> */}
        <Form onSubmit={handleSubmit} className="login-form">
          <Form.Item>
            <Input
              prefix={<Icon type="mail" style={{color: 'rgba(0,0,0,.25)'}} />}
              onChange={e => setEmail (e.target.value)}
              value={email}
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item>
            <Input
              prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}} />}
              onChange={e => setPassword (e.target.value)}
              value={password}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Button
              block
              size="large"
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
          </Form.Item>
          <Row type="flex" justify="space-between">
            <Col>
              <Link to="/recover-password">Forgot your password?</Link>
            </Col>
            <Col>
              <Link to="/register">Register now!</Link>
            </Col>
          </Row>
        </Form>
      </div>
    </Landing>
  );
};

export default Login;
