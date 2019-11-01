import React, {useState, useEffect} from 'react';
import {
  Button,
  Icon,
  Typography,
  Layout,
  Menu,
  Dropdown,
} from 'antd';
import { withRouter, Link } from 'react-router-dom'

const {Title, Text} = Typography;
const {Header, Content, Footer, Sider} = Layout;

const LoggedLayout = props => {

  const handleMenuClick = ({key}) => {
    switch (key) {
      case "1":
        props.history.push(`/profile`)
        break;
      case "2":
        localStorage.removeItem('__auth_lie')
        props.history.push(`/login`)
        break;
    
      default:
        break;
    }
  }

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">
        <Icon type="user" />
        Perfil
      </Menu.Item>
      <Menu.Item key="2">
        <Icon type="logout" />
        Cerrar sesión
      </Menu.Item>
    </Menu>
  );

  return (
    // <h4>Loggeado</h4>
    (
      <Layout className="loggedLayout">
        <Header className="header">
          <div className="logo" />
          <Dropdown overlay={menu}>
          {/* <Row type="flex" justify="end" align="middle"> */}
            <Button style={{float: 'right', margin: '15px'}}>
              <Icon type="user" />
            </Button>
          {/* </Row> */}
          </Dropdown>
          {/* <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu> */}
        </Header>
        <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={broken => {
            console.log (broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log (collapsed, type);
          }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline">
            <Menu.Item key="1">
              <Icon type="user" />
              <span className="nav-text"><Link to="/logged/">Usuarios</Link></span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          {props.children}
          <Footer style={{textAlign: 'center'}}>
            Learn It Easy{' '}
          </Footer>
        </Layout>
        </Layout>
      </Layout>
    )
  )
}

export default withRouter(LoggedLayout);