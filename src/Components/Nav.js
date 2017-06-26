import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../colors'
import Contact from './Contact'
import SiteLogo from '../assets/site-logo.png'
import Home from './Home/Home'
import About from './About'
import Posts from './Posts'
import ProjectList from './ProjectList/ProjectList'
import ShowAndTour from './Projects/ShowAndTour'
import Panoractives from './Projects/Panoractives'
import BoiseStateYoungLife from './Projects/BoiseStateYoungLife'
import BrooksideDentistry from './Projects/BrooksideDentistry'
import SupportTracker from './Projects/SupportTracker'
import MyRentWillBuy from './Projects/MyRentWillBuy'
import { postData } from './Posts/_PostData'

class Nav extends Component {

  renderPostRoutes () {
    return postData.map(post => {
      return <Route path={`/posts/${post.slug}`} component={post.content} key={post.slug} />
    })
  }

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
            <NavItem to='/projects' activeStyle={{color: colors.orange}}>Projects</NavItem>
            <NavItem to='/posts' activeStyle={{color: colors.orange}}>Posts</NavItem>
            <NavItem to='/contact' activeStyle={{color: colors.orange}}>Contact</NavItem>
          </Links>
        </NavBar>

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route exact path="/projects" component={ProjectList} />
        <Route exact path='/posts' component={Posts} />
        <Route path='/projects/show-and-tour' component={ShowAndTour} />
        <Route path='/projects/panoractives' component={Panoractives} />
        <Route path='/projects/boise-state-young-life' component={BoiseStateYoungLife} />
        <Route path='/projects/brookside-dentistry' component={BrooksideDentistry} />
        <Route path='/projects/support-tracker' component={SupportTracker} />
        <Route path='/projects/my-rent-will-buy' component={MyRentWillBuy} />

        { this.renderPostRoutes() }

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
