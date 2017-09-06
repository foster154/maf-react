import React from 'react'
import Helmet from 'react-helmet'
import styled, { keyframes } from 'styled-components'
import { fadeIn } from 'react-animations'
import HeroSection from './_Hero'
import Quote from './_Quote'
import Portfolio from './_Portfolio'
import About from './_About'

const Home = () => (
  <Wrapper>
    <Helmet title="Mark Adam Foster" />
    <HeroSection />
    <Quote />
    <FadeIn>
      <Portfolio />
      <About />
    </FadeIn>
  </Wrapper>
)

export default Home

const animation = keyframes`${fadeIn}`

const Wrapper = styled.div``

const FadeIn = styled.div`
  animation: 500ms ${animation};
`
