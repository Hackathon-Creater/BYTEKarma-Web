import React, { Component, json } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import styled from 'styled-components';
import { Form, Button, FormGroup, FormControl, ControlLabel, Accordion, Card, Col } from "react-bootstrap";
import axios from 'axios';
import { Bar, Doughnut, Line, Pie, HorizontalBar } from "react-chartjs-2";

class searchResult extends Component {

    constructor(props) {
        super(props)
        this.state = {
            myObjStr: JSON.parse(localStorage.getItem("searchResult")),
            obj: [Object]
        }
        this.boundryArea = {
            boundryAreadata: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label: 'NEGATIVE SPENDING TREND',
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: 'skyblue',
                        borderColor: 'rgba(75,192,192,1)',
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: 'rgba(75,192,192,1)',
                        pointBackgroundColor: '#fff',
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [65, 59, 80, 81, 56, 55, 40]
                    }
                ]
            }
        }
        this.barChart = {
            data: {
                labels: ['Amazone', 'Credit Card Bill','Shopping','Gambling'],
                datasets: [
                    {
                        label: 'PREDICTED GAMBLING DATA',
                        backgroundColor: 'skyblue',
                        borderColor: 'rgba(255,99,132,1)',
                        borderWidth: 1,
                        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                        hoverBorderColor: 'rgba(255,99,132,1)',
                        data: [24, 30, 40,45, 20]
                    }
                ]
            }
        }

        this.spendingEarning = {
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label: 'SPENDING TO EARNINGS RATIO',
                        fill: true,
                        lineTension: 0.1,
                        backgroundColor: 'skyblue',
                        borderColor: 'rgba(75,192,192,1)',
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: 'rgba(75,192,192,1)',
                        pointBackgroundColor: '#fff',
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [65, 59, 80, 81, 56, 55, 40]
                    }
                ]
            }
        }
        ;


    };

    componentWillMount() {
        let objarry = [];
        // if (JSON.parse(localStorage.getItem("searchResult")) !== "no results found") {
        //     Object.entries(this.state.myObjStr).map(([index, value]) => {

        //         var obj = JSON.parse(value);
        //         objarry.push(obj);
        //         console.log(obj.cif);
        //     });
        //     this.setState({
        //         obj: objarry
        //     });
        // } else {
        //     this.setState({
        //         obj: []
        //     });
        // }
    }



    render() {
        return (
            //     <div class="container-fluid sp" style={{ marginTop: '-0%', marginBottom: '2%', marginLeft: '2%', width: '96%' }}>
            //     <div class="container-fluid sp">
            //       <div class="row " >
            //     <BootstrapTable data={this.state.obj}>
            //     <TableHeaderColumn isKey dataField='cif'>CIF</TableHeaderColumn>
            //     <TableHeaderColumn dataField='name'>Name</TableHeaderColumn>
            //     <TableHeaderColumn dataField='region'>Region</TableHeaderColumn>
            //     <TableHeaderColumn dataField='pod'>POD</TableHeaderColumn>
            //     <TableHeaderColumn dataField='cc_bill'>Credit Card Bill</TableHeaderColumn>
            //     <TableHeaderColumn dataField='gambling'>Gambling</TableHeaderColumn>
            //     <TableHeaderColumn dataField='amazon'>Amazon</TableHeaderColumn>
            //     <TableHeaderColumn dataField='food'>Food</TableHeaderColumn>
            //     <TableHeaderColumn dataField='movie'>Movie</TableHeaderColumn>
            //     <TableHeaderColumn dataField='shopping'>Shopping</TableHeaderColumn>
            // </BootstrapTable>
            // </div>
            // </div>
            // </div>

            <div class="container">
                <h5> Customer Details</h5>
                
                <fieldset class="border p-4">
                    <legend class="w-auto">Bank Details</legend>
                    <div class="row">
                        <div class="col-md-3"><strong>Name:</strong> Bipil Raut</div>
                        <div class="col-md-5"><strong>Account Number:</strong> 52726273890</div>
                        <div class="col-md-4"><strong>CIF: </strong> 34</div>
                    </div>
                    <div class="row">
                        <div class="col-md-3"><strong>Name:</strong> Bipil Raut</div>
                        <div class="col-md-5"><strong>Account Number:</strong> 52726273890</div>
                        <div class="col-md-4"><strong>CIF: </strong> 34</div>
                    </div>
                </fieldset>
                <br></br>
                <fieldset class="border p-4">
                    <legend class="w-auto">Personal Details</legend>
                    <div class="row">
                        <div class="col-md-3"><strong>Name:</strong> Bipil Raut</div>
                        <div class="col-md-5"><strong>Account Number:</strong> 52726273890</div>
                        <div class="col-md-4"><strong>CIF: </strong> 34</div>
                    </div>
                    <div class="row">
                        <div class="col-md-3"><strong>Name:</strong> Bipil Raut</div>
                        <div class="col-md-5"><strong>Account Number:</strong> 52726273890</div>
                        <div class="col-md-4"><strong>CIF: </strong> 34</div>
                    </div>
                </fieldset>
                <div class="row">
                    <div class="col-md-8">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="row" >
                                    <Line data={this.boundryArea.boundryAreadata} />
                                </div>
                            </div>
                            <div class="col-md-6">
                            <Bar
                                    data={this.barChart.data}
                                    width={10}
                                    height={150}
                                    options={{
                                        maintainAspectRatio: false
                                    }}
                                />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                            <div class="row" >
                                    <Line data={this.boundryArea.boundryAreadata} />
                                </div>  
                            </div>
                            <div class="col-md-6">
                            <div class="row" >
                                
                                    <Line data={this.spendingEarning.data} />
                                </div>  
                            </div>
                            <br></br>

                        </div>
                    </div>
                    <div class="col-md-4">
                    <h5 style={{
    backgroundColor: 'black',
    color: 'white',
    textAlign: 'center'
}}>BALANCE SHEET</h5>
<table class="table table-striped table-hover">
  <thead>
  
  </thead>
  <tbody>
    <tr>
      
      <td>Total Assets</td>
      <td>2,825.371</td>
     
    </tr>
    <tr>
    
      <td>Currebt Assets</td>
      <td>234.34</td>
    
    </tr>
    <tr>
      
      <td>Cash</td>
      <td>193700.87</td>
      
     
    </tr>
    <tr>
      
      <td>Total Assets</td>
      <td>2,825.371</td>
     
    </tr>
    <tr>
    
      <td>Currebt Assets</td>
      <td>234.34</td>
    
    </tr>
    <tr>
      
      <td>Cash</td>
      <td>193700.87</td>
      </tr>
      <tr>
      
      <td>Total Assets</td>
      <td>2,825.371</td>
     
    </tr>
    <tr>
    
      <td>Currebt Assets</td>
      <td>234.34</td>
    
    </tr>
    <tr>
      
      <td>Cash</td>
      <td>193700.87</td>
      </tr>
  </tbody>
</table>
                    </div>
                </div>

            </div>
        );

    }
}




export default searchResult;

