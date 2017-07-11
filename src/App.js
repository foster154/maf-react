import React from 'react'
import styled from 'styled-components'
import ScrollToTop from './Components/helpers/ScrollToTop'
import Nav from './Components/Nav.js'
import Footer from './Components/Footer'

const App = () => (
  <ScrollToTop>
    <Wrapper>
      <Nav />
      <Footer />
    </Wrapper>
  </ScrollToTop>
)

export default App

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`
