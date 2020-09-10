import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
// import {logo} from '../images/';
import { ReactComponent as ReactLogo } from '../images/logo.svg';
import { logo } from '../images/finallogo.PNG';

const logo1 = require('../images/finallogo.PNG');
const Styles = styled.div`
  .navbar { background-color: #222; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1em;
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;



export const NavigationBar = () => (

    //   <Styles>
    //     <Navbar expand="lg">
    //     <Navbar.Brand href="#home" ><img src={logo1} style={{width:'10%'}}/> HSBC &nbsp; | At Risk Customer Protection</Navbar.Brand>
    //       <Navbar.Toggle aria-controls="basic-navbar-nav"/>
    //       <Form className="form-center">
    //         <FormControl type="text" placeholder="Search" className="" />
    //       </Form>
    //       <Navbar.Collapse id="basic-navbar-nav">
    //         <Nav className="ml-auto">
    //           <Nav.Item><Nav.Link href="/home">Home</Nav.Link></Nav.Item> 
    //           <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
    //         </Nav>
    //       </Navbar.Collapse>
    //     </Navbar>
    //   </Styles>

    <Navbar>
        <Navbar.Brand href="#home" ><img src={logo1} style={{width:'10%'}}/><strong>HSBC</strong>  &nbsp; | At Risk Customer Protection</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <Nav className="ml-auto" style={{color:"black"}}>
              <Nav.Item><Nav.Link href="/home">Home</Nav.Link></Nav.Item> 
              <Nav.Item><Nav.Link href="/search">Search</Nav.Link></Nav.Item> 
              <Nav.Item><Nav.Link href="/dataupload">DataUpload</Nav.Link></Nav.Item> 
              <Nav.Item><Nav.Link href="/policy">Privacy Policy</Nav.Link></Nav.Item> 
              <Nav.Item><Nav.Link href="/help">Help</Nav.Link></Nav.Item> 
               <Nav.Item><Nav.Link href="/about">About &nbsp; &nbsp; |&nbsp;</Nav.Link></Nav.Item>
             </Nav>
            <Navbar.Text>
                Signed in as: <a href="#login">Manish Thete</a>
            </Navbar.Text>
          
        </Navbar.Collapse>
    </Navbar>
)