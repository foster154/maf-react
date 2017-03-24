import React, { Component, PropTypes } from 'react'
import {
  BrowserRouter as Router,
  Route,
  NavLink } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../colors'

import Home from './Home/Home.js'
import About from './About/About.js'

class Nav extends Component {
  render () {
    return (
      <div>
        <NavBar>
          <Links>
            <Logo to='/'>Mark Adam Foster</Logo>
            <NavItem to='/' exact activeStyle={{color: colors.orange}}>Home</NavItem>
            <NavItem to='/about' activeStyle={{color: colors.orange}}>About</NavItem>
            <NavItem to='/projects' activeStyle={{color: colors.orange}}>Projects</NavItem>
            <NavItem to='/contact' activeStyle={{color: colors.orange}}>Contact</NavItem>
          </Links>
        </NavBar>

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </div>

    )
  }
}

export default Nav

const NavBar = styled.nav`
  background-color: ${colors.dkBlue};
  display: flex;
`;

const Links = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  text-decoration: none;
  width: 100%;
`;

const NavItem = styled(NavLink)`
  color: white;
  text-decoration: none;
  margin: 24px 15px;
  font-size: 1.1em;
  font-weight: 300;
  &:hover {
    color: ${colors.orange};
    transition: color 0.3s;
  }
`;

const Logo = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-family: 'Journal';
  font-size: 3em;
  margin-right: auto;
`;
