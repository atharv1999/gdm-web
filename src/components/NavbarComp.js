import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import '../stylesheets/navbar.css'

const NavbarComp = () => {



  return (
    <div>
        <Navbar style={{fontSize:'20px'}} fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand style={{fontSize:'25px'}} href="#home">Gaurav D. Murkute<Navbar.Text href="#home" style={{fontSize: '12px', marginLeft:'5px'}}> & Co.</Navbar.Text></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
            <NavDropdown title="Services" id="basic-nav-dropdown" menuVariant='dark'>
                <NavDropdown.Item href="#action/3.1">Accounting and Business Support</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Assuarance</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Advisory & Consultancy</NavDropdown.Item>
                {/* <NavDropdown.Divider /> */}
                <NavDropdown.Item href="#action/3.4">Tax & Regulatory</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#careers">Careers</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default NavbarComp