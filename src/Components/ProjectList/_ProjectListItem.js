import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Tags from './_ProjectTags'

const ProjectListItem = ({ link, project }) => (
  <ProjectWrapper to={link}>
    <Cover src={project.cover} />

    <Title>{project.name}</Title>

    <Summary>{project.summary}</Summary>

    <Tags tags={project.tags} />

  </ProjectWrapper>
)

export default ProjectListItem

const ProjectWrapper = styled(Link)`
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

const Cover = styled.img`
  max-width: 100%;
`

const Title = styled.h3`
  font-weight: 300;
  margin-top: 10px;
  padding: 0 10px;
`

const Summary = styled.div`
  padding: 0 20px 20px;
  text-align: left;
`
