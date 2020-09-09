import React, { state } from 'react';
import styled from 'styled-components';
import { Bar, HorizontalBar,Doughnut } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import { Card, ProgressBar } from "react-bootstrap";
// const GridWrapper = styled.div`
//   display: grid;
//   grid-gap: 10px;
//   margin-top: 1em;
//   margin-left: 6em;
//   margin-right: 6em;
//   grid-template-columns: repeat(12, 1fr);
//   grid-auto-rows: minmax(25px, auto);
// `;


// state = {
//     dataBar: {
//       labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//       datasets: [
//         {
//           label: "% of Votes",
//           data: [12, 19, 3, 5, 2, 3],
//           backgroundColor: [
//             "rgba(255, 134,159,0.4)",
//             "rgba(98,  182, 239,0.4)",
//             "rgba(255, 218, 128,0.4)",
//             "rgba(113, 205, 205,0.4)",
//             "rgba(170, 128, 252,0.4)",
//             "rgba(255, 177, 101,0.4)"
//           ],
//           borderWidth: 2,
//           borderColor: [
//             "rgba(255, 134, 159, 1)",
//             "rgba(98,  182, 239, 1)",
//             "rgba(255, 218, 128, 1)",
//             "rgba(113, 205, 205, 1)",
//             "rgba(170, 128, 252, 1)",
//             "rgba(255, 177, 101, 1)"
//           ]
//         }
//       ]
//     },
//     barChartOptions: {
//       responsive: true,
//       maintainAspectRatio: false,
//       scales: {
//         xAxes: [
//           {
//             barPercentage: 1,
//             gridLines: {
//               display: true,
//               color: "rgba(0, 0, 0, 0.1)"
//             }
//           }
//         ],
//         yAxes: [
//           {
//             gridLines: {
//               display: true,
//               color: "rgba(0, 0, 0, 0.1)"
//             },
//             ticks: {
//               beginAtZero: true
//             }
//           }
//         ]
//       }
//     }
//   }

// export const  Home = (props) => (
//   <div class="container-fluid sp" style={{marginTop:'1%',marginBottom:'2%',marginLeft:'2%',width:'96%'}}>
//       <div class="row">

//         <h3 style={{marginTop:'3%',marginLeft:'5%',color:"grey"}}>Report</h3> 
//       </div>
//       <div class="row">
//       <h5 style={{marginTop:'3%',marginLeft:'5%'}}>Summary</h5>
//       </div>
//       <div class="row">
//       <MDBContainer>
//         <h3 className="mt-5">Bar chart</h3>
//         <Bar data={this.state.dataBar} options={this.state.barChartOptions} />
//       </MDBContainer>
//       </div>
//   </div>
// )


class Home extends React.Component {
    state = {
        dataBar: {
            labels: ["Food", "Gambling", "Shoping", "Medical", "Travel", "Others"],
            datasets: [
                {
                    label: "% of Spending",
                    data: [12, 19, 3, 5, 2, 3],
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
        },
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
            labels: ["Red", "Green", "Yellow", "Grey", "Dark Grey"],
            datasets: [
                {
                    data: [300, 50, 100, 40, 120],
                    backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
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
                                        25
                                    </Card.Text>
                                    <Card.Link href="/search">See More Deatils</Card.Link>

                                </Card.Body>
                            </Card>
                        </div>
                        <div class="col-md-4 col-sm-4 col-xs-12" style={{ marginTop: '1%', }}>
                            <Card style={{ width: '17rem', boxShadow: "0px 3px 10px 11px rgba(0,0,0,0.099)", border: "0px solid #fff" }}>
                                <Card.Body>
                                    <Card.Title>Defaut Customer</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">In Ratio </Card.Subtitle>
                                    <Card.Text style={{ fontSize: "-webkit-xxx-large", textAlign: "center", }}>
                                        10%
                                    </Card.Text>
                                    <Card.Link href="/search">See More Deatils</Card.Link>

                                </Card.Body>
                            </Card>
                        </div>
                        <div class="col-md-4 col-sm-4 col-xs-12" style={{ marginTop: '1%', }}>
                            <Card style={{ width: '17rem', height: '13rem', boxShadow: "0px 3px 10px 11px rgba(0,0,0,0.099)", border: "0px solid #fff" }}>
                                <Card.Body>
                                    <Card.Title>Contacted Customer</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">In Ratio </Card.Subtitle>
                                    <Card.Text style={{ fontSize: "-webkit-xxx-large", textAlign: "center", }}>
                                        35%
                                        <ProgressBar variant="success" now={35} />
                                    </Card.Text>

                                    <Card.Link href="/search">See More Deatils</Card.Link>

                                </Card.Body>
                            </Card>
                        </div>

                    </div>

                    <div class="row">
                        <div style={{ marginLeft: '5%', width: '45%', maxHeight: '100%', marginTop: '3%' }}>
                            <MDBContainer>
                                <h5 className="mt-5">Average Spending Patern</h5>
                                <Bar data={this.state.dataBar} options={this.state.barChartOptions} />
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