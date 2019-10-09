import React, { useState } from 'react';
import {Button, Form, Icon, Input, Layout, Typography, notification, Select} from 'antd';
import {Link} from 'react-router-dom';
import Authentication from '../../../layouts/Authentication';
import { register } from '../../../services/user';

const { Title, Text } = Typography;

const Register = props => {
  const {form} = props;
  const { Option } = Select
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
    const { form } = props
    form.validateFields( async (error, values) => {
      if (!error) {
        console.log(values);
        try {
          const res = await register(values);
          console.log(res);
          notification.success({
            message: 'Registro exitoso!',
            description: 'Ingrese al login de la aplicación con los datos registrado'
          })
          form.resetFields()
        } catch (error) {
          
          notification.error({
            message: 'Error!',
            description: 'Se han presentando inconvenientes realizando el registro a la app',
          }) 
        }
        
        // form.resetFields()
      }
    })
  };
  return (
    <Authentication>
      <div className="form-container">
        <Title style={{fontSize: 60, textAlign: ''}}>Learn It Easy</Title>
        <Form onSubmit={handleSubmit} className="login-form">
          <Form.Item>
          {form.getFieldDecorator ('names', {
              // initialValue: currentOffice.location_id,
              rules: [
                {required: true, message: 'Por favor ingrese sus nombres!'},
              ],
            }) (
            <Input
              prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}} />}
              placeholder="Name"
            />
            )}
          </Form.Item>
          <Form.Item>
          {form.getFieldDecorator ('first_lastname', {
              // initialValue: currentOffice.location_id,
              rules: [
                {required: true, message: 'Por favor ingrese su primer apellido!'},
              ],
            }) (
            <Input
              prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}} />}
              placeholder="First Lastname"
            />
            )}
          </Form.Item>
          <Form.Item>
          {form.getFieldDecorator ('second_lastname', {
              // initialValue: currentOffice.location_id,
              rules: [
                {required: true, message: 'Por favor ingrese su segundo apellido!'},
              ],
            }) (
            <Input
              prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}} />}
              placeholder="Second Lastname"
            />
            )}
          </Form.Item>
          <Form.Item
            // hasFeedback
            // validateStatus="error"
          >
            {form.getFieldDecorator('role', {
              // initialValue: 'student',
              rules: [{ required: true, message: 'Por favor escoja un rol!' }],
            })(
              <Select placeholder="Role">
                <Option value="student">Student</Option>
                <Option value="teacher">Teacher</Option>
              </Select>,
            )}
          </Form.Item>
          <Form.Item>
          {form.getFieldDecorator ('email', {
              // initialValue: currentOffice.location_id,
              rules: [
                {required: true, message: 'Por favor ingrese su email!'},
              ],
            }) (
            <Input
              prefix={<Icon type="mail" style={{color: 'rgba(0,0,0,.25)'}} />}
              placeholder="Email"
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
              placeholder="Password"
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
              placeholder="Confirm Password"
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
              Register
            </Button>
          </Form.Item>
          <Link to="/login">I already have an account!</Link>
        </Form>
      </div>
    </Authentication>
  );
};

export default Form.create()(Register);
