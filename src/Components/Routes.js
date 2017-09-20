import React from 'react'
import { Route } from 'react-router-dom'

import Home from './Home/Home'
import About from './About'
import Contact from './Contact'
import Posts from './Posts'
import ProjectList from './Projects/ProjectList/ProjectList'

import PhotoInvoice from './Projects/SingleProjects/PhotoInvoice'
import CheckIn from './Projects/SingleProjects/CheckIn'
import FastApp from './Projects/SingleProjects/FastApp'
import AdminConsole from './Projects/SingleProjects/AdminConsole'
import PrintHubSetup from './Projects/SingleProjects/PrintHubSetup'
import ShowAndTour from './Projects/SingleProjects/ShowAndTour'
import Panoractives from './Projects/SingleProjects/Panoractives'
import BoiseStateYoungLife from './Projects/SingleProjects/BoiseStateYoungLife'
import BrooksideDentistry from './Projects/SingleProjects/BrooksideDentistry'
import SupportTracker from './Projects/SingleProjects/SupportTracker'
import MyRentWillBuy from './Projects/SingleProjects/MyRentWillBuy'
import LeapCharities from './Projects/SingleProjects/LeapCharities'

import { postData } from './Posts/_PostData'

function renderPostRoutes () {
  return postData.map(post => {
    return <Route path={`/posts/${post.slug}`} component={post.content} key={post.slug} />
  })
}

const Routes = props => {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route exact path="/portfolio" component={ProjectList} />
      <Route exact path='/posts' component={Posts} />

      <Route path='/portfolio/photo-invoice' component={PhotoInvoice} />
      <Route path='/portfolio/check-in' component={CheckIn} />
      <Route path='/portfolio/fastapp' component={FastApp} />
      <Route path='/portfolio/admin-console' component={AdminConsole} />
      <Route path='/portfolio/printhub-setup' component={PrintHubSetup} />
      <Route path='/portfolio/show-and-tour' component={ShowAndTour} />
      <Route path='/portfolio/panoractives' component={Panoractives} />
      <Route path='/portfolio/leap-charities' component={LeapCharities} />
      <Route path='/portfolio/boise-state-young-life' component={BoiseStateYoungLife} />
      <Route path='/portfolio/brookside-dentistry' component={BrooksideDentistry} />
      <Route path='/portfolio/support-tracker' component={SupportTracker} />
      <Route path='/portfolio/my-rent-will-buy' component={MyRentWillBuy} />

      { renderPostRoutes() }
    </div>
  )
}

export default Routes
