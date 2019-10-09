import React from 'react';
import {Button, Form, Icon, Input, Layout, Menu, Typography} from 'antd';
import {Link} from 'react-router-dom';
import Authentication from '../../../layouts/Authentication';

const { Title, Text } = Typography;

const Register = () => {
  const {Header, Content, Footer} = Layout;

  const handleSubmit = e => {
    e.preventDefault ();
    this.props.form.validateFields ((err, values) => {
      if (!err) {
        console.log ('Received values of form: ', values);
      }
    });
  };
  return (
    <Authentication>
      <div className="form-container">
        <Title style={{fontSize: 60, textAlign: ''}}>Learn It Easy</Title>
        <Form onSubmit={handleSubmit} className="login-form">
          <Form.Item>
            <Input
              prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}} />}
              placeholder="Name"
            />
          </Form.Item>
          <Form.Item>
            <Input
              prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}} />}
              placeholder="Lastname"
            />
          </Form.Item>
          <Form.Item>
            <Input
              prefix={<Icon type="mail" style={{color: 'rgba(0,0,0,.25)'}} />}
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item>
            <Input
              prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}} />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Input
              prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}} />}
              type="password"
              placeholder="Confirm Password"
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
              Register
            </Button>
          </Form.Item>
          <Link to="/login">I already have an account!</Link>
        </Form>
      </div>
    </Authentication>
  );
};

export default Register;
