import React, { state3 } from 'react';
import styled from 'styled-components';
import { Bar, HorizontalBar,Doughnut } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import { Card, ProgressBar } from "react-bootstrap";
import axios from 'axios';



class Home extends React.Component {
    constructor(props) {
        super(props)
        /* 1. Initialize Ref */
        this.state = {
      
            total_cust:0 ,
        
            contacted_cust: 0,
        
            risky_cust: 25,
           
            gambling_avg:0,
            amazon_avg: 0,
            shopping_avg: 0,
            food_avg: 0,
            movie_avg: 0,
            ccbill_avg: 0
          
    
        };
    
        // this.cif = React.createRef(); 
      }
    
        // this.cif = React.createRef(); 
      
    state3 = {
        dataBar: [],
        barChartOptions: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [
                    {
                        barPercentage: 1,
                        gridLines: {
                            display: true,
                            color: "rgba(0, 0, 0, 0.1)"
                        }
                    }
                ],
                yAxes: [
                    {
                        gridLines: {
                            display: true,
                            color: "rgba(0, 0, 0, 0.1)"
                        },
                        ticks: {
                            beginAtZero: true
                        }
                    }
                ]
            }
        }
    }

    state1 = {
        dataDoughnut: {
            labels: ["Risky Customers", "Non-Risky Customers"],
            datasets: [
                {
                    data: [ localStorage.getItem("risky_cust"), 100-localStorage.getItem("risky_cust")],
                    backgroundColor: ["#F7464A", "#008000"],
                    hoverBackgroundColor: [
                        "#FF5A5E",
                        "#5AD3D1",
                        "#FFC870",
                        "#A8B3C5",
                        "#616774"
                    ]
                }
            ]
        }
    }

    componentWillMount() {
        var statusRes="";
        let currentComponent = this;
        axios.get("http://18.188.184.252:5000/home").then(function (response) {
          console.log(response.status); 
          statusRes=response.status;
          const myObjStr = JSON.stringify(response);
    
          console.log(myObjStr);
        
          
          const data= JSON.parse(myObjStr).data;
        
    
         localStorage.setItem("total_cust",data[0].total_cust);
         localStorage.setItem("contacted_cust",data[0].contacted_cust*100);
         localStorage.setItem("risky_cust",data[0].risky_cust);
         localStorage.setItem("gambling_avg",data[0].gambling_avg*100);
         localStorage.setItem("amazon_avg",data[0].amazon_avg*100);
         localStorage.setItem("shopping_avg",data[0].shopping_avg*100);
         localStorage.setItem("food_avg",data[0].food_avg*100);
         localStorage.setItem("movie_avg",data[0].movie_avg*100);
         localStorage.setItem("ccbill_avg",data[0].ccbill_avg*100);
        });  
      }
    render() {
        return (
            <div class="container-fluid sp" style={{ marginTop: '-0%', marginBottom: '2%', marginLeft: '2%', width: '96%' }}>
                <div class="container-fluid sp">
                    <div class="row" >
                        <h4 style={{ marginTop: '1%', marginLeft: '1%', color: "grey" }}>Reports</h4>
                    </div>
                    <div class="row" style={{ marginLeft: '5%' }} >

                        <div class="col-md-4 col-sm-4 col-xs-12" style={{ marginTop: '1%', marginLeft: '0%' }}>
                            <Card style={{ width: '17rem', boxShadow: "0px 3px 10px 11px rgba(0,0,0,0.099)", border: "0px solid #fff" }}>
                                <Card.Body>
                                    <Card.Title>Total Customers</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Onborded </Card.Subtitle>
                                    <Card.Text style={{ fontSize: "-webkit-xxx-large", textAlign: "center", }}>
                                        {localStorage.getItem("total_cust")}
                                    </Card.Text>
                                    <Card.Link href="/search">See More Details</Card.Link>

                                </Card.Body>
                            </Card>
                        </div>
                        <div class="col-md-4 col-sm-4 col-xs-12" style={{ marginTop: '1%', }}>
                            <Card style={{ width: '17rem', boxShadow: "0px 3px 10px 11px rgba(0,0,0,0.099)", border: "0px solid #fff" }}>
                                <Card.Body>
                                    <Card.Title>Customers at Default</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">In Ratio </Card.Subtitle>
                                    <Card.Text style={{ fontSize: "-webkit-xxx-large", textAlign: "center", }}>
                                       
                                        {localStorage.getItem("risky_cust")}%
                                    </Card.Text>
                                    <Card.Link href="/search">See More Details</Card.Link>

                                </Card.Body>
                            </Card>
                        </div>
                        <div class="col-md-4 col-sm-4 col-xs-12" style={{ marginTop: '1%', }}>
                            <Card style={{ width: '17rem', height: '13rem', boxShadow: "0px 3px 10px 11px rgba(0,0,0,0.099)", border: "0px solid #fff" }}>
                                <Card.Body>
                                    <Card.Title>Customers Advised</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">In Ratio </Card.Subtitle>
                                    <Card.Text style={{ fontSize: "-webkit-xxx-large", textAlign: "center", }}>
                                     {Math.round(localStorage.getItem("contacted_cust"))}
                                        <ProgressBar variant="success" now={Math.round(localStorage.getItem("contacted_cust"))} />
                                    </Card.Text>

                                    <Card.Link href="/search">See More Details</Card.Link>

                                </Card.Body>
                            </Card>
                        </div>

                    </div>

                    <div class="row">
                        <div style={{ marginLeft: '5%', width: '45%', maxHeight: '100%', marginTop: '3%' }}>
                            <MDBContainer>
                                <h5 className="mt-5">Average Spending Patern</h5>
                                <Bar data={
                                    {
                                        labels: ["Food", "Gambling", "Shoping", "Credit Card Bill", "Movie", "Amazon"],
                                        datasets: [
                                            {
                                                label: "% of Spending",
                                                data: [localStorage.getItem("food_avg"), localStorage.getItem("gambling_avg"), localStorage.getItem("shopping_avg"), localStorage.getItem("ccbill_avg")
                                                , localStorage.getItem("movie_avg"),localStorage.getItem("movie_avg")],
                                                backgroundColor: [
                                                    "rgba(255, 134,159,0.4)",
                                                    "rgba(98,  182, 239,0.4)",
                                                    "rgba(255, 218, 128,0.4)",
                                                    "rgba(113, 205, 205,0.4)",
                                                    "rgba(170, 128, 252,0.4)",
                                                    "rgba(255, 177, 101,0.4)"
                                                ],
                                                borderWidth: 2,
                                                borderColor: [
                                                    "rgba(255, 134, 159, 1)",
                                                    "rgba(98,  182, 239, 1)",
                                                    "rgba(255, 218, 128, 1)",
                                                    "rgba(113, 205, 205, 1)",
                                                    "rgba(170, 128, 252, 1)",
                                                    "rgba(255, 177, 101, 1)"
                                                ]
                                            }
                                        ]
                                    }
                                } options={this.state3.barChartOptions} />
                            </MDBContainer>
                        </div>
                        <div style={{ marginLeft: '5%', width: '30%', maxHeight: '80%', marginTop: '3%' }}>
                            <MDBContainer>
                                <h5 className="mt-5">PD of Customer </h5>
                                <Doughnut data={this.state1.dataDoughnut} options={{ responsive: true }} />
                            </MDBContainer>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Home;