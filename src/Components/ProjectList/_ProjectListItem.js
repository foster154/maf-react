import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Badges from './_ProjectBadges'

const Content = ({ project }) => (
  <div>
    <Cover src={project.cover} />
    <Title>{project.name}</Title>
    <Summary>{project.summary}</Summary>
    <Badges badges={project.badges} />
  </div>
)

const ProjectListItem = ({ link, project }) => {
  if (project.slug === '#') {
    return (
      <ProjectWrapperNotLinked>
        <Content project={project} />
      </ProjectWrapperNotLinked>
    )
  }

  return (
    <ProjectWrapperLinked to={link}>
      <Content project={project} />
    </ProjectWrapperLinked>
  )
}

export default ProjectListItem

const ProjectWrapperLinked = styled(Link)`
  width: 48%;
  background-color: white;
  margin-bottom: 30px;
  border: 1px solid #e4e0e0;
  transition: transform 0.3s;
  text-decoration: none;
  color: black;

  @media (max-width: 740px) {
    width: 100%;
  }

  &:hover {
    transform: scale(1.03);
  }
`

const ProjectWrapperNotLinked = styled.div`
  width: 48%;
  background-color: white;
  margin-bottom: 30px;
  border: 1px solid #e4e0e0;
  transition: transform 0.3s;
  text-decoration: none;
  color: black;

  @media (max-width: 740px) {
    width: 100%;
  }
`

const Cover = styled.img`
  max-width: 100%;
`

const Title = styled.h3`
  font-weight: 400;
  margin-top: 10px;
  padding: 0 10px;
`

const Summary = styled.div`
  padding: 0 20px 20px;
  text-align: left;
`
