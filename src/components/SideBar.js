import React from 'react';
import styled from "styled-components";
import {  Link } from "react-router-dom";

const StyledSideNav = styled.div`
  position: fixed;     /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
  height: 88%;
  width: 40px;     /* Set the width of the sidebar */
  z-index: 1;      /* Stay on top of everything */
  top: 3.7em;      /* Stay at the top */
  background-color: #222; /* Black */
  overflow-x: hidden;     /* Disable horizontal scroll */
  padding-top: 33px;
  padding-left:0.6%;
 

`;
const StyledNavItem = styled.div`
  height: 50px;
  width: 75px; /* width must be same size as NavBar to center */
  text-align: Left; /* Aligns <a> inside of NavIcon div */
  margin-bottom: 0;   /* Puts space between NavItems */
  a {
    font-size: 1.2em;
    color: ${(props) => props.active ? "LightGreen" : "white"};
    :hover {
      opacity: 0.7;
      text-decoration: none; /* Gets rid of underlining of icons */
    }  
  }
`;

class SideNav extends React.Component {
    constructor(props) {
      let pathname = window.location.pathname;
        super(props);
        this.state = {
          activePath: '/',
          items: [
            {
              path: '/Home', /* path is used as id to check which NavItem is active basically */
              name: 'Home',
              css: 'fa fa-home ',
              key: 1 /* Key is required, else console throws error. Does this please you Mr. Browser?! */
            },
            {
              path: '/search',
              name: 'Search',
              css: 'fa fa-search',
              key: 2
            },
            {
              path: '/dataupload',
              name: 'DataUpload',
              css: 'fa fa-upload',
              key: 3
            },
          ]
        }  
      }

      onItemClick = (path) => {
        this.setState({ activePath: path }); /* Sets activePath which causes rerender which causes CSS to change */
      }


    render() {
       const { items, activePath } = this.state;
  return (
    <StyledSideNav>
      {
        /* items = just array AND map() loops thru that array AND item is param of that loop */
        items.map((item) => {
          /* Return however many NavItems in array to be rendered */
          return (
            <NavItem path={item.path} name={item.name}  css={item.css} onItemClick={this.onItemClick} /* Simply passed an entire function to onClick prop */ active={item.path === activePath} key={item.key}/>
          )
        })
      }
    </StyledSideNav>
  );
      }
}


class NavItem extends React.Component {
    handleClick = () => {
        const { path, onItemClick } = this.props;
        onItemClick(path);
      }

    render() {
        const { active } = this.props;
      return (
        <StyledNavItem active={active}>
        <Link to={this.props.path} className={this.props.css} onClick={this.handleClick}>
          <NavIcon></NavIcon>
        </Link>
      </StyledNavItem>
      );
    }
  }

  const NavIcon = styled.div`
`;


export default class Sidebar extends React.Component {
  render() {
    return (
        <SideNav></SideNav>
    );
  }
}