import React from 'react'
import Helmet from 'react-helmet'
import styled, { keyframes } from 'styled-components'
import { fadeIn } from 'react-animations'

import ProjectEntry from './_ProjectListItem'
import { projectData } from '../ProjectData'

const ProjectList = () => {
  // WordPress Websites
  const panoractives = projectData.find(project => project.name === 'Panoractives')
  const leapCharities = projectData.find(project => project.name === 'LEAP Charities')
  const brookside = projectData.find(project => project.name === 'Brookside Dentistry')

  // Mobile Apps
  const adminConsole = projectData.find(project => project.name === 'Admin Console')

  // Web Apps
  const photoInvoice = projectData.find(project => project.name === 'Photo Invoice')
  const checkIn = projectData.find(project => project.slug === 'check-in')
  const showAndTour = projectData.find(project => project.slug === 'show-and-tour')

  return (
    <Wrapper>
      <Helmet title="Projects: Mark Adam Foster" />

      <h1>Portfolio</h1>
      <SubTitle>Examples and case studies of past work.</SubTitle>

      <SectionTitleWrapper>
        <SectionTitle>
          WordPress Websites
        </SectionTitle>
      </SectionTitleWrapper>

      <SectionContent>
        <ProjectEntry project={panoractives} />
        <ProjectEntry project={leapCharities} />
        <ProjectEntry project={brookside} />
      </SectionContent>

      <SectionTitleWrapper>
        <SectionTitle>
          Mobile Apps
        </SectionTitle>
      </SectionTitleWrapper>

      <SectionContent>
        <ProjectEntry project={adminConsole} />
      </SectionContent>

      <SectionTitleWrapper>
        <SectionTitle>
          Web Apps
        </SectionTitle>
      </SectionTitleWrapper>

      <SectionContent>
        <ProjectEntry project={photoInvoice} />
        <ProjectEntry project={checkIn} />
        <ProjectEntry project={showAndTour} />
      </SectionContent>

    </Wrapper>
  )
}

export default ProjectList

const animation = keyframes`${fadeIn}`

const Wrapper = styled.div`
  animation: 500ms ${animation};
`

const SubTitle = styled.div`
  text-align: center;
  margin-top: -38px;
  font-size: 18px;
  margin-bottom: 40px;
`

const SectionTitleWrapper = styled.div`
  background-color: #E2E2E2;
  padding: 10px;
`
const SectionTitle = styled.div`
  width: 1000px;
  max-width: 96%;
  margin: 0 auto;
  font-size: 22px;
  color: #7b7b7b;
`

const SectionContent = styled.div`
  width: 1000px;
  max-width: 96%;
  margin: 20px auto 30px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 700px) {
    flex-wrap: wrap;
  }
`
