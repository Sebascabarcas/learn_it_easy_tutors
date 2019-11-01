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
  Upload,
  Dropdown,
} from 'antd';
import {useParams} from 'react-router-dom';
import {getUser, updateUser} from '../../../services/user';
import {Link} from 'react-router-dom';
import PreviewImage from '../../../components/PreviewImage';
import LoggedLayout from '../../../layouts/LoggedLayout';

const {Title, Text} = Typography;
const {Header, Content, Footer, Sider} = Layout;

const Profile = props => {

  const {form, history} = props;
  const { Option } = Select
  const [loading, _setLoading] = useState (false);
  const [user, _setUser] = useState ({profile_picture: {url: null}});
  const [userProfileImage, _setUserProfileImage] = useState (null);

  useEffect (() => {
    const getCurrentUser = async () => {
      const current_session = await JSON.parse(localStorage.getItem ('__auth_lie'));
      if (current_session) {
        const user = await getUser (current_session.user_id);
        console.log(user)
        _setUser(user)
      }
    };
    getCurrentUser();
  }, []);

  function fromJsonToFormData(obj, form, namespace, k) {
    const keys = k || Object.keys(obj)
  
    // Array(n).join(".").split(".");
  
    const fd = form || new FormData()
    let formKey
  
    // for(var property in obj) {
    for (let i = 0; i < keys.length; i += 1) {
      //   if(obj.hasOwnProperty(obj[keys[i]])) {
      if (namespace) {
        formKey = `${namespace}[${keys[i].match(/^[0-9]+$/) !== null ? '' : keys[i]}]`
      } else {
        formKey = keys[i]
      }
  
      if (typeof obj[keys[i]] === 'object' && obj[keys[i]] && !(obj[keys[i]] instanceof File)) {
        console.log(keys[i]);
        console.log(obj[keys[i]]);
        
        fromJsonToFormData(obj[keys[i]], fd, formKey, Object.keys(obj[keys[i]]))
      } else if (obj[keys[i]] instanceof File) {
        // if it's a string or a File object
        fd.append(formKey, obj[keys[i]], obj[keys[i].name])
      } else {
        fd.append(formKey, obj[keys[i]])
      }
      //   }
    }
  
    return fd
  }

  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  const handleChange = info => {
    if (info.file.status === 'uploading') {
      _setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl =>
        _setUser({
          ...user,
          profile_picture: {url: imageUrl},
        }),
      );
    }
  };

  const handleMenuClick = ({key}) => {
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

  const handleSubmit = e => {
    e.preventDefault ();
    const { form } = props
    form.validateFields( async (error, values) => {
      if (!error) {
        console.log(values);
        try {
          // const {first_lastname, second_lastname, names, email, role} = user
          // user.password = "123456"
          if (user.profile_picture.url) user.profile_picture = user.profile_picture.url 
          let user_to_update = fromJsonToFormData(user)
          const res = await updateUser(user.id, user_to_update);
          console.log(res);
          notification.success({
            message: 'Update exitoso!',
            description: 'Revise en la tabla'
          })
          form.resetFields()
        } catch (error) {
          console.log(error)
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
      <LoggedLayout>
        <Content style={{margin: '24px 16px 0'}}>
          {/* <Table rowKey="id" columns={columns} dataSource={users} /> */}
          <div>
            <Title style={{fontSize: 60, textAlign: 'center'}}>Perfil</Title>
            <Row type="flex" justify="center">
            <Form onSubmit={handleSubmit} className="profile-form">
              <Form.Item>
                {user.profile_picture.url ? (
                      <PreviewImage
                        canDelete="true"
                        onDelete={() => _setUser({...user, ...{profile_picture: {url: null}}})}
                        previewImage={user.profile_picture.url}
                      />
                    ) : (
                        <Upload 
                          name="logo"
                          className="upload--no-delete"
                          customRequest={({ onSuccess }) => {
                            setTimeout(() => {
                              onSuccess('ok')
                            }, 0)
                          }}
                          onChange={handleChange}
                        >
                          <Button>
                            <Icon type="upload" /> Subir Foto
                          </Button>
                        </Upload>
                      )}
              </Form.Item>
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
            </Row>
          </div>
        </Content>
      </LoggedLayout>
    )
  );
};

export default Form.create () (Profile);
