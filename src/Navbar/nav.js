import React from 'react'
import { Button, Nav, Navbar, NavDropdown, MenuItem, NavItem } from 'react-bootstrap';

import logo1 from '../images/logo1.png';


function nav() {
    return (
        <div style={{background:"#1C1C1C",height:"90px",boxShadow:" 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)"}} >
           <Navbar  expand="lg">
  <Navbar.Brand href="#home"><img style={{height:"100px",width:"244px",marginTop:"-20px"}} src={logo1}/></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav"  style={{marginTop:"-25px"}}>
    <Nav className="ml-auto">
    <Nav.Link href="#home" style={{color:"white",fontSize:"24px",fontWeight:"700",lineHeight:"28.13px"}}>Home</Nav.Link>
    <Nav.Link href="#home" style={{color:"white",fontSize:"24px",fontWeight:"700",lineHeight:"28.13px"}}>Home</Nav.Link>
    <Nav.Link href="#home" style={{color:"white",fontSize:"24px",fontWeight:"700",lineHeight:"28.13px"}}>Home</Nav.Link>
    <Nav.Link href="#home" style={{color:"white",fontSize:"24px",fontWeight:"700",lineHeight:"28.13px"}}>Home</Nav.Link>
    </Nav>

  </Navbar.Collapse>
</Navbar>
        </div>
    )
}

export default nav
