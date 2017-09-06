import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../colors'

import SiteLogo from '../assets/site-logo.png'
import Routes from './Routes'

class Nav extends Component {
  render () {
    return (
      <Wrapper>
        <NavBar>
          <LogoItem to='/'>
            <Logo src={SiteLogo} />
          </LogoItem>
          <Links>
            <NavItem to='/' exact activeStyle={{color: colors.orange}}>Home</NavItem>
            <NavItem to='/about' activeStyle={{color: colors.orange}}>About</NavItem>
            <NavItem to='/portfolio' activeStyle={{color: colors.orange}}>Portfolio</NavItem>
            {/* <NavItem to='/posts' activeStyle={{color: colors.orange}}>Posts</NavItem> */}
            <NavItem to='/contact' activeStyle={{color: colors.orange}}>Contact</NavItem>
          </Links>
        </NavBar>

        <Routes />

      </Wrapper>
    )
  }
}

export default Nav

const Wrapper = styled.div`
  flex: 1;
`

const NavBar = styled.nav`
  background-color: ${colors.dkBlue};
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;

  @media (max-width: 910px) {
    flex-direction: column;
    align-items: center;
  }
`

const LogoItem = styled(NavLink)`
  display: flex;
  color: white !important;
  text-decoration: none;
  font-family: 'Journal';
  font-size: 3em;
  align-items: center;
  z-index: 100;

  @media (max-width: 910px) {
    margin-left: 0;
    margin-top: 10px;
  }

  @media (max-width: 500px) {
    font-size: 1.8em;
  }
`;

const Logo = styled.img`
  width: 400px;
  max-width: 100%;
  margin-right: 10px;
`

const Links = styled.ul`
  padding: 0;
  margin: 24px 0 0 0;
  display: flex;
  flex-direction: row;
  list-style: none;
  text-decoration: none;
  z-index: 100;
  max-width: 100%;

  @media (max-width: 910px) {
    margin-top: 10px;
  }

  @media (max-width: 400px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`

const NavItem = styled(NavLink)`
  color: white;
  text-decoration: none;
  margin: 0 15px;
  font-size: 1.1em;
  &:hover {
    color: ${colors.orange};
    transition: color 0.3s;
  }

  @media (max-width: 1000px) {
    font-size: 1em;
  }

  @media (max-width: 500px) {
    font-size: 0.9em;
    margin: 10px;
  }
`
