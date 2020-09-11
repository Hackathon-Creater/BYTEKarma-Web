import React, { Component ,json} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import styled from 'styled-components';
import { Form, Button, FormGroup, FormControl, ControlLabel, Accordion, Card, Col } from "react-bootstrap";
import axios from 'axios';


class searchResult extends Component {

    constructor(props) {
        super(props)
        this.state = {
            myObjStr:JSON.parse(localStorage.getItem("searchResult")),
            obj:[Object]
        };

       
    };

    componentWillMount() {
        let objarry=[];
        Object.entries(this.state.myObjStr).map(([index, value]) => {
           
            var obj = JSON.parse(value);
            objarry.push(obj);
            console.log(obj.cif);
        });
        this.setState({
            obj: objarry
        });
    }



  render() {
    return (
        <div class="container-fluid sp" style={{ marginTop: '-0%', marginBottom: '2%', marginLeft: '2%', width: '96%' }}>
        <div class="container-fluid sp">
          <div class="row " >
        <BootstrapTable data={this.state.obj}>
        <TableHeaderColumn isKey dataField='cif'>CIF</TableHeaderColumn>
        <TableHeaderColumn dataField='name'>Name</TableHeaderColumn>
        <TableHeaderColumn dataField='region'>Region</TableHeaderColumn>
        <TableHeaderColumn dataField='pod'>POD</TableHeaderColumn>
        <TableHeaderColumn dataField='cc_bill'>CC_Bill</TableHeaderColumn>
        <TableHeaderColumn dataField='gambling'>gambling</TableHeaderColumn>
        <TableHeaderColumn dataField='amazon'>amazon</TableHeaderColumn>
        <TableHeaderColumn dataField='food'>food</TableHeaderColumn>
        <TableHeaderColumn dataField='movie'>movie</TableHeaderColumn>
        <TableHeaderColumn dataField='shopping'>shopping</TableHeaderColumn>
    </BootstrapTable>
    </div>
    </div>
    </div>
    );
  }
}

  


export default searchResult;

