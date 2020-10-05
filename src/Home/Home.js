import React, { state3, useState } from 'react';

import { Bar, Doughnut, Line, Pie, HorizontalBar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import { Card, ProgressBar, DropdownButton,Dropdown} from "react-bootstrap";
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
            ccbill_avg: 0,
            transPerDayLabelArray: [],
            transPerDayDataArray: [],
            lab : ""


        };

   this.handleHomeCountryChange=this.handleHomeCountryChange.bind(this);


        // this.cif = React.createRef(); 
    }

    handleHomeCountryChange(e) {
        console.log(e.target.textContent);
        axios({
            method: 'post',
            url: "http://18.221.237.209:5000/getCountryCategory",
            headers: { 'Content-Type': 'application/json' },
            data: {
              "country":String (e.target.textContent)
            }
          }).then(function (response) {
            
            
            const countryData =JSON.stringify(response);
           
            localStorage.setItem("ctry_label_1",response.data[0].SUMMARY_OF_TRANSACTION);
            localStorage.setItem("ctry_label_2",response.data[1].SUMMARY_OF_TRANSACTION);
            localStorage.setItem("ctry_label_3",response.data[2].SUMMARY_OF_TRANSACTION);

            localStorage.setItem("ctry_label_1_data",response.data[0].AMOUNT_SPENT);
            localStorage.setItem("ctry_label_2_data",response.data[1].AMOUNT_SPENT);
            localStorage.setItem("ctry_label_3_data",response.data[2].AMOUNT_SPENT);


            console.log(response.data[0].SUMMARY_OF_TRANSACTION);
            console.log(response.data[0].AMOUNT_SPENT);
           
            window.location.reload(false);
            
          })
        .catch((error) => {
            console.log(error);
        });
      
      }
    

      handleHomeRegionChange(e) {
        console.log(e.target.textContent);
        axios({
            method: 'post',
            url: "http://18.221.237.209:5000/getRegionCategory",
            headers: { 'Content-Type': 'application/json' },
            data: {
              "region":String (e.target.textContent)
            }
          }).then(function (response) {
      
           
            localStorage.setItem("reg_label_1",response.data[0].SUMMARY_OF_TRANSACTION);
            localStorage.setItem("reg_label_2",response.data[1].SUMMARY_OF_TRANSACTION);
            localStorage.setItem("reg_label_3",response.data[2].SUMMARY_OF_TRANSACTION);

            localStorage.setItem("reg_label_1_data",response.data[0].AMOUNT_SPENT);
            localStorage.setItem("reg_label_2_data",response.data[1].AMOUNT_SPENT);
            localStorage.setItem("reg_label_3_data",response.data[2].AMOUNT_SPENT);


            console.log(response.data[0].SUMMARY_OF_TRANSACTION);
            console.log(response.data[0].AMOUNT_SPENT);
           
            window.location.reload(false);
            
          })
        .catch((error) => {
            console.log(error);
        });
      
      }


    componentWillMount() {
     
        var transPerDayLabel = [];
        var transPerDayData = [];
        var statusRes = "";
        // let currentComponent = this;

        axios.get('http://18.221.237.209:5000/home', { headers: { 'Content-Type': 'application/json' } })
            .then((response) => {
                console.log(response.status);
                statusRes = response.status;
                const myObjStr = JSON.stringify(response);

                // console.log(myObjStr);


                const data = JSON.parse(myObjStr).data;
                console.log(data["cardDetails"][0].ccAvg);

                localStorage.setItem("total_cust", data["cardDetails"][0].totalCust);
                localStorage.setItem("contacted_cust", data["cardDetails"][0].contactedCust);
                localStorage.setItem("risky_cust", data["cardDetails"][0].riskyCust);
                localStorage.setItem("gambling_avg", data["cardDetails"][0].gambAvg);
                localStorage.setItem("loan_Avg", data["cardDetails"][0].loanAvg);
                // localStorage.setItem("amazon_avg",data["cardDetails"][0] );
                localStorage.setItem("custAtObservation", data["cardDetails"][0].custAtObservation);
                localStorage.setItem("custFailToImprove", data["cardDetails"][0].custFailToImprove);
                localStorage.setItem("shopping_avg", data["cardDetails"][0].shopAvg);
                localStorage.setItem("food_avg", data["cardDetails"][0].foodAvg);
                localStorage.setItem("movie_avg", data["cardDetails"][0].movieAvg);
                localStorage.setItem("ccbill_avg", data["cardDetails"][0].ccAvg);


                //pie chart 
                localStorage.setItem("amazonPerc", data["spentCategoryPieChart"][0].amazonPerc);
                localStorage.setItem("ccPerc", data["spentCategoryPieChart"][0].ccPerc);
                localStorage.setItem("foodPerc", data["spentCategoryPieChart"][0].foodPerc);
                localStorage.setItem("gambPerc", data["spentCategoryPieChart"][0].gambPerc);
                localStorage.setItem("loanReturnPerc", data["spentCategoryPieChart"][0].loanReturnPerc);
                localStorage.setItem("moviePerc", data["spentCategoryPieChart"][0].moviePerc);
                localStorage.setItem("shopPerc", data["spentCategoryPieChart"][0].shopPerc);
                // console.log(data["transPerDay"].length);

                //horizontal bar Globally 
                localStorage.setItem("globalGamblingSpend", data["spendCategoryGlobally"][0].amountSpent);
                localStorage.setItem("globalLoanReturn", data["spendCategoryGlobally"][1].amountSpent);
                localStorage.setItem("globalCreditCardDetail", data["spendCategoryGlobally"][2].amountSpent);

                localStorage.setItem("Jan_Data", data["transPerDay"][0].avgAmountSpent);
                localStorage.setItem("Feb_Data", data["transPerDay"][1].avgAmountSpent);
                localStorage.setItem("mar_Data", data["transPerDay"][2].avgAmountSpent);
                localStorage.setItem("apr_Data", data["transPerDay"][3].avgAmountSpent);
                localStorage.setItem("may_Data", data["transPerDay"][4].avgAmountSpent);
                localStorage.setItem("june_Data", data["transPerDay"][5].avgAmountSpent);
                localStorage.setItem("july_Data", data["transPerDay"][6].avgAmountSpent);
                localStorage.setItem("aug_Data", data["transPerDay"][7].avgAmountSpent);
                localStorage.setItem("sep_Data", data["transPerDay"][8].avgAmountSpent);
                localStorage.setItem("oct_Data", data["transPerDay"][9].avgAmountSpent);
                localStorage.setItem("nov_Data", data["transPerDay"][10].avgAmountSpent);
                localStorage.setItem("dec_Data", data["transPerDay"][11].avgAmountSpent);



            })
            .catch((error) => {
                console.log(error);
            });


        // axios.get("http://18.221.237.209:5000/home", { headers: { 'Content-Type': 'application/json' } }).then(function (response) {

        //     console.log(response.status);
        //     statusRes = response.status;
        //     const myObjStr = JSON.stringify(response);

        //    // console.log(myObjStr);


        //     const data = JSON.parse(myObjStr).data;
        //     console.log(data["cardDetails"][0].ccAvg);

        //     localStorage.setItem("total_cust",data["cardDetails"][0] .totalCust);
        //     localStorage.setItem("contacted_cust",data["cardDetails"][0].contactedCust );
        //     localStorage.setItem("risky_cust", data["cardDetails"][0].riskyCust);
        //     localStorage.setItem("gambling_avg",data["cardDetails"][0].gambAvg );
        //     // localStorage.setItem("amazon_avg",data["cardDetails"][0] );
        //      localStorage.setItem("custAtObservation",data["cardDetails"][0].custAtObservation );
        //      localStorage.setItem("custFailToImprove",data["cardDetails"][0].custFailToImprove ); 
        //     localStorage.setItem("shopping_avg", data["cardDetails"][0].shopAvg);
        //     localStorage.setItem("food_avg", data["cardDetails"][0].foodAvg);
        //     localStorage.setItem("movie_avg", data["cardDetails"][0].movieAvg);
        //     localStorage.setItem("ccbill_avg", data["cardDetails"][0].ccAvg);

        //    // console.log(data["transPerDay"].length);

        //     for(let i =0;i<data["transPerDay"].length;i++){
        //         transPerDayLabel.push(data["transPerDay"][i].dateOfSpend);
        //         transPerDayData.push(data["transPerDay"][i].amountSpent);
        //     }



        // });



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
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug','Sep','Oct','Nov','Dec'],
            datasets: [
                {
                    label: 'Month wise data',
                    fill: true,
                    lineTension: 0.1,
                    backgroundColor: 'skyblue',
                    borderColor: 'DarkGrey',
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
                    data: [localStorage.getItem("Jan_Data"),localStorage.getItem("Feb_Data"),localStorage.getItem("mar_Data"),localStorage.getItem("apr_Data"),localStorage.getItem("may_Data"),localStorage.getItem("june_Data"),localStorage.getItem("july_Data"),localStorage.getItem("aug_Data"),localStorage.getItem("sep_Data"),localStorage.getItem("oct_Data"),localStorage.getItem("nov_Data"),localStorage.getItem("dec_Data")]

         
                   
                }
            ]
        }
    }
    piachart = {
        piachartdata: {
            labels: [
                'Amazon',
                'Credit Card',
                'Food',
                'Gambling',
                'Loan Return',
                'Movie',
                'Shoping'
            ],
            datasets: [{
                data: [localStorage.getItem("amazonPerc"), localStorage.getItem("ccPerc"), localStorage.getItem("foodPerc"), localStorage.getItem("gambPerc"), localStorage.getItem("loanReturnPerc"), localStorage.getItem("moviePerc"), localStorage.getItem("shopPerc")],
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#ff4b5c',
                    '#e0ece4',
                    '#056674',
                    '#66bfbf',

                ],
                hoverBackgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#ff4b5c',
                    '#e0ece4',
                    '#056674',
                    '#66bfbf',

                ]
            }]
        }
    }
    horizontalBar1 = {
        data: {
            labels: ['Gambling', 'Loan return', 'Credit Card Bill'],
            datasets: [
                {
                    label: 'Sepending Customers',
                    backgroundColor: 'turquoise',
                    borderColor: 'darkcyan',
                    borderWidth: 1,
                    hoverBackgroundColor: 'darkcyan',
                    hoverBorderColor: 'turquoise',
                    data: [localStorage.getItem("globalGamblingSpend"), localStorage.getItem("globalLoanReturn"), localStorage.getItem("globalCreditCardDetail")]
                }
            ]
        }
    }

    horizontalBar2 = {
        data: {
            labels: [localStorage.getItem("ctry_label_1"), localStorage.getItem("ctry_label_2"), localStorage.getItem("ctry_label_3")],
            datasets: [
                {
                    label: 'Sepending Customers',
                    backgroundColor: 'lightGreen',
                    borderColor: 'limegreen',
                    borderWidth: 1,
                    hoverBackgroundColor: 'limegreen',
                    hoverBorderColor: 'lightGreen',
                    data: [localStorage.getItem("ctry_label_1_data"), localStorage.getItem("ctry_label_2_data"), localStorage.getItem("ctry_label_3_data")]
                }
            ]
        }
    }

    horizontalBar3 = {
        data: {
            labels: [localStorage.getItem("reg_label_1"), localStorage.getItem("reg_label_2"), localStorage.getItem("reg_label_3")],
            datasets: [
                {
                    label: 'Sepending Customers',
                    backgroundColor: 'orange',
                    borderColor: 'orangered',
                    borderWidth: 1,
                    hoverBackgroundColor: 'orangered',
                    hoverBorderColor: 'orange',
                    data: [localStorage.getItem("reg_label_1_data"), localStorage.getItem("reg_label_2_data"), localStorage.getItem("reg_label_3_data")]
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
            labels: ['Defaulted', 'Non-Defaulted'],
            datasets: [
                {
                    label: ['Users'],
                    backgroundColor: '#c3edea',
                    borderColor: 'darkgreen',
                    borderWidth: 1,
                    hoverBackgroundColor: 'lightseagreen',
                    hoverBorderColor: 'rgba(255,99,132,1)',
                    data: [localStorage.getItem("risky_cust"), localStorage.getItem("total_cust") - localStorage.getItem("risky_cust")]
                }
            ]
        }
    }


    barChartDaily = {
        data: {
            labels: ['Credit Card', 'Gambling', 'Food', 'Loan', 'Movie', 'Shoping'],
            datasets: [
                {
                    label: 'Average Spending',
                    backgroundColor: 'rgba(255,99,132,0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 1,
                    stack: 1,
                    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                    hoverBorderColor: 'rgba(255,99,132,1)',
                    data: [localStorage.getItem("ccbill_avg"), localStorage.getItem("gambling_avg"), localStorage.getItem("food_avg"), localStorage.getItem("loan_Avg"), localStorage.getItem("movie_avg"), localStorage.getItem("shopping_avg")]
                },
            ]
        }
    }

    render() {
        return (
            <div class="container-fluid sp" style={{ marginTop: '2%', marginBottom: '2%', marginLeft: '3%', width: '96%', height: 'auto' }}>
                <div style={{ marginTop: '3%', marginLeft: '1%' }}>
                    <div class="row">
                        <div class="col-sm-2" style={{ marginRight: '2%' }}>
                            <Card style={{ width: '21rem', boxShadow: "0px 3px 10px 11px rgba(0,0,0,0.099)", border: "0px solid #fff" }}>
                                <div class="bg-jade text-white">
                                    <Card.Body>
                                        <Card.Title>Total Customers</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted text-white"> <strong class="text-white">Onboarded</strong> </Card.Subtitle>
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
                        <div class="col-sm-2" style={{ marginRight: '2%' }}>
                            <Card style={{ width: '21rem', boxShadow: "0px 3px 10px 11px rgba(0,0,0,0.099)", border: "0px solid #fff" }}>
                                <div class="bg-rag-green text-white">
                                    <Card.Body>
                                        <Card.Title>Negative Spending Customers</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted text-white"> <strong class="text-white">In Count</strong> </Card.Subtitle>
                                        <Card.Text style={{ fontSize: "-webkit-xxx-large", textAlign: "center", }}>
                                            <div className="row">
                                                <div class="col-md-6">

                                                    <span id="cases" class="text-5xl text-center font-light rounded">{localStorage.getItem("risky_cust")} </span>
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
                        {/* <div class="col-sm-2">
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
                    </div> */}
                        <div class="col-sm-2" style={{ marginRight: '2%' }}>
                            <Card style={{ width: '21rem', boxShadow: "0px 3px 10px 11px rgba(0,0,0,0.099)", border: "0px solid #fff" }}>
                                <div class="bg-rag-green text-white">
                                    <Card.Body>
                                        <Card.Title>Customers Advised</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted text-white"> <strong class="text-white">In Count</strong> </Card.Subtitle>
                                        <Card.Text style={{ fontSize: "-webkit-xxx-large", textAlign: "center", }}>
                                            <div className="row">
                                                <div class="col-md-6">

                                                    <span id="cases" class="text-5xl text-center font-light rounded">
                                                        {localStorage.getItem("contacted_cust")}
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
                        <div class="col-sm-2" style={{ marginRight: '2%' }}>
                            <Card style={{ width: '21rem', boxShadow: "0px 3px 10px 11px rgba(0,0,0,0.099)", border: "0px solid #fff" }}>
                                <div class="bg-rag-green text-white">
                                    <Card.Body>
                                        <Card.Title>Customers at Observation</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted text-white"> <strong class="text-white">In Count</strong> </Card.Subtitle>
                                        <Card.Text style={{ fontSize: "-webkit-xxx-large", textAlign: "center", }}>
                                            <div className="row">
                                                <div class="col-md-7">

                                                    <span id="cases" class="text-5xl text-center font-light rounded">
                                                        {localStorage.getItem("custAtObservation")}
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
                        <div class="col-sm-2" style={{ marginRight: '2%' }}>
                            <Card style={{ width: '21rem', boxShadow: "0px 3px 10px 11px rgba(0,0,0,0.099)", border: "0px solid #fff" }}>
                                <div class="bg-rag-green text-white">
                                    <Card.Body>
                                        <Card.Title>Customers Failed To Improve</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted text-white"> <strong class="text-white">In Count</strong> </Card.Subtitle>
                                        <Card.Text style={{ fontSize: "-webkit-xxx-large", textAlign: "center", }}>
                                            <div className="row">
                                                <div class="col-md-7">

                                                    <span id="cases" class="text-5xl text-center font-light rounded">
                                                        {localStorage.getItem("custFailToImprove") === 'null' ? 0 : localStorage.getItem("custFailToImprove")}
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
                    <div class="row" style={{ marginTop: '2%' }}>
                        <div class="col-sm-6">
                            <h4>
                                User Spending Pattern of Last Year
                        </h4>
                            <Line data={this.boundryArea.boundryAreadata} />
                        </div>
                        {/* <div class="col-sm-1">
                            <h4>Customer counseled by Month of Year

</h4>
                            <Line data={this.stokeArea.data} />
                        </div> */}
                        <div class="col-sm-6" >
                            <h4>Spending categories of Customers
</h4>
                            <Pie data={this.piachart.piachartdata} />
                        </div>
                    </div>
                    <br></br>
                    <div class="row" style={{ marginTop: '2%', width: '95%' }}>
                        <div class="col-sm-4" >
                            <h4>Projected Defaulted vs. Non-Projected Defaulted Users


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
                        {/* <div class="col-sm-2">

                        </div> */}
                        <div class="col-sm-8"  >
                            <h4>Average Spending of Customers


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
                    <div class="row" style={{ marginTop: '2%' }}>
                        <div class="col-sm-4" style={{ marginLeft: '-1%' }}>
                            <h4>Top 3 Spending categories of Customers by Globally
</h4>
<div style={{ marginTop: '5%' }}>


                            <HorizontalBar  data={this.horizontalBar1.data} />
                            </div>
                        </div>

                        <div class="col-sm-4">
                            <h4>Top 3 Spending categories of Customers by Country
</h4>
                            <div>
                                <DropdownButton id="dropdown-basic-button" title="Select Country" size="lg">
                                    <Dropdown.Item onClick={(e) => this.handleHomeCountryChange(e)}>England</Dropdown.Item>
                                    <Dropdown.Item onClick={(e) => this.handleHomeCountryChange(e)}>Australia</Dropdown.Item>
                                    <Dropdown.Item onClick={(e) => this.handleHomeCountryChange(e)}>United States of America</Dropdown.Item>
                                    <Dropdown.Item onClick={(e) => this.handleHomeCountryChange(e)}>India</Dropdown.Item>
                                </DropdownButton>
                            </div>
                            <HorizontalBar data={this.horizontalBar2.data} />
                        </div>
                        <div class="col-sm-4">
                            <h4>Top 3 Spending categories of Customers by Region

                            <div>
                                <DropdownButton id="dropdown-basic-button" title="Select Region" style={{marginTop:'1%'}} size="lg">
                                    <Dropdown.Item onClick={(e) => this.handleHomeRegionChange(e)}>Americas</Dropdown.Item>
                                    <Dropdown.Item onClick={(e) => this.handleHomeRegionChange(e)}>APAC</Dropdown.Item>
                                    <Dropdown.Item onClick={(e) => this.handleHomeRegionChange(e)}>EUR</Dropdown.Item>
                                  
                                </DropdownButton>
                            </div>
</h4>
                            <HorizontalBar data={this.horizontalBar3.data} />
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                </div>
            </div>
        );
    }
}

export default Home;