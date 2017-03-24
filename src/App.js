import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Nav from './Components/Nav.js'
import Footer from './Components/Footer'

const App = () => (
  <Router>
    <div>
      <Nav />
      <Footer />
    </div>
  </Router>
)

export default App
