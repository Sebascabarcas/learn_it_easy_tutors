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
  Select,
  Table,
  Layout,
  Menu,
} from 'antd';
import {useParams} from 'react-router-dom';
import {getUser, updateUser} from '../../../services/user';
import {Link} from 'react-router-dom';

const {Title, Text} = Typography;
const {Header, Content, Footer, Sider} = Layout;

const Profile = props => {

  const {form} = props;
  const { Option } = Select
  const [user, _setUser] = useState ({});
  let {id: user_id} = useParams ();

  useEffect (() => {
    const fetchUser = async () => {
      const user = await getUser (user_id);
      _setUser (user);
    };
    fetchUser ();
  }, []);

  const handleSubmit = e => {
    e.preventDefault ();
    const { form } = props
    form.validateFields( async (error, values) => {
      if (!error) {
        console.log(values);
        try {
          const {first_lastname, second_lastname, names, email, role} = user
          const res = await updateUser(user_id, {first_lastname, second_lastname, names, email, role});
          console.log(res);
          notification.success({
            message: 'Update exitoso!',
            description: 'Revise en la tabla'
          })
          form.resetFields()
        } catch (error) {
          
          notification.error({
            message: 'Error!',
            description: 'Se han presentando inconvenientes realizando el update al usuario',
          }) 
        }
        
        // form.resetFields()
      }
    })
  };
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
          <Menu theme="dark" mode="inline">
            <Menu.Item key="1">
              <Icon type="user" />
              <span className="nav-text"><Link to="/logged/">Usuarios</Link></span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{background: '#fff', padding: 0}} />
          <Content style={{margin: '24px 16px 0'}}>
            {/* <Table rowKey="id" columns={columns} dataSource={users} /> */}
            <div>
              <Title style={{fontSize: 60, textAlign: ''}}>Learn It Easy</Title>
              <Form onSubmit={handleSubmit} className="login-form">
                <Form.Item>
                  {form.getFieldDecorator ('names', {
                    initialValue: user.names,
                    rules: [
                      {
                        required: true,
                        message: 'Por favor ingrese sus nombres!',
                      },
                    ],
                  }) (
                    <Input
                      prefix={
                        <Icon type="user" style={{color: 'rgba(0,0,0,.25)'}} />
                      }
                      placeholder="Name"
                    />
                  )}
                </Form.Item>
                <Form.Item>
                  {form.getFieldDecorator ('first_lastname', {
                    initialValue: user.first_lastname,
                    rules: [
                      {
                        required: true,
                        message: 'Por favor ingrese su primer apellido!',
                      },
                    ],
                  }) (
                    <Input
                      prefix={
                        <Icon type="user" style={{color: 'rgba(0,0,0,.25)'}} />
                      }
                      placeholder="First Lastname"
                    />
                  )}
                </Form.Item>
                <Form.Item>
                  {form.getFieldDecorator ('second_lastname', {
                    initialValue: user.second_lastname,
                    rules: [
                      {
                        required: true,
                        message: 'Por favor ingrese su segundo apellido!',
                      },
                    ],
                  }) (
                    <Input
                      prefix={
                        <Icon type="user" style={{color: 'rgba(0,0,0,.25)'}} />
                      }
                      placeholder="Second Lastname"
                    />
                  )}
                </Form.Item>
                <Form.Item
                // hasFeedback
                // validateStatus="error"
                >
                  {form.getFieldDecorator ('role', {
                    initialValue: user.role,
                    rules: [
                      {required: true, message: 'Por favor escoja un rol!'},
                    ],
                  }) (
                    <Select placeholder="Role">
                      <Option value="student">Student</Option>
                      <Option value="teacher">Teacher</Option>
                    </Select>
                  )}
                </Form.Item>
                <Form.Item>
                  {form.getFieldDecorator ('email', {
                    initialValue: user.email,
                    rules: [
                      {required: true, message: 'Por favor ingrese su email!'},
                    ],
                  }) (
                    <Input
                      prefix={
                        <Icon type="mail" style={{color: 'rgba(0,0,0,.25)'}} />
                      }
                      placeholder="Email"
                    />
                  )}
                </Form.Item>
                <Form.Item>
                  <Button
                    block
                    size="large"
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                  >
                    Update
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </Content>
          <Footer style={{textAlign: 'center'}}>
            Learn It Easy{' '}
          </Footer>
        </Layout>
      </Layout>
    )
  );
};

export default Form.create () (Profile);
