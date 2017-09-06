import React from 'react'
import styled from 'styled-components'
import projectsImg from '../../assets/projects.jpg'
import RoundedLink from './_RoundedLink'

const Portfolio = () => {
  return (
    <Section>
      <h2>Portfolio</h2>
      <ProjectsImage src={projectsImg} />
      <RoundedLink to='/portfolio'>
        See Portfolio
      </RoundedLink>
    </Section>
  )
}

export default Portfolio

const Section = styled.section`
  padding: 30px;
  border-bottom: 1px solid #dedede;

  @media (max-width: 500px) {
    padding: 0;
  }
`

const ProjectsImage = styled.img`
  display: block;
  width: 900px;
  max-width: 100%;
  margin: 0 auto;
`
