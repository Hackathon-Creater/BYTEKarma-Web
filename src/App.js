import React,{useState} from 'react';
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import { BrowserRouter as Router, Route, Switch,Redirect } from "react-router-dom";
import NavigationBar  from './components/NavigationBar';
import { Login } from './login/Login';
import  Home  from './Home/Home';
import { Carepackage } from './CarePackage/CarePackage';
import  Search   from './Search/Search';
import  DataUpload  from './DataUpload/DataUplaod';
import { PrivacyPolicy } from './PrivacyPolicy/PrivacyPolicy';
import { Help } from './Help/Help';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import Sidebar from './components/SideBar';
import './App.css';
import Footer from './components/Footer';
import searchResult from './searchResult/searchResult';
import axios from 'axios';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Registration from './Registration/Registration';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import profileDetails from "./Profile/profileDetails";
import Header from './components/Header';
import { Contactus } from './contactus/contactus';
var login11=false;
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username:'',
    password:'',
    authorized:true,
    loginDetails: [
      {
        "username":"Abhishek",
        "password":"1234",
        "name":"Abhishek Tripathi"
      },
        {
        "username":"Bipil",
        "password":"1234",
        "name":"Bipil Raut"
      },
       {
        "username":"Manish",
        "password":"1234",
        "name":"Manish Thete"
      }
      
    ],
    regiFormEnabled:false
    
    }
    // alert(window.location.pathname);
  }
  handleClick(event){
    console.log(this.state.data);
    var validuser=false;
    for (let index = 0; index < this.state.loginDetails.length; index++) {
      const element = this.state.loginDetails[index];
      if(element.username==this.state.username && element.password==this.state.password){
      
      this.setState({name:element.name});
      localStorage.setItem("name",element.name);
      validuser=true;
      window.location.pathname="/home";
      }
    }
    if(!validuser){
      
        this.setState({authorized:false});
        return;
      
    }
  }
  
  createAccountClick(event){
    if(this.state.regiFormEnabled){
      this.setState({regiFormEnabled:false});
    }else{
      this.setState({regiFormEnabled:true});
    }
    // this.setState({regiFormEnabled:true});
  }
    isAuthorized(){
      for (let index = 0; index < this.state.loginDetails.length; index++) {
        const element = this.state.loginDetails[index];
        if(element.username==this.state.username && element.password==this.state.password){
        
        this.setState({name:element.name});
        localStorage.setItem("name",element.name);
        return true;
      }
     }
     return false;
    }
  handleusernameChange(e) {
  
    /* 3. Get Ref Value here (or anywhere in the code!) */
    // const value = this.textInput.current.value;
    this.setState({
      username: e.target.value
    })
  }
  handlepasswordChange(e) {
  
    /* 3. Get Ref Value here (or anywhere in the code!) */
    // const value = this.textInput.current.value;
    this.setState({
      password: e.target.value
    })
  }
  
 
  render() {
 
   
    if ( window.location.pathname == "/") {
      return (
        <div class="container-fluid bgstyle" >
        <div class="row">
          <div class="col-md-4 col-sm-4 col-xs-12 regilayout">
          {
                  this.state.regiFormEnabled?  <MDBContainer>
                  <MDBRow>
                    <MDBCol md="12">
                      <MDBCard>
                        <MDBCardBody>
                          <form>
                            <p className="h4 text-center py-4">Sign up</p>
                            <div className="grey-text">
                              <MDBInput
                                label="Your name"
                                icon="user"
                                group
                                type="text"
                                validate
                                error="wrong"
                                success="right"
                              />
                              <MDBInput
                                label="Your email"
                                icon="envelope"
                                group
                                type="email"
                                validate
                                error="wrong"
                                success="right"
                              />
                              <MDBInput
                                label="Confirm your email"
                                icon="exclamation-triangle"
                                group
                                type="text"
                                validate
                                error="wrong"
                                success="right"
                              />
                              <MDBInput
                                label="Your password"
                                icon="lock"
                                group
                                type="password"
                                validate
                              />
                            </div>
                            {/* <div className="text-center py-4 mt-3">
                              <MDBBtn color="cyan" type="submit">
                                Register
                              </MDBBtn>
                            </div> */}
                             <Button className="btn-rounded" variant="success" size="lg" block  href="/" onClick={(event) => this.handleClick(event)}>
                             Register
                </Button>
                          </form>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer> : null
              }  
          </div>
          <div class="col-md-5 col-sm-4 col-xs-12">
            <Form className="form-container" style={{margin: '5%'}}>
              <h1>Sign in</h1>
              <div className="manicon"> <svg class="MuiSvgIcon-root jss172" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path></svg></div>
              
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" class="bg-lock-email" placeholder="Enter email" value={this.state.username} onChange={evt => this.handleusernameChange(evt)}/>
                <Form.Text className="text-muted" >
                  We'll never share your username with anyone else.
      </Form.Text>
              </Form.Group>
    
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control  class="bg-lock-icon" type="password" placeholder="Password" value={this.state.password} onChange={evt => this.handlepasswordChange(evt)}/>
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
              </Form.Group>
              {!this.state.authorized  &&  <div class="alert alert-danger" role="alert">
         <i class="fas fa-user">Invalid credentials! Please enter correct username and password.</i> 
</div>} 
              <Button disabled={ this.state.regiFormEnabled} className="btn-rounded" variant="success" size="lg" block  onClick={(event) => this.handleClick(event)}>
                Submit
    </Button>
    <div className="row">
      <div className="col-md-6">
      <div className="registrationlink"> <span id="link-signup">
  <a href="/">
  Forgot password ?
  </a>
  </span>
  </div>
      </div>
      <div className="col-md-6">
      <div className="registrationlink"> <span id="link-signup">
  <a class="cursor:progress link" role="button" onClick={(event) => this.createAccountClick(event)}>
  Create account
  </a>
  </span>
  </div>
      </div>
    </div>
 
            </Form>
    
          </div>
          <div class="col-md-4 col-sm-4 col-xs-12"></div>
        </div>
    
      </div>

      );
    } else {
      return (

        
          <Router>
            <Header></Header>
          <Sidebar />
            <NavigationBar />
            {/* <profileDetails></profileDetails>   */}
            <Switch>
              <Route exact path="/home" component={Home} />
              <Route exact path="/search" component={Search} />
              <Route exact path="/searchResult" component={searchResult} />
              <Route exact path="/dataupload" component={DataUpload} />
              <Route exact path="/policy" component={PrivacyPolicy} />
              
              <Route path="/carepackage" component={Carepackage} />
              <Route exact path="/help" component={Help} />
              <Route exact path="/registration" component={Registration} />
              <Route exact path="/contactus" component={Contactus} />
              
              {/* <Route component={NoMatch} /> */}
            </Switch>
            <Footer></Footer>
          </Router>
         
       
      );
      
    }
  }
}

// function App() {
// }

export default App;
