import React, { Component } from 'react';
import { Card, ProgressBar, Alert } from "react-bootstrap";
import axios from 'axios';

//  import 'mdbreact/dist/css/mdb-free.css';
//  import "./assets/scss/mdb-free.scss/";
// import './DataUpload.css';



class DataUpload extends Component {


  state = {

    // Initially, no file is selected 
    selectedFile: null,
    showalert: false
  };



  // On file select (from the pop up) 
  onFileChange = event => {

    // Update the state 
    this.setState({ selectedFile: event.target.files[0] });

  };

  // On file upload (click the upload button) 
  onFileUpload = () => {

    // Create an object of formData 
    const formData = new FormData();

    // Update the formData object 
    formData.append(
      "file",
      this.state.selectedFile,
      this.state.selectedFile.name
    );
    // let config = {
    //     headers: {
    //       header1: value,
    //     }
    //   }
    // Details of the uploaded file 

    var statusRes = "";
    // Request made to the backend api 
    // Send formData object 
    axios.post("http://3.18.106.65:5000/upload", formData).then(function (response) {
      console.log(response.status);
      statusRes = response.status;

    });

    this.setState({ showalert: true });

  };
  onFileChange = event => {

    // Update the state 
    this.setState({ selectedFile: event.target.files[0] });

  };

  // On file upload (click the upload button) 
  onFileuserdataUpload = () => {

    // Create an object of formData 
    const formData = new FormData();

    // Update the formData object 
    formData.append(
      "file",
      this.state.selectedFile,
      this.state.selectedFile.name
    );
    // let config = {
    //     headers: {
    //       header1: value,
    //     }
    //   }
    // Details of the uploaded file 

    var statusRes = "";
    // Request made to the backend api 
    // Send formData object 
    axios.post("http://3.18.106.65:5000/infoupload", formData).then(function (response) {
      console.log(response.status);
      statusRes = response.status;

    });

    this.setState({ showalert: true });

  };
  // File content to be displayed after 
  // file upload is complete 
  fileData = () => {

    if (this.state.selectedFile) {

      return (
        <div>
          <h5>File Details:</h5>
          <p><strong>File Name:</strong> {this.state.selectedFile.name}</p>
          <p><strong>File Type:</strong> {this.state.selectedFile.type}</p>
          <p> <strong>
            Last Modified:{" "} </strong>
            {this.state.selectedFile.lastModifiedDate.toDateString()}
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <br />
          <h6>Choose before Pressing the Upload button</h6>
        </div>
      );
    }
  };

  render() {

    return (
      <div className="container">
       
        <div class="row filedesc">
          <div class="col-sm-5 ">
            <p>This file holds the data for Customer set that will he used to calculate the Spending pattern. We will also use this to derive the Probability of default and predict the gambling probability value for future.
</p>
            <br>
            </br>
            <p><strong>NOTE:</strong> This feature is only to present the solution for Hackathon. In real time, we will be using the endpoints from the Bank's database to do calculations and improve the model.</p>
            <i class="fa fa-upload" aria-hidden="true"></i>
          </div>
          <div class="col-sm-1"></div>
          <div class="col-md-6">
          {this.state.showalert? <div class="row">
        <div class="col-md-12">
        <Alert show={this.state.showalert} variant="success">
              File Uploaded Successfully...
                        </Alert>
          </div>-              
        </div>:""}
           <div class="row">
           <div class="col-md-12">
            <form method="post" action="#" id="#">




              <div class="form-group files color">
                <label>Upload Your File </label>
                <input type="file" onChange={this.onFileChange} class="form-control" multiple="" />
              </div>


            </form>
            </div>
            </div>
            <div className="row">
              <div class="col-sm-6">
                <button className="btn btn-danger" style={{float: 'right'}} onClick={this.onFileUpload}>
                  Data Upload
                        </button>
              </div>
              <div class="col-sm-6">
                <button className="btn btn-danger" onClick={this.onFileuserdataUpload}>
                  User data Upload
                        </button>
              </div>
            </div>
           
         
          <div class="row">
          <div class="col-md-12">
            {this.fileData()}
            </div>
          </div>
          </div>


        </div>
      </div>
    );
  }
}

export default DataUpload;