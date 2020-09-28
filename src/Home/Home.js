import React, { state3 } from 'react';

import { Bar, Doughnut, Line, Pie, HorizontalBar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import { Card, ProgressBar } from "react-bootstrap";
import axios from 'axios';
import https from 'https';
import fs from 'fs';

class Home extends React.Component {
    constructor(props) {
        super(props)
        /* 1. Initialize Ref */
        this.state = {

            total_cust: 0,

            contacted_cust: 0,

            risky_cust: 25,

            gambling_avg: 0,
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
                    data: [localStorage.getItem("risky_cust"), 100 - localStorage.getItem("risky_cust")],
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
    boundryArea = {
        boundryAreadata: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Visit by Month of Year',
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
    piachart = {
        piachartdata: {
            labels: [
                'Red',
                'Blue',
                'Yellow'
            ],
            datasets: [{
                data: [300, 50, 100],
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56'
                ],
                hoverBackgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56'
                ]
            }]
        }
    }
    horizontalBar = {
        data: {
            labels: ['US', 'UK', 'China'],
            datasets: [
                {
                    label: 'Sepending Customers',
                    backgroundColor: 'skyblue',
                    borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                    hoverBorderColor: 'rgba(255,99,132,1)',
                    data: [65, 59, 80]
                }
            ]
        }
    }

    stokeArea = {
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Visit by Month of Year',
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
                    data: [65, 59, 12, 81, 10, 7, 12]
                }
            ]
        }
    }

    barChart = {
        data: {
            labels: ['New', 'Returning'],
            datasets: [
                {
                    label: 'Users',
                    backgroundColor: 'skyblue',
                    borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                    hoverBorderColor: 'rgba(255,99,132,1)',
                    data: [24, 30, 20]
                }
            ]
        }
    }
    componentWillMount() {
        var statusRes = "";
        // let currentComponent = this;
        axios.get("http://3.18.106.65:5000/home", { headers: { 'Content-Type': 'application/json' } }).then(function (response) {
            console.log(response.status);
            statusRes = response.status;
            const myObjStr = JSON.stringify(response);

            console.log(myObjStr);


            const data = JSON.parse(myObjStr).data;


            localStorage.setItem("total_cust", data[0].total_cust);
            localStorage.setItem("contacted_cust", Math.round(data[0].contacted_cust * 100));
            localStorage.setItem("risky_cust", data[0].risky_cust);
            localStorage.setItem("gambling_avg", Math.round(data[0].gambling_avg, 2));
            localStorage.setItem("amazon_avg", Math.round(data[0].amazon_avg, 2));
            localStorage.setItem("shopping_avg", Math.round(data[0].shopping_avg, 2));
            localStorage.setItem("food_avg", Math.round(data[0].food_avg, 2));
            localStorage.setItem("movie_avg", Math.round(data[0].movie_avg, 2));
            localStorage.setItem("ccbill_avg", Math.round(data[0].ccbill_avg, 2));
        });
    }
    render() {
        return (
            <div class="container-fluid sp" style={{ marginTop: '-0%', marginBottom: '2%', marginLeft: '2%', width: '96%' }}>
                <div class="container-fluid sp">
                    <div class="row">
                        <div class="col-md-2">
                            <div class="row">
                                <div class="col-md-12" style={{ marginTop: '1%', marginLeft: '0%' }}>

                                    <Card style={{ width: '17rem', boxShadow: "0px 3px 10px 11px rgba(0,0,0,0.099)", border: "0px solid #fff" }}>
                                        <div class="homepagebackgroundcolor">
                                            <Card.Body>
                                                <Card.Title>Total Customers</Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted">Onboarded </Card.Subtitle>
                                                <Card.Text style={{ fontSize: "-webkit-xxx-large", textAlign: "center", }}>
                                                    <div className="row">
                                                        <div class="col-md-6">

                                                            {localStorage.getItem("total_cust")}
                                                        </div>
                                                        <div class="col-md-6 totalcustomericon">

                                                        </div>
                                                    </div>
                                                </Card.Text>
                                                <Card.Link href="/search">See More Details</Card.Link>

                                            </Card.Body>
                                        </div>
                                    </Card>


                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12" style={{ marginTop: '1%', }}>
                                    <Card style={{ width: '17rem', boxShadow: "0px 3px 10px 11px rgba(0,0,0,0.099)", border: "0px solid #fff" }}>
                                        <div class="homepagebackgroundcolor">
                                            <Card.Body>
                                                <Card.Title>Negative Spending Customers</Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted">In Ratio </Card.Subtitle>
                                                <Card.Text style={{ fontSize: "-webkit-xxx-large", textAlign: "center", }}>
                                                    <div className="row">
                                                        <div class="col-md-6">
                                                            {localStorage.getItem("risky_cust")}%
                                        </div>
                                                        <div class="col-md-6 negitiveCusticon">
                                                            {/* <div class="negitiveCusticon"></div> */}
                                                        </div>
                                                    </div>
                                                </Card.Text>
                                                <Card.Link href="/search">See More Details</Card.Link>

                                            </Card.Body>
                                        </div>
                                    </Card>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-12" style={{ marginTop: '1%', }}>
                                    <Card style={{ width: '17rem', boxShadow: "0px 3px 10px 11px rgba(0,0,0,0.099)", border: "0px solid #fff" }}>
                                        <div class="homepagebackgroundcolor">
                                            <Card.Body>
                                                <Card.Title>Non Negative Spending Customers</Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted">In Ratio </Card.Subtitle>
                                                <Card.Text style={{ fontSize: "-webkit-xxx-large", textAlign: "center", }}>
                                                    <div className="row">
                                                        <div class="col-md-6">
                                                            {100 - localStorage.getItem("risky_cust")}%
                                        </div>
                                                        <div class="col-md-6 CustomersatDefaulticon">   </div>
                                                    </div>
                                                </Card.Text>
                                                <Card.Link href="/search">See More Details</Card.Link>

                                            </Card.Body>
                                        </div>
                                    </Card>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-12" style={{ marginTop: '1%', }}>
                                    <Card style={{ width: '17rem', height: '13rem', boxShadow: "0px 3px 10px 11px rgba(0,0,0,0.099)", border: "0px solid #fff" }}>
                                        <div class="homepagebackgroundcolor">
                                            <Card.Body>
                                                <Card.Title>Customers Advised</Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted">In Ratio </Card.Subtitle>
                                                <Card.Text style={{ fontSize: "-webkit-xxx-large", textAlign: "center" }}>
                                                    <div className="row">
                                                        <div class="col-md-6">
                                                            {Math.round(localStorage.getItem("contacted_cust"))}
                                                            <ProgressBar variant="success" now={Math.round(localStorage.getItem("contacted_cust"))} /> </div>
                                                        <div class="col-md-6 advisedcusticon">   </div>
                                                    </div>

                                                </Card.Text>

                                                <Card.Link href="/search">See More Details</Card.Link>

                                            </Card.Body>
                                        </div>
                                    </Card>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4" style={{ marginLeft: '7%', }}>
                            <div class="row" >
                                <Line data={this.boundryArea.boundryAreadata} />
                            </div>
                            <div class="row" >
                                <h6>Spending categories of Customers
</h6>
                                <Pie data={this.piachart.piachartdata} />
                            </div>
                            <div class="row" >
                                <h6>Top 3 Spending categories of Customers by Globally
</h6>
                                <HorizontalBar data={this.horizontalBar.data} />
                            </div>
                        </div>

                        <div class="col-md-4" style={{ marginLeft: '7%', }}>
                            <div class="row">
                                <h6>Customer counseled by Month of Year

</h6>
                                <Line data={this.stokeArea.data} />
                            </div>
                            <div class="row">
                                <h6>Defaulted vs. non Defaulted users


</h6>

                                <Bar
                                    data={this.barChart.data}
                                    width={10}
                                    height={150}
                                    options={{
                                        maintainAspectRatio: false
                                    }}
                                />
                            </div>
                            <div class="row" >
                                <h6>Top 3 Spending categories of Country
</h6>
                                <HorizontalBar data={this.horizontalBar.data} />
                            </div>
                        </div>
                    </div>
                    {/* <div class="row" style={{ marginLeft: '5%' }} >

                        <div class="col-md-4 col-sm-4 col-xs-12" style={{ marginTop: '1%', marginLeft: '0%' }}>
                            <Card style={{ width: '17rem', boxShadow: "0px 3px 10px 11px rgba(0,0,0,0.099)", border: "0px solid #fff" }}>
                                <Card.Body>
                                    <Card.Title>Total Customers</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Onboarded </Card.Subtitle>
                                    <Card.Text style={{ fontSize: "-webkit-xxx-large", textAlign: "center", }}>
                                        {localStorage.getItem("total_cust")}
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
                                <h6 className="mt-5">Average Spending Patern</h6>
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
                                <h6 className="mt-5">PD of Customer </h6>
                                <Doughnut data={this.state1.dataDoughnut} options={{ responsive: true }} />
                            </MDBContainer>
                        </div>
                    </div> */}

                </div>
            </div>
        );
    }
}

export default Home;