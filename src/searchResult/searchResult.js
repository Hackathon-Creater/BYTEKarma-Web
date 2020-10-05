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
            obj: [Object],
            spendingDetails:JSON.parse(localStorage.getItem("spendingDetails")),
            rowsCustomerVitals : [],
            rowsCustomerSpend : []
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
                labels: ['1', '2','3','4'],
                datasets: [
                    {
                        label: "Actual Gambling Value",
                        backgroundColor: "rgba(255,99,132,0.2)",
                        borderColor: "rgba(255,99,132,1)",
                        borderWidth: 1,
                        //stack: 1,
                        hoverBackgroundColor: "rgba(255,99,132,0.4)",
                        hoverBorderColor: "rgba(255,99,132,1)",
                        data: [65, 59, 80, 81, 56, 55, 40]
                      },
            
                      {
                        label: "Predicted Gambling Value",
                        backgroundColor: "rgba(155,231,91,0.2)",
                        borderColor: "rgba(255,99,132,1)",
                        borderWidth: 1,
                        //stack: 1,
                        hoverBackgroundColor: "rgba(255,99,132,0.4)",
                        hoverBorderColor: "rgba(255,99,132,1)",
                        data: [45, 79, 50, 41, 16, 85, 20]
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

        // localStorage.setItem('bankDetails', JSON.stringify(data.bankDetails));
        // localStorage.setItem('carePackageDetails', JSON.stringify(data.carePackageDetails));
        // localStorage.setItem('negativeSpendingTrend', JSON.stringify(data.negativeSpendingTrend));
        // localStorage.setItem('podTrend', JSON.stringify(data.podTrend));
        // localStorage.setItem('predictedGamblingData', JSON.stringify(data.predictedGamblingData));
        // localStorage.setItem('spendingDetails', JSON.stringify(data.spendingDetails));
        // localStorage.setItem('carePackageDetails', JSON.stringify(data.carePackageDetails));
        // localStorage.setItem('spendingToEarningRatio', JSON.stringify(data.spendingToEarningRatio));
        // localStorage.setItem('customerDetails', JSON.stringify(data.customerDetails));

        let cust_deatils=JSON.parse(localStorage.getItem("customerDetails"));
        let bank_details=JSON.parse(localStorage.getItem("bankDetails"));

        
        localStorage.setItem("name",cust_deatils.name);
        localStorage.setItem("city",cust_deatils.city);
        localStorage.setItem("state",cust_deatils.state);
        localStorage.setItem("country",cust_deatils.country);
        localStorage.setItem("region",cust_deatils.region);
        localStorage.setItem("email",cust_deatils.email);
        localStorage.setItem("gender",cust_deatils.gender);


        console.log(bank_details);
        localStorage.setItem("cif",bank_details.cif);
         
        // spendingDetails
       
        axios({
            method: 'post',
            url: "http://18.221.237.209:5000/getPredictionDetails",
            headers: { 'Content-Type': 'application/json' },
            data: {
              "cif":localStorage.getItem("cif")
            }
          }).then(function (response) {
              console.log("************");
              console.log(response);
           
            // localStorage.setItem("reg_label_1",response.data[0].SUMMARY_OF_TRANSACTION);
            // localStorage.setItem("reg_label_2",response.data[1].SUMMARY_OF_TRANSACTION);
            // localStorage.setItem("reg_label_3",response.data[2].SUMMARY_OF_TRANSACTION);

            // localStorage.setItem("reg_label_1_data",response.data[0].AMOUNT_SPENT);
            // localStorage.setItem("reg_label_2_data",response.data[1].AMOUNT_SPENT);
            // localStorage.setItem("reg_label_3_data",response.data[2].AMOUNT_SPENT);


            console.log(response.data[0].SUMMARY_OF_TRANSACTION);
            console.log(response.data[0].AMOUNT_SPENT);
           
            
            
          })
        .catch((error) => {
            console.log(error);
        });

        

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

            <div class="container-fluid sp" style={{ marginTop: '2%', marginBottom: '2%', marginLeft: '3%', width: '96%', height: 'auto' }}>
            <div style={{ marginTop: '3%', marginLeft: '1%' }}>
               
                <h5> Customer Details</h5>
                
                <fieldset class="border p-4">
                    <legend class="w-auto">User Details</legend>
                    <div class="row" >
                        <div class="col-md-2"><strong>CIF : </strong> {localStorage.getItem("cif")}</div>
                        <div class="col-md-2"><strong>Name : </strong> {localStorage.getItem("name")}</div>
                        <div class="col-md-2"><strong>Region :</strong> {localStorage.getItem("region")} </div>
                        <div class="col-md-2"><strong>Country : </strong> {localStorage.getItem("country")}</div>
                        <div class="col-md-2"><strong>State : </strong> {localStorage.getItem("state")}</div>
                        <div class="col-md-2"><strong>City : </strong> {localStorage.getItem("city")}</div>
                        
                    </div>
                    <div class="row" style={{ marginTop: '1%'}}>
                        <div class="col-md-2"><strong>Email : </strong> {localStorage.getItem("email")}</div>
                        <div class="col-md-2"><strong>Gender :</strong> {localStorage.getItem("gender")} </div>
                        
                    </div>
                </fieldset>
                <br></br>
 
                <div class="row">
                    <div class="col-md-8">
                        <div class="row">
                            {/* <div class="col-md-6">
                                <div class="row" >
                                    <Line data={this.boundryArea.boundryAreadata} />
                                </div>
                            </div> */}
                                <div class="col-md-12">
                                    <fieldset class="border p-4">
                                        <Bar
                                                data={this.barChart.data}
                                                width={10}
                                                height={200}
                                                options={{
                                                    maintainAspectRatio: false
                                                }}
                                            />

                                    </fieldset>
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
}}>SPENDING DETAILS</h5>
 <Card style={{ width: '40rem', boxShadow: "0px 3px 10px 11px rgba(0,0,0,0.099)", border: "0px solid #fff" }}>
                                
                                <Card.Body>
                                <h7><strong>CUSTOMER VITALS</strong></h7>
<table class="table table-striped table-hover">
  <thead>
  
  </thead>
  <tbody>
    <tr>
      
      <td>Credit Card Limit</td>
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
   
                                </Card.Body>
                           
                        </Card>
                        <Card style={{ width: '40rem', boxShadow: "0px 3px 10px 11px rgba(0,0,0,0.099)", border: "0px solid #fff" }}>
                                
                                <Card.Body>
                                <h7><strong>CUSTOMER VITALS</strong></h7>
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
   
                                </Card.Body>
                           
                        </Card>
 
                    </div>
                </div>

            </div>
            </div>
          
        );

    }
}




export default searchResult;

