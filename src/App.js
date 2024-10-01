import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import NavScrollExample from './Components/Navbar'
import UncontrolledExample from './Components/CarouselExample'
import Menu from './Components/CardExample'
import ModalCart from './Components/ModalCart'
import image2 from '../src/images/menu1.jpg';
import image3 from '../src/images/menu2.jpg';
import image4 from '../src/images/menu3.jpg';
import image1 from '../src/images/menu4.jpg';

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleModalToggle = () => {
    setShowModal(prevShow => !prevShow);
  };

  return (
    <div className="App">
      <Container>
        <Row style={{ margin: '0' }}>
          <NavScrollExample onModalToggle={handleModalToggle}></NavScrollExample>
        </Row>
        <Row>
          <UncontrolledExample></UncontrolledExample>
        </Row>
        <br></br>
        <Row className='mt-2'>
          <Col><Menu img = {image1}></Menu></Col>
          <Col><Menu img = {image2}></Menu></Col>
          <Col><Menu img = {image3}></Menu></Col>
          <Col><Menu img = {image4}></Menu></Col>
        </Row>
        <br></br>
        <Row  style ={{display: 'inline'}}>
          <ModalCart show={showModal}  onModalToggle={handleModalToggle}></ModalCart>
        </Row>
      </Container>
      
    </div>
  );
}

export default App;
