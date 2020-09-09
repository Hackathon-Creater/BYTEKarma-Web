import React from 'react';
import styled from 'styled-components';
import { Form, Button, FormGroup, FormControl, ControlLabel, Accordion, Card, Col } from "react-bootstrap";

export const Search = (props) => (
  <div class="container-fluid sp" style={{ marginTop: '-0%', marginBottom: '2%', marginLeft: '2%', width: '96%' }}>
    <div class="container-fluid sp">
      <div class="row " >
        <div class="col-md-12" style={{ marginTop: '2%' }}>
          <Accordion defaultActiveKey="0">
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  Search By Bank Details
      </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <Form>
                    <Form.Row>
                      <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>CIF</Form.Label>
                        <Form.Control type="email" placeholder="Enter CIF Number" />
                      </Form.Group>
                      <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Tansaction Type </Form.Label>
                        <Form.Control as="select" defaultValue="Choose...">
                          <option>Choose...</option>
                          <option>Debit</option>
                          <option>Credit</option>
                        </Form.Control>
                      </Form.Group>
                      <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Account Number</Form.Label>
                        <Form.Control type="email" placeholder="Enter Account Number" />
                      </Form.Group>

                    </Form.Row>


                    <Form.Row>
                      <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Country</Form.Label>
                        <Form.Control as="select" defaultValue="Choose...">
                          <option>Choose...</option>
                          <option>India</option>

                        </Form.Control>
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Control as="select" defaultValue="Choose...">
                          <option>Choose...</option>
                          <option>Maharashtra</option>
                        </Form.Control>
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>City</Form.Label>
                        <Form.Control as="select" defaultValue="Choose...">
                          <option>Choose...</option>
                          <option>Pune</option>
                        </Form.Control>
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Region</Form.Label>
                        <Form.Control as="select" defaultValue="Choose...">
                          <option>Choose...</option>
                          <option>APAC</option>
                          <option>EMEA</option>
                          <option>HBEU</option>
                        </Form.Control>
                      </Form.Group>

                    </Form.Row>

                    <Button variant="success" type="submit">
                      Search
  </Button>
                  </Form>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  Search By Personal Details
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