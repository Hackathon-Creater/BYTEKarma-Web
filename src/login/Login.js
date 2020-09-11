import React from 'react';
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";



function loginBackend() {
    alert("hello");

  }

export const Login = () => (
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
          <Button variant="success" size="lg" block type="submit" onClick={(event) => this.handleClick(event)}>
            Submit
</Button>
        </Form>

      </div>
      <div class="col-md-4 col-sm-4 col-xs-12"></div>
    </div>

  </div>
  )