import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand className='text-primary fs-4' href="#home">HungryHub</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav >
            <Nav.Link className='navlink text-white' href="#home">Home</Nav.Link>
            <Nav.Link className='navlink text-white' href="#menu">Menu</Nav.Link>
            <Nav.Link className='navlink text-white' href="#contact">Make a reservation</Nav.Link>
            <Nav.Link className='navlink text-white' href="#contact">Contact us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header