import React, {useState} from 'react';
import {
  Button,
  Form,
  Icon,
  Input,
  notification,
  Typography,
  Row,
  Col,
} from 'antd';
import {Link} from 'react-router-dom';
import Authentication from '../../../layouts/Authentication';
import { login } from '../../../services/user';

const {Title, Text} = Typography;

const Login = props => {
  const {form} = props;
  const {success, errorNotification} = notification;
  const [open, setOpen] = useState (false);

  const handleSubmit = e => {
    e.preventDefault ();
    const { form } = props
    form.validateFields( async (error, values) => {
      if (!error) {
        console.log(values);
        try {
          const res = await login(values);
          await localStorage.setItem('__auth_lie', JSON.stringify(res))
          props.history.push('/logged')
          notification.success({
            message: 'Ingreso exitoso!',
            description: 'Disfrute navegar por nuestra plataforma'
          })
        } catch (err) {
          console.log(err);
          
          notification.error({
            message: 'Error!',
            description: 'Credenciales invalidas',
          }) 
        }
        
        // form.resetFields()
      }
    })
  };
  return (
    <Authentication>
      <div className="form-container">
        <Title style={{fontSize: 60, textAlign: 'center'}}>Login</Title>    
        <Title style={{color: 'gray'}} level={2}>Learn It Easy</Title>
        {/* <Text type="secondary">Ant Design</Text> */}
        <Form onSubmit={handleSubmit} className="login-form">
          <Form.Item>
            {form.getFieldDecorator ('email', {
              // initialValue: currentOffice.location_id,
              rules: [
                {required: true, message: 'Por favor ingrese su correo!'},
              ],
            }) (
              <Input
                prefix={<Icon type="mail" style={{color: 'rgba(0,0,0,.25)'}} />}
                placeholder="Email"
              />
            )}
          </Form.Item>
          <Form.Item>
            {form.getFieldDecorator ('password', {
              // initialValue: currentOffice.location_id,
              rules: [
                {required: true, message: 'Por favor ingrese una contraseña!'},
              ],
            }) (
              <Input
                prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}} />}
                // onChange={e => setPassword (e.target.value)}
                // value={password}
                type="password"
                placeholder="Password"
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
    </Authentication>
  );
};

export default Form.create () (Login);
