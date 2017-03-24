import React from 'react'
import styled from 'styled-components'
import projectsImg from '../../assets/projects.jpg'
import RoundedLink from './_RoundedLink'

const Projects = () => {
  return (
    <Section>
      <h2>Projects</h2>
      <ProjectsImage src={projectsImg} />
      <RoundedLink to='/portfolio'>
        See Projects & Details
      </RoundedLink>
    </Section>
  )
}

export default Projects

const Section = styled.section`
  padding: 30px;
  border-bottom: 1px solid #dedede;
`

const ProjectsImage = styled.img`
  display: block;
  width: 900px;
  margin: 0 auto;
`
