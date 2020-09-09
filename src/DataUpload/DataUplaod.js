import React from 'react';
import styled from 'styled-components';
  
import { Form, Button, FormGroup, FormControl, ControlLabel, Accordion, Card, Col } from "react-bootstrap";

export const DataUpload = (props) => (
  <div class="container-fluid sp" style={{ marginTop: '-0%', marginBottom: '2%', marginLeft: '2%', width: '96%' }}>
    <div class="container-fluid sp">
      <div class="row " >
        <div class="col-md-12" style={{ marginTop: '2%' }}>
          <Form>
            <Form.Group>
              <Form.File id="exampleFormControlFile1" label="Example file input" />
            </Form.Group>
          </Form>
        </div>
      </div>
    </div>
  </div>
)