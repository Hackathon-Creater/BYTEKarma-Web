import React, { Component } from 'react';
import styled from 'styled-components';
import { Form, Button, FormGroup, FormControl, ControlLabel, Accordion, Card, Col } from "react-bootstrap";
import axios from 'axios';


class Search extends Component {

  constructor(props) {
    super(props)
    /* 1. Initialize Ref */
    this.state = {
      cif: "",
      country:[],
      state: "",
      city: "",
      region: "",
      name: "",
      gender: ""

    };

    // this.cif = React.createRef(); 
  }

  handleCifChange(e) {
    console.log(e);
    this.setState({
      cif: e.target.value,
    })
  }


  handleCountryChange(e) {
    console.log(e);
    this.setState({
      country: [e.target.value],
    })
  }


  handleStateChange(e) {
    console.log(e);
    this.setState({
      state: e.target.value,
    })
  }

  SearchApi = () => {
    window.location.pathname="/searchResult";
    // axios({
    //   method: 'post',
    //   url: "http://3.18.106.65:5000/search",
    //   headers: { 'Content-Type': 'application/json' },
    //   data: {
    //     "cif": this.state.cif,
    //     "country": this.state.country.length > 0?this.state.country:"",
    //     "state": this.state.state,
    //     "city": "",
    //     "region": "",
    //     "name": "",
    //     "gender": ""
    //   }
    // }).then(function (response) {
    //   const searchData = JSON.stringify(response);
    
    //   const data = JSON.parse(searchData).data;
    //   console.log(data.SearchResponse);
    //   // route.push("/searchResul");
    //   localStorage.setItem('searchResult', JSON.stringify(data.SearchResponse));
    //   window.location.pathname="/searchResult";

    // });

    // axios.post("http://3.18.106.65:5000/search/"+this.state); 
  };

  render() {

    return (
      <div class="container-fluid sp" style={{ marginTop: '-0%', marginBottom: '2%', marginLeft: '2%', width: '96%' }}>
        <div class="container-fluid sp">
          <div class="row " >
            <div class="col-md-12" style={{ marginTop: '2%' }}>
              <Accordion defaultActiveKey="0">
                <Card>
                  <Card.Header style={{backgroundColor: '#656b96'}}>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0" style={{color:'white'}}>
                     <strong>Search By Bank Details</strong> 
              </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <Form>
                        <Form.Row>
                          <Form.Group as={Col} controlId="formCifId">
                            <Form.Label><strong>CIF</strong></Form.Label>
                            <Form.Control type="text" value={this.state.cif} onChange={evt => this.handleCifChange(evt)}
                              placeholder="Enter CIF Number" />

                          </Form.Group>
                          <Form.Group as={Col} controlId="formTranType">
                            <Form.Label> <strong>Transaction Type</strong></Form.Label>
                            <Form.Control as="select" defaultValue="Choose...">
                              <option>Choose...</option>
                              <option>Debit</option>
                              <option>Credit</option>
                            </Form.Control>
                          </Form.Group>
                          <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label><strong>Account Number</strong></Form.Label>
                            <Form.Control type="email" placeholder="Enter Account Number" />
                          </Form.Group>

                        </Form.Row>


                        <Form.Row>
                          <Form.Group as={Col} controlId="formGridState">
                            <Form.Label><strong>Country</strong></Form.Label>
                            <Form.Control as="select" defaultValue="Choose..." value={this.state.country} onChange={evt => this.handleCountryChange(evt)}>
                              <option>Choose...</option>
                              <option>India</option>

                            </Form.Control>
                          </Form.Group>

                          <Form.Group as={Col} controlId="formGridState">
                            <Form.Label><strong>State</strong></Form.Label>
                            <Form.Control as="select" defaultValue="Choose..." value={this.state.state} onChange={evt => this.handleStateChange(evt)}>
                              <option>Choose...</option>
                              <option>Maharashtra</option>
                            </Form.Control>
                          </Form.Group>

                          <Form.Group as={Col} controlId="formGridState">
                            <Form.Label><strong>City</strong></Form.Label>
                            <Form.Control as="select" defaultValue="Choose...">
                              <option>Choose...</option>
                              <option>Pune</option>
                            </Form.Control>
                          </Form.Group>

                          <Form.Group as={Col} controlId="formGridState">
                            <Form.Label><strong>Region</strong></Form.Label>
                            <Form.Control as="select" defaultValue="Choose...">
                              <option>Choose...</option>
                              <option>APAC</option>
                              <option>EMEA</option>
                              <option>HBEU</option>
                            </Form.Control>
                          </Form.Group>

                        </Form.Row>

                        <Button variant="btn btn-danger" onClick={this.SearchApi}>
                          Search
          </Button>
                      </Form>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                 

                  <Card.Header style={{backgroundColor: '#656b96'}}>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0" style={{color:'white'}}>
                     <strong>Search By Personal Details</strong> 
              </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>
                      <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                          <Form.Label>Name</Form.Label>
                          <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                          <Form.Label>Gender</Form.Label>
                          <Form.Control as="select" defaultValue="Choose...">
                            <option>Male</option>
                            <option>Female</option>
                          </Form.Control>
                        </Form.Group>

                      </Form.Row>
                      <Button variant="success" type="submit">
                        Search
          </Button>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Search;