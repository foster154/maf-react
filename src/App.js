import React from 'react'
import styled from 'styled-components'
import ScrollToTop from './Components/helpers/ScrollToTop'
import Nav from './Components/Nav/Nav.js'
import Footer from './Components/Footer'

const App = props => {
  const { pathname } = props.location
  return (
    <ScrollToTop>
      <Wrapper>
        <Nav pathname={pathname} />
        {
          pathname !== '/' &&
          <Footer />
        }
      </Wrapper>
    </ScrollToTop>
  )
}

export default App

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`
