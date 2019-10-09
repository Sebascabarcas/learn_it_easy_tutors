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
import { login, recoverPassword } from '../../../services/user';

const {Title, Text} = Typography;

const RecoverPassword = props => {
  const {form} = props;

  const handleSubmit = e => {
    e.preventDefault ();
    const { form, history } = props
    form.validateFields( async (error, values) => {
      if (!error) {
        console.log(values);
        try {
          const res = await recoverPassword(values);
          console.log(res);
          
          notification.success({
            message: 'Restablecimiento enviado!',
            description: 'Recibe su correo para recibir el token de restauración de contraseña'
          })
          history.push('/reset-password/')
        } catch (err) {
          
          notification.error({
            message: 'Error!',
            description: 'Correo invalido',
          }) 
        }
        
        // form.resetFields()
      }
    })
  };
  return (
    <Authentication>
      <div className="form-container">
        <Title style={{fontSize: 60, textAlign: 'center'}}>Recover Password</Title>
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
            <Button
              block
              size="large"
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Send
            </Button>
          </Form.Item>
          <Row type="flex" justify="space-between">
            <Col>
              <Link to="/login">Login!</Link>
            </Col>
            {/* <Col>
              <Link to="/register">Register now!</Link>
            </Col> */}
          </Row>
        </Form>
      </div>
    </Authentication>
  );
};

export default Form.create () (RecoverPassword);
