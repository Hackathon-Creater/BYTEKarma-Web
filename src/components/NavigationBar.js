import React,{Component} from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
// import {logo} from '../images/';
import { ReactComponent as ReactLogo } from '../images/logo.svg';
import { logo } from '../images/finallogo.PNG';
import profileDetails from "../Profile/profileDetails";
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

class NavigationBar extends Component {
  state = {
    seen: false
  };

  togglePop = () => {
    this.setState({
      seen: !this.state.seen
    });
  };

  clickProfile(e) {
  alert("Hello");
    /* 3. Get Ref Value here (or anywhere in the code!) */
    // const value = this.textInput.current.value;
   return  <div className="modal">
   <div className="modal_content">
   <span className="close" onClick={this.handleClick}>&times;    </span>
   <p>I'm A Pop Up!!!</p>
  </div>
 </div>
  }

  render() {
      return (
        <Navbar>
        <Navbar.Brand href="#home" ><img src={logo1} style={{width:'10%'}}/><strong>HSBC</strong>  &nbsp; | At Risk Customer Protection</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end" style={{backgroundColor:'#e4c5d2'}}>
        <Nav className="ml-auto" style={{color:"black"}}>
              <Nav.Item><Nav.Link href="/home"><strong>Home</strong></Nav.Link></Nav.Item> 
              <Nav.Item><Nav.Link href="/search"><strong>Search</strong></Nav.Link></Nav.Item> 
              <Nav.Item><Nav.Link href="/dataupload"><strong>Data Upload</strong></Nav.Link></Nav.Item> 
              <Nav.Item><Nav.Link href="/policy"><strong>Privacy Policy</strong></Nav.Link></Nav.Item> 
            
               <Nav.Item><Nav.Link href="/carepackage"><strong>Care Package</strong> </Nav.Link></Nav.Item>
               <Nav.Item><Nav.Link href="/help"><strong>Help</strong></Nav.Link></Nav.Item> 
               
             </Nav>
            <Navbar.Text>
             &nbsp; &nbsp; |&nbsp; Signed in as:  &nbsp; <a onClick={this.togglePop}> <i class="fas fa-user">&nbsp; {localStorage.getItem("name")}</i></a>
           
            </Navbar.Text>
            <Navbar.Text>  &nbsp; &nbsp;  <a href="/"> <i class="fas fa-sign-out-alt">&nbsp; Log out &nbsp;</i> </a></Navbar.Text>
             {/* <h2 class="my-5 h2">Basic example</h2> */}

        {/* <img class="rounded-circle" alt="100x100" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
          data-holder-rendered="true"></img> */}
          {/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Launch demo modal
</button> */}


{/* <!-- Modal --> */}

        </Navbar.Collapse>
    </Navbar>
      );
  }
}

export default NavigationBar;
