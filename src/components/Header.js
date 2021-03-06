import React, { Component } from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import $ from "jquery";
const isActive = {
  fontWeight: "bold",
  backgroundColor: "rgba(255, 255, 255, 0.1)",
};

class Header extends Component {
 
  

  
  render() {
    let pathname = window.location.pathname;
   

    return (
      <div>

        <header class="dbs-masthead" role="banner">
        <div class="dbs-masthead_logo">
        <svg viewBox="0 0 315.9 85.1" width="103" height="30" xmlns="http://www.w3.org/2000/svg">
          <path class="text-white" d="M42.6 0h85v85h-85z" fill="#fff"/>
          <g fill="#db0011">
            <path class="text-white" d="M170.1 42.6L127.6 0v85.1zM85.1 42.6L127.6 0h-85z"/>
            <path class="text-white" d="M0 42.6l42.6 42.5V0zM85.1 42.6L42.6 85.1h85z"/></g>
            <g fill="#fff">
            <path d="M207.4 45.1H192v15.2h-7.7V24.7h7.7v14.6h15.4V24.7h7.7v35.6h-7.7zM233.7 61c-7.7 0-14-3.1-14.1-11.6h7.7c.1 3.8 2.3 6.1 6.5 6.1 3.1 0 6.7-1.6 6.7-5.1 0-2.8-2.4-3.6-6.4-4.8l-2.6-.7c-5.6-1.6-11.2-3.8-11.2-10.2 0-7.9 7.4-10.6 14.1-10.6 6.9 0 12.9 2.4 13 10.3h-7.7c-.3-3.2-2.2-5.1-5.8-5.1-2.9 0-5.7 1.5-5.7 4.7 0 2.6 2.4 3.4 7.4 5l3 .9c6.1 1.9 10 4 10 10-.1 8-7.9 11.1-14.9 11.1zM252.9 24.8h12.4c2.3-.1 4.7 0 7 .4 4.3 1 7.6 3.8 7.6 8.6 0 4.6-2.9 6.9-7.1 8 4.8.9 8.4 3.3 8.4 8.6 0 8.1-8 9.9-14.2 9.9h-14zm12.4 14.8c3.4 0 6.9-.7 6.9-4.8 0-3.7-3.2-4.7-6.4-4.7h-5.4v9.5zM266 55c3.6 0 7.1-.8 7.1-5.2s-3-5.2-6.7-5.2h-6.1V55zM301.2 61c-11.5 0-16.6-7.3-16.6-18.2s5.7-18.8 17-18.8c7.1 0 14 3.2 14.2 11.2h-8c-.4-3.6-2.8-5.4-6.2-5.4-7 0-9.1 7.5-9.1 13.2s2.1 12.3 8.8 12.3c3.5 0 6.1-1.9 6.6-5.5h8c-.8 8.2-7.3 11.2-14.7 11.2z"/>
            </g>
            </svg>
      
   
         

          </div>
          <div class="ml-3 border-l border-pewter text-lg flex flex-grow w-full pl-3 text-white">
          At Risk Customer Protection
          </div>
          <Nav className="ml-auto ml-3 border-l border-pewter text-lg flex flex-grow w-full pl-3 text-white" style={{color:"black",width: '298%'}}>
              <Nav.Item><Nav.Link href="/home" id="navhome"  className={pathname =='/home' ? 'text-blue' : 'text-white'}>Dashboard</Nav.Link></Nav.Item> 
              <Nav.Item><Nav.Link href="/search" id="navsearch" className={pathname =='/search'  || pathname =='/searchResult' ? 'text-blue' : 'text-white'} >Search</Nav.Link></Nav.Item> 
              <Nav.Item><Nav.Link href="/dataupload" id="navdataupload" className={pathname =='/dataupload' ? 'text-blue' : 'text-white'}>Data Upload</Nav.Link></Nav.Item> 
              <Nav.Item><Nav.Link href="/policy" id="navprovacypolicy" className={pathname =='/policy' ? 'text-blue' : 'text-white'}>Privacy Policy</Nav.Link></Nav.Item> 
            
               <Nav.Item><Nav.Link href="/carepackage" id="navcarepackage" className={pathname =='/carepackage' ? 'text-blue' : 'text-white'}>Care Package</Nav.Link></Nav.Item>
               <Nav.Item><Nav.Link href="/help" id="navhelp" className={pathname =='/help' ? 'text-blue' : 'text-white'}>Help</Nav.Link></Nav.Item> 
               
             </Nav>
             <div style={{
               borderLeft: '1px solid white',
               height: '53%',
               paddingLeft:'1%'
             }}></div>
          <div class="dbs-user-menu text-sm mr-6 text-white" style={{width:'135%'}}>
          
        Signed &nbsp;: &nbsp;&nbsp; {localStorage.getItem("name")=="Bipil Raut"? <img class="rounded-circle" style={{width:'9%'}} alt="100x100" src="https://pbs.twimg.com/profile_images/1042073179215122432/Jxl-1ngC_400x400.jpg"
          data-holder-rendered="true"></img> : localStorage.getItem("name")=="Abhishek Tripathi"?  <img class="rounded-circle" style={{width:'9%'}} alt="100x100" src="https://media-exp1.licdn.com/dms/image/C4E03AQEz1BxItUTjWA/profile-displayphoto-shrink_200_200/0?e=1606953600&v=beta&t=hc9A1Flhd98BuSK65ujb6d5st4l2SsmZmdwxr7d_Ddo"
          data-holder-rendered="true"></img>:<i class="fas fa-user"></i>} 
          <strong class="text-white"> &nbsp;{localStorage.getItem("name")}</strong> 
          &nbsp;&nbsp;&nbsp;
          <a class="text-white" href="/">  <strong class="text-white"> |&nbsp; Logout</strong>    <i class="fas fa-sign-out-alt" style={{marginLeft: '1%',color:'white'}}> </i></a>

          
          </div>
          
        </header>

      </div>
    );
  }
}

export default Header;