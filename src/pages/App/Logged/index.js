import React, {useState, useEffect} from 'react';
import {
  Button,
  Form,
  Icon,
  Input,
  notification,
  Typography,
  Row,
  Col,
  Table,
  Layout,
  Menu,
} from 'antd';
import {getUsers} from '../../../services/user';
import {Link} from 'react-router-dom';

const {Title, Text} = Typography;
const {Header, Content, Footer, Sider} = Layout;

const Logged = props => {
  const [users, _setUsers] = useState ([]);
  const columns = [
    {
      title: 'Nombres',
      dataIndex: 'names',
      key: 'names',
    },
    {
      title: 'Primer Apellido',
      dataIndex: 'first_lastname',
      key: 'first_lastname',
    },
    {
      title: 'Correo',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span>
            <Button
              onClick={() => {props.history.push(`/logged/${record.id}`)}}
              size="large"
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Editar
            </Button>
        </span>
      ),
    },
  ];

  useEffect (() => {
    const fetchUsers = async () => {
      const users = await getUsers ();
      _setUsers (users);
    };
    fetchUsers ();
  }, []);
  return (
    // <h4>Loggeado</h4>
    (
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
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span className="nav-text" style={{color: 'white'}}><Link style={{color: 'white'}} to="/logged/">Usuarios</Link></span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{background: '#fff', padding: 0}} />
          <Content style={{margin: '24px 16px 0'}}>
            <Table rowKey="id" columns={columns} dataSource={users} />
          </Content>
          <Footer style={{textAlign: 'center'}}>
            Learn It Easy 
          </Footer>
        </Layout>
      </Layout>
    )
  );
};

export default Logged;
