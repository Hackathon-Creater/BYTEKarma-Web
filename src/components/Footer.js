

import React, { Component } from 'react';

import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';

class Footer extends Component {
    render() {
      let pathname = window.location.pathname;
        return (
            <div>
        {/* <!-- Footer --> */}
<footer class="page-footer font-smayll footerfixed dbs-footer text-white  bg-dark-slate">
<div class="row">
<div class="col-md-2">
<Nav.Item><Nav.Link href="/contactus" id="contactus"  className={pathname =='/contactus' ? 'text-blue' : 'text-white'}>Contact us</Nav.Link></Nav.Item> 
</div>
<div class="col-md-2">
<Nav.Item><Nav.Link href="/aboutus" id="aboutus" className={pathname =='/aboutus' ? 'text-blue' : 'text-white'} >About us</Nav.Link></Nav.Item>
</div>
<div class="col-md-4"></div>
<div class="col-md-4">
<div class="footer-copyright text-center py-3 ">© Copyright 2020. HSBC India (HSBC India). All rights reserved.
    <a href="https://www.hsbc.co.in/" class="text-white"> hsbc.com</a>
  </div> 
</div>
</div>
  {/* <!-- Copyright --> */}
  
  
             
  {/* <!-- Copyright --> */}

</footer>
{/* <!-- Footer -->/ */}
            </div>
        );
    }
}

export default Footer;