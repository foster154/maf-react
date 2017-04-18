import React from 'react'
import Helmet from 'react-helmet'
import HeroSection from './_Hero'
import Quote from './_Quote'
import Projects from './_Projects'
import About from './_About'

const Home = () => (
  <div>
    <Helmet title="Mark Adam Foster" />
    <HeroSection />
    <Quote />
    <Projects />
    <About />
  </div>
)

export default Home
