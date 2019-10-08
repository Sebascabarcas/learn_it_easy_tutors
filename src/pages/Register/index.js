import React from 'react';
import {Button, Form, Icon, Input, Layout, Menu} from 'antd';
import { Link } from "react-router-dom";

const Register = () => {
    
    const {Header, Content, Footer} = Layout

    const handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
    };
    return (
    <Layout className="layout">
      <Header className="header" style={{backgroundColor: "#fff"}}>
        <div className="logo" />
        <Menu
          theme="light"
          mode="horizontal"
        //   defaultSelectedKeys={['1']}
          style={{lineHeight: '64px'}}
        >
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">About Us</Menu.Item>
        </Menu>
      </Header>
      <Content style={{padding: '0 50px', height: 'calc(100vh - 66px)'}}>
        <div style={{background: '#fff', margin: 24, padding: 24, minHeight: 280}}>
        <Form onSubmit={handleSubmit} className="login-form">
        <Form.Item>
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Name"
            />
        </Form.Item>
        <Form.Item>
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Lastname"
            />
        </Form.Item>
        <Form.Item>
            <Input
              prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Email" 
            />
        </Form.Item>
        <Form.Item>
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />
        </Form.Item>
        <Form.Item>
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Confirm Password"
            />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Register
          </Button>
        </Form.Item>
          Or <Link to="/login">Login!</Link>
      </Form>
        </div>
      </Content>
      {/* <Footer style={{textAlign: 'center'}}>
        Ant Design ©2018 Created by Ant UED
      </Footer> */}
    </Layout>
  );
};

export default Register;
