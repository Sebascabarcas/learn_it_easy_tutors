import React from 'react'
import { Menu, Layout, Button } from 'antd';
import history from '../../history';
import { withRouter } from 'react-router-dom'
import Image from '../../assets/study_group1.png'; // Import using relative path


const styles = {
    bodyContainer: {
        backgroundImage: `url(${Image})`
    }
};

const { Header, Footer, Sider, Content } = Layout;

const Authentication = (props) => {

    return (
        <Layout>
            <Header className="header-landing">
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    // defaultSelectedKeys={['2']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="1">Product</Menu.Item>
                    <Menu.Item key="2">Our Team</Menu.Item>
                    <Menu.Item key="3">About</Menu.Item>
                </Menu>
                <div className="header-button-container">
                    <Button type="primary" onClick={() => props.history.push('/login/')} style={{marginRight: '20px'}}>Login</Button>
                    <Button type="primary" onClick={() => props.history.push('/register/')} >Get Started</Button>
                </div>
            </Header>
            <Content style={styles.bodyContainer} className="auth-landing-content">
                {/* <div style={{height: '100vh'}}>

                </div> */}
                {props.children}
            </Content>
        </Layout>
    )
}

export default withRouter(Authentication);