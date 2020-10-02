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
    barChartDaily = {
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
              {
                label: 'Daily Status',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                stack: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: [65, 59, 80, 81, 56, 55, 40]
              },
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
            <div class="container-fluid sp" style={{ marginTop: '2%', marginBottom: '2%', marginLeft: '2%', width: '96%',height:'auto' }}>
                <div class="row">
                    <div class="col-sm-2">
                        <Card style={{ width: '21rem', boxShadow: "0px 3px 10px 11px rgba(0,0,0,0.099)", border: "0px solid #fff" }}>
                            <div class="bg-jade text-white">
                                <Card.Body>
                                    <Card.Title>Total Customers</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted text-white">Onboarded </Card.Subtitle>
                                    <Card.Text style={{ fontSize: "-webkit-xxx-large", textAlign: "center", }}>
                                        <div className="row">
                                            <div class="col-md-6">

                                                <span id="cases" class="text-5xl text-center font-light rounded">{localStorage.getItem("total_cust")} </span>
                                            </div>
                                            <div class="col-md-6 totalcustomericon">

                                            </div>
                                        </div>
                                    </Card.Text>
                                    <Card.Link href="/search" class="text-white">See More Details</Card.Link>

                                </Card.Body>
                            </div>
                        </Card>
                    </div>
                    <div class="col-sm-2">
                        <Card style={{ width: '21rem', boxShadow: "0px 3px 10px 11px rgba(0,0,0,0.099)", border: "0px solid #fff" }}>
                            <div class="bg-rag-green text-white">
                                <Card.Body>
                                    <Card.Title>Negative Spending Customers</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted text-white"> <strong class="text-white">In Ratio</strong> </Card.Subtitle>
                                    <Card.Text style={{ fontSize: "-webkit-xxx-large", textAlign: "center", }}>
                                        <div className="row">
                                            <div class="col-md-6">

                                                <span id="cases" class="text-5xl text-center font-light rounded">{localStorage.getItem("risky_cust")}% </span>
                                            </div>
                                            <div class="col-md-6 negitiveCusticon">

                                            </div>
                                        </div>
                                    </Card.Text>
                                    <Card.Link href="/search" class="text-white">See More Details</Card.Link>

                                </Card.Body>
                            </div>
                        </Card>
                    </div>
                    <div class="col-sm-2">
                        <Card style={{ width: '21rem', boxShadow: "0px 3px 10px 11px rgba(0,0,0,0.099)", border: "0px solid #fff" }}>
                            <div class="bg-rag-green text-white">
                                <Card.Body>
                                    <Card.Title>Non-Negative Spending Cust...</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted text-white"> <strong class="text-white">In Ratio</strong> </Card.Subtitle>
                                    <Card.Text style={{ fontSize: "-webkit-xxx-large", textAlign: "center", }}>
                                        <div className="row">
                                            <div class="col-md-7">

                                                <span id="cases" class="text-5xl text-center font-light rounded">
                                                    {100 - localStorage.getItem("risky_cust")}%
                                                               </span>
                                            </div>
                                            <div class="col-md-5 CustomersatDefaulticon">

                                            </div>
                                        </div>
                                    </Card.Text>
                                    <Card.Link href="/search" class="text-white">See More Details</Card.Link>

                                </Card.Body>
                            </div>
                        </Card>
                    </div>
                    <div class="col-sm-2">
                        <Card style={{ width: '21rem', boxShadow: "0px 3px 10px 11px rgba(0,0,0,0.099)", border: "0px solid #fff" }}>
                            <div class="bg-rag-green text-white">
                                <Card.Body>
                                    <Card.Title>Customers Advised</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted text-white"> <strong class="text-white">In Ratio</strong> </Card.Subtitle>
                                    <Card.Text style={{ fontSize: "-webkit-xxx-large", textAlign: "center", }}>
                                        <div className="row">
                                            <div class="col-md-6">

                                                <span id="cases" class="text-5xl text-center font-light rounded">
                                                    {Math.round(localStorage.getItem("contacted_cust"))}
                                                </span>
                                            </div>
                                            <div class="col-md-6 advisedcusticon">

                                            </div>
                                        </div>
                                    </Card.Text>
                                    <Card.Link href="/search" class="text-white">See More Details</Card.Link>

                                </Card.Body>
                            </div>
                        </Card>
                    </div>
                    <div class="col-sm-2">
                        <Card style={{ width: '21rem', boxShadow: "0px 3px 10px 11px rgba(0,0,0,0.099)", border: "0px solid #fff" }}>
                            <div class="bg-rag-green text-white">
                                <Card.Body>
                                    <Card.Title>new card</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted text-white"> <strong class="text-white">In Ratio</strong> </Card.Subtitle>
                                    <Card.Text style={{ fontSize: "-webkit-xxx-large", textAlign: "center", }}>
                                        <div className="row">
                                            <div class="col-md-7">

                                                <span id="cases" class="text-5xl text-center font-light rounded">
                                                    {100 - localStorage.getItem("risky_cust")}%
                                                               </span>
                                            </div>
                                            <div class="col-md-5 CustomersatDefaulticon">

                                            </div>
                                        </div>
                                    </Card.Text>
                                    <Card.Link href="/search" class="text-white">See More Details</Card.Link>

                                </Card.Body>
                            </div>
                        </Card>
                    </div>
                    <div class="col-sm-2">
                        <Card style={{ width: '21rem', boxShadow: "0px 3px 10px 11px rgba(0,0,0,0.099)", border: "0px solid #fff" }}>
                            <div class="bg-rag-green text-white">
                                <Card.Body>
                                    <Card.Title>New Card</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted text-white"> <strong class="text-white">In Ratio</strong> </Card.Subtitle>
                                    <Card.Text style={{ fontSize: "-webkit-xxx-large", textAlign: "center", }}>
                                        <div className="row">
                                            <div class="col-md-7">

                                                <span id="cases" class="text-5xl text-center font-light rounded">
                                                    {100 - localStorage.getItem("risky_cust")}%
                                                               </span>
                                            </div>
                                            <div class="col-md-5 CustomersatDefaulticon">

                                            </div>
                                        </div>
                                    </Card.Text>
                                    <Card.Link href="/search" class="text-white">See More Details</Card.Link>

                                </Card.Body>
                            </div>
                        </Card>
                    </div>
                </div>
                <br></br>
                <div class="row">
                    <div class="col-sm-4">
                        <h4>
                        Customer Visited by Month of Year
                        </h4>
                        <Line data={this.boundryArea.boundryAreadata} />
                    </div>
                    <div class="col-sm-4">
                        <h4>Customer counseled by Month of Year

</h4>
                        <Line data={this.stokeArea.data} />
                    </div>
                    <div class="col-sm-4">
                    <h4>Spending categories of Customers
</h4>
                                <Pie data={this.piachart.piachartdata} />
                    </div>
                </div>
                <br></br>
                <div class="row">
                    <div class="col-sm-4">
                    <h4>Defaulted vs. non Defaulted users


</h4>

                                <Bar height={null}
        height={248}
        width={300}
    options={{
        aspectRatio: 1,  // this would be a 1:1 aspect ratio
    }}
                                    data={this.barChart.data}
                                    
                                />
                    </div>
                    <div class="col-sm-8">
                    <h4>Daily Status


</h4>

                                <Bar
                                height={120}
                                width={300}
                            options={{
                                aspectRatio: 1,  // this would be a 1:1 aspect ratio
                            }}
                                    data={this.barChartDaily.data}
                                    
                                />
                    </div>
                    </div>
                <br></br>
                <div class="row">
                    <div class="col-sm-4">
                    <h4>Top 3 Spending categories of Customers by Globally
</h4>
                                <HorizontalBar data={this.horizontalBar.data} />
                            </div>
                   
                    <div class="col-sm-4">
                    <h4>Top 3 Spending categories of Customers by Country
</h4>
                                <HorizontalBar data={this.horizontalBar.data} />
                    </div>
                    <div class="col-sm-4">
                    <h4>Top 3 Spending categories of Customers by Region
</h4>
                                <HorizontalBar data={this.horizontalBar.data} />
                    </div>
                </div>
                <br></br>
                <br></br>
           
           </div>
        );
    }
}

export default Home;