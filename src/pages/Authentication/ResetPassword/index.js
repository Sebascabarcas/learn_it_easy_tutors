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
import { resetPassword } from '../../../services/user';

const {Title, Text} = Typography;



const ResetPassword = props => {
  const {form} = props;
  const [confirmDirty, _setConfirmDirty] = useState (false);
  const compareToFirstPassword = (rule, value, callback) => {
    
    const { form } = props
    if (value && value !== form.getFieldValue('password')) {
      callback('Las contraseñas ingresadas no son iguales!')
    } else {
      callback()
    }
  }
  
  const validateToNextPassword = (rule, value, callback) => {
    const { form } = props
    if (value && confirmDirty) {
      form.validateFields(['confirm'], { force: true })
    }
    callback()
  }

  const handleSubmit = e => {
    e.preventDefault ();
    const { form, history } = props
    form.validateFields( async (error, values) => {
      if (!error) {
        console.log(values);
        try {
          const res = await resetPassword(values);
          console.log(res);
          
          notification.success({
            message: 'Restablecimiento exitoso!',
            description: 'Ingrese con su nueva contraseña'
          })
          history.push('/login/')
        } catch (err) {
          
          notification.error({
            message: 'Error!',
            description: 'Token invalido',
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
          {form.getFieldDecorator ('token', {
              // initialValue: currentOffice.location_id,
              rules: [
                {required: true, message: 'Por favor ingrese el token enviado al correo!'},
              ],
            }) (
            <Input
              prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}} />}
              placeholder="Token"
            />
            )}
          </Form.Item>
         
          <Form.Item>
          {form.getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: 'Por favor ingrese la contraseña',
              },
              {
                validator: validateToNextPassword,
              },
            ],
          })(
            <Input
              prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}} />}
              type="password"
              placeholder="New Password"
            />
          )}
          </Form.Item>
          <Form.Item>
          {form.getFieldDecorator('confirm', {
            rules: [
              {
                required: true,
                message: 'Por favor ingrese la confirmación de la contraseña',
              },
              {
                validator: compareToFirstPassword,
              },
            ],
          })(
            <Input
              prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}} />}
              type="password"
              placeholder="Confirm New Password"
              onBlur={(e) => _setConfirmDirty(confirmDirty || !!e.target.value)}
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
              Reset
            </Button>
          </Form.Item>
          <Link to="/login">I already have an account!</Link>
        </Form>  
      </div>
    </Authentication>
  );
};

export default Form.create () (ResetPassword);
