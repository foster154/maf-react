import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../colors'

import avatarImg from '../../assets/avatar.jpg'
// import navData from './NavData.js'
import Routes from '../Routes'

class Nav extends Component {
  render () {
    const { pathname } = this.props
    return (
      <Wrapper>
        {
          // Don't show nav on front page
          pathname !== '/' &&
          <NavBar>
            <LogoItem to='/'>
              <Avatar src={avatarImg} /> Mark Adam Foster
            </LogoItem>
            <Links>

              <NavItem to='/' exact activeStyle={{color: colors.ltBlue}}>Home</NavItem>
              <NavItem to='/about' activeStyle={{color: colors.ltBlue}}>About</NavItem>
              <NavItem to='/portfolio' activeStyle={{color: colors.ltBlue}}>Portfolio</NavItem>
              {/* <NavItem to='/posts' activeStyle={{color: colors.ltBlue}}>Posts</NavItem> */}
              <NavItem to='/contact' activeStyle={{color: colors.ltBlue}}>Contact</NavItem>
            </Links>
          </NavBar>
        }

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
  background-color: ${colors.dkGray};
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
  font-size: 36px;
  align-items: center;
  font-weight: 600;
  z-index: 100;

  @media (max-width: 910px) {
    margin-left: 0;
    margin-top: 10px;
  }

  @media (max-width: 500px) {
    font-size: 1.8em;
  }
`;

const Avatar = styled.img`
  border-radius: 50%;
  height: 80px;
  margin-right: 20px;
  background: #D0D0D0;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.50);
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
  font-size: 1em;
  &:hover {
    color: ${colors.ltBlue};
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
