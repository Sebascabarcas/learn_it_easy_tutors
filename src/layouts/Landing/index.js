import React from 'react'
import { Button, Row, Col } from 'antd';
import Text from 'antd/lib/typography/Text';
import history from '../../history';

const Landing = () => {

    return (
        <div>
            <Row type="flex" className="landing-container">
                <Col className="first-middle landing-middle" span={12}>
                        <div className="content">
                            <Text strong>Sigue lo que te interesa.</Text>
                            <Text strong>Entérate de lo que está hablando la gente.</Text>
                            <Text strong>Únete a la conversación.</Text>
                        </div>
                </Col>
                <Col className="second-middle landing-middle" span={12}>
                    <div className="content">
                        {/* <Button type="primary" ghost shape="round" size="medium">
                            Iniciar sesión
                        </Button> */}
                        <Text strong>Descubre lo que está pasando en el mundo en este momento.</Text>
                        <Text strong className="small">Únete hoy a Twitter.</Text>
                        <Button onClick={() => history.push('signup')} style={{margin: '10px 0'}} type="primary" shape="round">
                            Regístrate
                        </Button>
                        <Button onClick={() => history.push('login')} type="primary" ghost shape="round">
                            Iniciar sesión
                        </Button>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Landing;