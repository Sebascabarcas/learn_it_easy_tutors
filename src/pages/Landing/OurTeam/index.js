import React, {useState} from 'react';
import {Button, Form, Icon, Input, Layout, Menu, notification, Typography, Row, Col, Avatar} from 'antd';
import Landing from '../../../layouts/Landing';

const { Title, Text } = Typography;

const OurTeam = () => {
  return (
    <Landing>
      <div className="landing-title-container landing-title-container--team landing-title-container--center">
        <Title style={{textAlign: 'center'}}>WE ARE A PASSIONATE GROUP OF STUDENTS </Title>
        <Row type="flex" justify="space-between" className="our-team-container">
          <Col style={{textAlign: 'center'}}>
            <Avatar size={128} icon="user" />
            <br/>
            <Text style={{color: 'white', fontSize: 16}} strong>Sebastian Cabarcas</Text>
          </Col>
          <Col style={{textAlign: 'center'}}>
            <Avatar size={128} icon="user" />
            <br/>
            <Text style={{color: 'white', fontSize: 16}} strong>Jasir Guzman</Text>
          </Col>
          <Col style={{textAlign: 'center'}}>
            <Avatar size={128} icon="user" />
            <br/>
            <Text style={{color: 'white', fontSize: 16}} strong>Ronaldo Carrero</Text>
          </Col>
        </Row>
      </div>

    </Landing>
  );
};

export default OurTeam;
