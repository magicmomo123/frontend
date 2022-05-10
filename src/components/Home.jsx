import React, { Component } from "react";
import {Row, Col, Container, Button} from 'react-bootstrap'
import NodeMap from './NodeMap.jsx'
import AlertTemplate from 'react-alert-template-basic'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'


class Home extends Component {
  
  render() {
    return (
      <AlertProvider template={AlertTemplate} >
      <Container style={{
        width: 1000, height: 1000, backgroundColor: 'powderblue'
      }}>
        <h1 className="text-center mt-3">Robot Control Page</h1>
        <NodeMap/>
      </Container>
      </AlertProvider>
    );
  }
}

export default Home;
