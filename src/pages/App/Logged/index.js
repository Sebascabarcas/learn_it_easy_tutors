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
  Dropdown,
} from 'antd';
import {getUsers} from '../../../services/user';
import {Link} from 'react-router-dom';
import LoggedLayout from '../../../layouts/LoggedLayout';

const {Title, Text} = Typography;
const {Header, Content, Footer, Sider} = Layout;

const Logged = props => {
  const [users, _setUsers] = useState ([]);
  const [current_user, _setCurrentUser] = useState ({});
  const {history} = props;
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
      title: 'Acciones',
      key: 'action',
      render: (text, record) => (
        <span>
            <Button
              onClick={() => {history.push(`/logged/${record.id}`)}}
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

  useEffect (() => {
    const fetchUsers = async () => {
      const users = await getUsers ();
      _setUsers (users);
    };
    fetchUsers ();
  }, []);

  function handleMenuClick({key}) {
    switch (key) {
      case "1":
        history.push(`/profile`)
        break;
      case "2":
        
        break;
    
      default:
        break;
    }
    console.log('click', key);
  }

  return (
    // <h4>Loggeado</h4>
    (
      <LoggedLayout>
        <Content style={{margin: '24px 16px 0'}}>
          <Table rowKey="id" columns={columns} dataSource={users} />
        </Content>
      </LoggedLayout>
    )
  );
};

export default Logged;
