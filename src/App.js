import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import styled from 'styled-components'
import Nav from './Components/Nav.js'
import Footer from './Components/Footer'

const App = () => (
  <Router>
    <Wrapper>
      <Nav />
      <Footer />
    </Wrapper>
  </Router>
)

export default App

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`
