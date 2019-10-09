import React from 'react'
import { Menu, Layout, Button } from 'antd';
import { withRouter, Link } from 'react-router-dom'
import Image from '../../assets/study_group2.jpg'; // Import using relative path
import logo from '../../assets/logo2.svg'; // Import using relative path


const styles = {
    bodyContainer: {
        backgroundImage: `url(${Image})`,
        padding: 40
    }
};

const { Header, Footer, Sider, Content } = Layout;

const Landing = (props) => {
    const {location} = props
    return (
        <Layout>
            <Header className="header-landing">
                {/* <div style={{backgroundImage: `url(${logo})`}} className="logo" /> */}
                <img width="40" className="landing-logo" style={{cursor: 'pointer', marginRight: 30}} src={logo} onClick={() => props.history.push('/')}/>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    selectedKeys={[location.pathname]}
                    // defaultSelectedKeys={['2']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="/product/" ><Link to="/product/">Product</Link></Menu.Item>
                    <Menu.Item key="/our-team/"><Link to="/our-team/">Our Team</Link></Menu.Item>
                    <Menu.Item key="/about/">About</Menu.Item>
                </Menu>
                <div className="header-button-container">
                    <Button type="primary" onClick={() => props.history.push('/login/')} style={{marginRight: '20px'}}>Login</Button>
                    <Button type="primary" onClick={() => props.history.push('/register/')} >Get Started</Button>
                </div>
            </Header>
            <Content style={styles.bodyContainer} className="landing-content">
                {/* <div style={{height: '100vh'}}>

                </div> */}
                {props.children}
            </Content>
        </Layout>
    )
}

export default withRouter(Landing);