
import React from "react"
import {Container} from 'react-bootstrap';
import {Navbar} from 'react-bootstrap';


import './styles.css'


export default function Header(){

    return (
        <Navbar expand="lg" variant="primary" bg="primary">
      <Container>
 
        <Navbar.Brand href="#"><h4>Reserva Estacionamento</h4></Navbar.Brand>
   
      </Container>
    </Navbar>
    )
}