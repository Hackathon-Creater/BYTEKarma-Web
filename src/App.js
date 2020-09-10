import React,{useState} from 'react';
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import { Login } from './login/Login';
import  Home  from './Home/Home';
import { About } from './About/About';
import { Search } from './Search/Search';
import  DataUpload  from './DataUpload/DataUplaod';
import { PrivacyPolicy } from './PrivacyPolicy/PrivacyPolicy';
import { Help } from './Help/Help';


import Sidebar from './components/SideBar';


import './App.css';
var login11=false;
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loginAllowed: false
    }
    this.togglelogin = this.togglelogin.bind(this)
    // alert(window.location.pathname);
  }

  togglelogin() {
    this.setState({
      loginAllowed: true
    })

    if(this.state.loginAllowed){
      login11=true
    }
  }

  render() {


    if ( window.location.pathname == "/") {
      return (
        <div class="container-fluid bgstyle" >
          <div class="row">
            <div class="col-md-4 col-sm-4 col-xs-12"></div>
            <div class="col-md-4 col-sm-4 col-xs-12">
              <Form className="form-container">
                <h1>Welcome</h1>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted" >
                    We'll never share your email with anyone else.
    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>
                <Button variant="success" size="lg" block type="submit" href="/home">
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
              <Route exact path="/help" component={Help} />
              <Route path="/about" component={About} />
              {/* <Route component={NoMatch} /> */}
            </Switch>
          </Router>
        </React.Fragment>
      );
      
    }
  }
}

// function App() {
// }

export default App;
