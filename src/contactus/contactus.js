import React from 'react';
import styled from 'styled-components';
import { Col, Row, Container } from 'react-bootstrap';

export const  Contactus = (props) => (
  
//   <Container>
  
//   <Row>
//     <Col class="contactusimage">1 of 10</Col>
//     <Col class="faqimage">2 of 3</Col>
//     <Col class="aboutusimage">3 of 3</Col>
//   </Row>
// </Container>
<div>
  <div className="container">
  <div class="contact-form" style={{marginTop:'8%',fontSize:'16px'}} >
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="contact-form__info">
              <h4 class="head-small">Get in Touch</h4>
              <div class="contact-num">

                <div class="info-block mb-3">
                  <span class="fas fa-map-marker"></span>
                  <p>Address: HSBC Technology India, 103/2, Airport Rd, Jayprakash Nagar, Yerawada, Pune, Maharashtra-411006, INDIA.</p>
                </div>
                <div class="info-block">
                  <span class="fas fa-mobile"></span>
                  <a href="tel:+918433772232" target="_blank" title="+918433772232">+91-8433772232</a>
                </div>
                <div class="info-block">
                  <span class="fas fa-envelope"></span>
                  <a href="mailto:Abhishek.tripathi@gmail.com" target="_blank" title="Abhishek.tripathi@gmail.com">Abhishek.tripathi@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            
            <form class="contact-form__form" id="mainContact" onsubmit="javascript:return false;" method="post">
              <h4 class="head-small">Contact Us</h4>
              <div class="form-row">
                <div class="form-group col-lg-6">
                  <label for="Sname">Name</label>
                  <input type="text" class="form-control" id="Sname" name="Sname"/>
                  <span class="Sname_err errMsg">&nbsp;</span>
                </div>
                <div class="form-group col-lg-6">
                  <label for="Scompname">Username</label>
                  <input type="text" class="form-control" id="Scompname" name="Scompname"/>
                  <span class="Scompname_err errMsg">&nbsp;</span>
                </div>
                <div class="form-group col-lg-6">
                  <label for="Semail">Email</label>
                  <input type="Semail" class="form-control" id="Semail" name="Semail"/>
                  <span class="Semail_err errMsg">&nbsp;</span>
                </div>
                <div class="form-group col-lg-6">
                  <label for="Sphone">Phone</label>
                  <input type="text" class="form-control" id="Sphone" name="Sphone"/>
                  <span class="Sphone_err errMsg">&nbsp;</span>
                </div>
                <div class="form-group col-lg-12">
                  <label for="Senq">Enquiry Type</label>
                  <select class="form-control" id="Senq" name="Senq">
                    <option value="service">Service</option>
                    <option value="sales">Others</option>
                  </select>
                  <span class="Senq_err errMsg">&nbsp;</span>

                </div>
                <div class="form-group col-lg-12">
                  <label for="message">Message</label>
                  <textarea class="form-control" id="Smessage" name="Smessage" rows="3"></textarea>
                  <span class="Smessage_err errMsg">&nbsp;</span>
                </div>
                <div class="col-lg-12">
                  <button type="submit" id="ContactSecondary" class="btn btn-danger" size="lg" style={{
    float: 'right',
    margin: '1%',
    width: '9%'
}} >Send</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  
  </div>
  </div>
  )