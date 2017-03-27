import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../colors'
import Contact from './Contact'
import avatar from '../assets/avatar.jpg'
import Home from './Home/Home'
import About from './About'
import ProjectList from './ProjectList/ProjectList'
import ShowAndTour from './Projects/ShowAndTour'
import Panoractives from './Projects/Panoractives'
import BoiseStateYoungLife from './Projects/BoiseStateYoungLife'
import BrooksideDentistry from './Projects/BrooksideDentistry'
import SupportTracker from './Projects/SupportTracker'
import MyRentWillBuy from './Projects/MyRentWillBuy'

class Nav extends Component {
  render () {
    return (
      <Wrapper>
        <NavBar>
          <Links>
            <Logo to='/'>
              <Avatar src={avatar} />
              Mark Adam Foster
            </Logo>
            <NavItem to='/' exact activeStyle={{color: colors.orange}}>Home</NavItem>
            <NavItem to='/about' activeStyle={{color: colors.orange}}>About</NavItem>
            <NavItem to='/projects' activeStyle={{color: colors.orange}}>Projects</NavItem>
            <NavItem to='/contact' activeStyle={{color: colors.orange}}>Contact</NavItem>
          </Links>
        </NavBar>

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route exact path="/projects" component={ProjectList} />
        <Route path='/projects/show-and-tour' component={ShowAndTour} />
        <Route path='/projects/panoractives' component={Panoractives} />
        <Route path='/projects/boise-state-young-life' component={BoiseStateYoungLife} />
        <Route path='/projects/brookside-dentistry' component={BrooksideDentistry} />
        <Route path='/projects/support-tracker' component={SupportTracker} />
        <Route path='/projects/my-rent-will-buy' component={MyRentWillBuy} />
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
`

const Avatar = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 50%;
  margin-right: 10px;
`

const Logo = styled(NavLink)`
  display: flex;
  color: white;
  text-decoration: none;
  font-family: 'Journal';
  font-size: 3em;
  margin-right: auto;
  align-items: center;
`;

const Links = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  text-decoration: none;
  width: 100%;
  margin-right: 40px;
`

const NavItem = styled(NavLink)`
  color: white;
  text-decoration: none;
  margin: 24px 15px;
  font-size: 1.1em;
  // font-weight: 300;
  &:hover {
    color: ${colors.orange};
    transition: color 0.3s;
  }
`
