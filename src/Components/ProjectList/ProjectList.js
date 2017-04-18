import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Project from './_ProjectListItem'
import { data } from './_ProjectListData'

const renderProjects = () => {
  return data.map(project => {
    return <Project
      key={project.name}
      project={project}
      link={`/projects/${project.slug}`}
      />
  })
}

const ProjectList = () => {
  return (
    <Wrapper>
      <Helmet title="Projects: Mark Adam Foster" />

      <h1>Projects</h1>

      <ListWrapper>
        { renderProjects() }
      </ListWrapper>

    </Wrapper>
  )
}

export default ProjectList

const Wrapper = styled.div`
  width: 1000px;
  max-width: 96%;
  margin: 0 auto;
`

const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
