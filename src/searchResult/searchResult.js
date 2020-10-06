import React, { Component, json,useState } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import styled from 'styled-components';
import { Form, Button, FormGroup, FormControl, ControlLabel, Accordion, Card, Col,Modal } from "react-bootstrap";
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
            rowsCustomerSpend : [],
            isOpen:false,
            sendMail:false
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

        
        localStorage.setItem("Custname",cust_deatils.name);
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
              console.log(response.data[0]);
             
           
            localStorage.setItem("act1",response.data[0].actualGamblingValue);
            localStorage.setItem("pre1",response.data[0].predictedGamblingValue);

            localStorage.setItem("act2",response.data[1].actualGamblingValue);
            localStorage.setItem("pre2",response.data[1].predictedGamblingValue);

            localStorage.setItem("act3",response.data[2].actualGamblingValue);
            localStorage.setItem("pre3",response.data[2].predictedGamblingValue);

            localStorage.setItem("act4",response.data[3].actualGamblingValue);
            localStorage.setItem("pre4",response.data[3].predictedGamblingValue);

            localStorage.setItem("act5",response.data[4].actualGamblingValue);
            localStorage.setItem("pre5",response.data[4].predictedGamblingValue);

            localStorage.setItem("act6",response.data[5].actualGamblingValue);
            localStorage.setItem("pre6",response.data[5].predictedGamblingValue);

            localStorage.setItem("act7",response.data[6].actualGamblingValue);
            localStorage.setItem("pre7",response.data[6].predictedGamblingValue);

            localStorage.setItem("act8",response.data[7].actualGamblingValue);
            localStorage.setItem("pre8",response.data[7].predictedGamblingValue);

            // window.location.reload(false);

            
          })
        .catch((error) => {
            console.log(error);
        });

        this.linechart = {
        
            data: {
                labels: ['1', '2','3','4','5','6','7','8'],
                datasets: [
                    {
                        label: "Actual Gambling Value",
                        data: [localStorage.getItem("act1"), localStorage.getItem("act2"), localStorage.getItem("act3"), localStorage.getItem("act4"), localStorage.getItem("act5"), localStorage.getItem("act6"),localStorage.getItem("act7"),localStorage.getItem("act8")],
                        fill: true,
                        backgroundColor: "rgba(75,192,192,0.2)",
                        borderColor: "rgba(75,192,192,1)"
                      },
            
                      {
                        label: "Predicted Gambling Value",
                        data: [localStorage.getItem("pre1"), localStorage.getItem("pre2"), localStorage.getItem("pre3"), localStorage.getItem("pre4"), localStorage.getItem("pre5"), localStorage.getItem("pre6"),localStorage.getItem("pre7"),localStorage.getItem("pre8")],
                        fill: false,
                        borderColor: "#742774"
                      }
                ]
            }
        }
}



    render() {
        console.log("------------Details-----------");
        let spendingDetails=JSON.parse(localStorage.getItem("spendingDetails"));
      
        let carePackageDetailsData=JSON.parse(localStorage.getItem("carePackageDetails"));;
        const handleClose = () => this.setState({
            isOpen:false,
            sendMail:false
        });
        const handleShow = () => this.setState({
            isOpen:true
        });
        
        const sendMailToCust =()=>{
              this.setState({
                sendMail:false
              });
            axios({
                method: 'post',
                url: "http://18.221.237.209:5000/emailalert",
                headers: { 'Content-Type': 'application/json' },
                data: {
                  "cif":localStorage.getItem("cif")
                }
              }).then(response =>  {
                this.setState({
                    sendMail:true
                  });
               
              })
            .catch((error) => {
                console.log(error);
            });
    
        }
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
          
          
         
          <Modal show={this.state.sendMail} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Mail Notification</Modal.Title>
          <br></br>
         
        </Modal.Header>
        <Modal.Body>
       
        <strong>Mail sent successfully...</strong>
        
        
            
            </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>



    
      <Modal show={this.state.isOpen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Recommended Package</Modal.Title>
          <br></br>
         
        </Modal.Header>
        <Modal.Body>
        <strong>Care Package Name: {carePackageDetailsData.name}</strong>
        <br></br>
        <br></br>
            {carePackageDetailsData.description}
            
            </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
            <div style={{ marginTop: '3%', marginLeft: '1%' }}>
            <div class="row" >
                        <div class="col-md-2">
                        <h5> Customer Details</h5>
                            </div>
                            <div class="col-md-6"></div>
                            <div class="col-md-2">  
                            {/* <Button  variant="outline-danger" size="lg" style={{
   marginTop:'7%',
    width: '50%',
   float: 'right',
   marginRight: '-54%'
}} active onClick={this.openPackageModel}> 
                        Package
                </Button> */}
                  <Button variant="danger" class="btnPackage" style={{width:'70%'}}  onClick={handleShow}>
                <strong>Recommended Package</strong>  
      </Button>
                </div>

                <div class="col-md-2">
                <Button variant="danger" class="btnPackage"style={{width:'70%'}} onClick={sendMailToCust}>
                <strong>Send Mail to Customer</strong>
      </Button>
                
                </div>
                            </div>
                
               
                <fieldset class="border p-4">
                    <legend class="w-auto">User Details</legend>
                    <div class="row" >
                        <div class="col-md-2"><strong>CIF : </strong> {localStorage.getItem("cif")}</div>
                        <div class="col-md-2"><strong>Name : </strong> {localStorage.getItem("Custname")}</div>
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
                            <h5>Predictive Gambling</h5>
                            <br></br>
                                <div class="col-md-12">
                                    <fieldset class="border p-4">
                                    <Line
                                                data={this.linechart.data}
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
                    <div class="col-md-4" style={{marginBottom:'1%'}}>
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
      
      <td>Total Customer Value</td>
      <td>{spendingDetails.customerVitals.totalCustomerValue}</td>
     
    </tr>
    <tr>
      
      <td>Total Customer Debt</td>
      <td>{spendingDetails.customerVitals.totalCustomerDebt}</td>
      
     
    </tr>
   
    <tr>
    
      <td>Current Loan Value</td>
      <td>{spendingDetails.customerVitals.currentLoanValue}</td>
    
    </tr>
    <tr>
      
      <td>Credit Card Limit</td>
<td>{spendingDetails.customerVitals.creditCardLimit}</td>
     
    </tr> 
   
    
  </tbody>
</table>
   
                                </Card.Body>
         <br></br>                  
                        </Card>
                        <Card style={{ width: '40rem', boxShadow: "0px 3px 10px 11px rgba(0,0,0,0.099)", border: "0px solid #fff" }}>
                                
                                <Card.Body>
                                <h7><strong>CUSTOMER SPENDS</strong></h7>
<table class="table table-striped table-hover">
  <thead>
  
  </thead>
  <tbody>
    <tr>
      
      <td>Credit Card Bill</td>
      <td>{spendingDetails.customerSpends.ccBills}</td>
     
    </tr>
    <tr>
    
      <td>Gambling Spends</td>
      <td>{spendingDetails.customerSpends.gambling}</td>
    
    </tr>
    <tr>
      
      <td>Amazon Spends</td>
      <td>{spendingDetails.customerSpends.amazon}</td>
      
     
    </tr>
    <tr>
      
      <td>Food Spends</td>
      <td>{spendingDetails.customerSpends.food}</td>
     
    </tr>
    <tr>
    
      <td>Movie Spends</td>
      <td>{spendingDetails.customerSpends.movie}</td>
    
    </tr>
    <tr>
      
      <td>Shopping Spends</td>
      <td>{spendingDetails.customerSpends.shopping}</td>
      </tr>
      <tr>
      
      <td>Total Spends Vs Gambling</td>
      <td>{spendingDetails.customerSpends.totalSpendsVsGambling}</td>
     
    </tr>
  </tbody>
</table>
   
 <strong>Total Spends:</strong>   {spendingDetails.customerSpends.total}
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

