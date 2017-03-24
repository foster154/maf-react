import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Nav from './Components/Nav.js'

const App = () => (
  <Router>
    <Nav />
  </Router>
)

export default App
