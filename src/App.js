import React,{useState} from 'react';
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch,Redirect } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import { Login } from './login/Login';
import  Home  from './Home/Home';
import { Carepackage } from './CarePackage/CarePackage';
import  Search   from './Search/Search';
import  DataUpload  from './DataUpload/DataUplaod';
import { PrivacyPolicy } from './PrivacyPolicy/PrivacyPolicy';
import { Help } from './Help/Help';


import Sidebar from './components/SideBar';


import './App.css';
import Footer from './components/Footer';
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
      
    ]

    
    }
    // alert(window.location.pathname);
  }
  handleClick(event){
    console.log(this.state.data);
    for (let index = 0; index < this.state.loginDetails.length; index++) {
      const element = this.state.loginDetails[index];
      if(element.username==this.state.username && element.password==this.state.password){
      
      this.setState({name:element.name});
      localStorage.setItem("name",element.name);
      return <a href="/home"></a>
      }else{
        this.setState({authorized:false});
      }
    }
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
          <div class="col-md-4 col-sm-4 col-xs-12"></div>
          <div class="col-md-4 col-sm-4 col-xs-12">
            <Form className="form-container">
              <h1>Login Form</h1>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" placeholder="Enter email" value={this.state.username} onChange={evt => this.handleusernameChange(evt)}/>
                <Form.Text className="text-muted" >
                  We'll never share your email with anyone else.
      </Form.Text>
              </Form.Group>
    
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={this.state.password} onChange={evt => this.handlepasswordChange(evt)}/>
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
              </Form.Group>
              <Button variant="success" size="lg" block type="submit" href="/home" onClick={(event) => this.handleClick(event)}>
                Submit
    </Button>
            </Form>
    
          </div>
          <div class="col-md-4 col-sm-4 col-xs-12"></div>
        </div>
    
      </div>

      );
    } else {
      return (

        <React.Fragment>
          <Router>
          <Sidebar />
            <NavigationBar />
            
            <Switch>
              <Route exact path="/home" component={Home} />
              <Route exact path="/search" component={Search} />
              <Route exact path="/dataupload" component={DataUpload} />
              <Route exact path="/policy" component={PrivacyPolicy} />
              
              <Route path="/carepackage" component={Carepackage} />
              <Route exact path="/help" component={Help} />
              {/* <Route component={NoMatch} /> */}
            </Switch>
            <Footer></Footer>
          </Router>
          
        </React.Fragment>
      );
      
    }
  }
}

// function App() {
// }

export default App;
