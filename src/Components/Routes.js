import React from 'react'
import { Route } from 'react-router-dom'

import Home from './Home/Home'
import About from './About'
import Contact from './Contact'
import Posts from './Posts'
import ProjectList from './ProjectList/ProjectList'
import ShowAndTour from './Projects/ShowAndTour'
import Panoractives from './Projects/Panoractives'
import BoiseStateYoungLife from './Projects/BoiseStateYoungLife'
import BrooksideDentistry from './Projects/BrooksideDentistry'
import SupportTracker from './Projects/SupportTracker'
import MyRentWillBuy from './Projects/MyRentWillBuy'
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
      <Route path='/portfolio/show-and-tour' component={ShowAndTour} />
      <Route path='/portfolio/panoractives' component={Panoractives} />
      <Route path='/portfolio/boise-state-young-life' component={BoiseStateYoungLife} />
      <Route path='/portfolio/brookside-dentistry' component={BrooksideDentistry} />
      <Route path='/portfolio/support-tracker' component={SupportTracker} />
      <Route path='/portfolio/my-rent-will-buy' component={MyRentWillBuy} />

      { renderPostRoutes() }
    </div>
  )
}

export default Routes
