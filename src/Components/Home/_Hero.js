import React from 'react'
import styled from 'styled-components'
import colors from '../../colors'
// import tree from '../../assets/tree.svg'
import TreeSVG from './_TreeSVG'
import '../../css/tree.css'

const Hero = () => {
  return (
      <Section>
        <Tree className="tree">
          <TreeSVG />
        </Tree>
        <div className="hero-text">
          I build websites and apps<br /> that help businesses grow.
        </div>
      </Section>
  )
}

export default Hero

const Section = styled.section`
  background-color: ${colors.dkBlue};
  color: white;
  font-size: 38px;
  font-weight: 300;
  text-align: center;
  height: 370px;
  padding-top: 140px;
  position: relative;

  .hero-text {
  z-index: 1;
  opacity: .99;
  }

  @media (max-width: 500px) {
    font-size: 28px;
    height: 300px;
    padding-top: 100px;
  }
`

const Tree = styled.div`
  position: absolute;
  bottom: -20px;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 500px;
  opacity: .2;
  @media (max-width: 500px) {
    transform: scale(.6);
    transform-origin: 50% 100%;
    width: 300px;
  }
`
