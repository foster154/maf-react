import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import Intro from './Shared/IntroSection'
import Content from './Shared/Content'
import ProjectLinks from './Shared/ProjectLinks'
// import Screenshots from './Shared/ScreenshotSection'

import { projectData } from '../ProjectData'

// Screenshots

const LeapCharities = () => {
  const project = projectData.find(project => project.slug === 'leap-charities')

  return (
    <Wrapper>

      <Helmet title="Project: LEAP Charities" />

      <Intro project={project} />

      <Content>

        <p>More details coming soon</p>

        <ProjectLinks
          liveSite='http://www.leapcharities.org'
        />

      </Content>

      {/* <Screenshots
        data={[
          {
            image: ssFront,
            caption: 'The front page.'
          },
          {
            image: ssPhotography,
            caption: 'The real estate photography detail page.'
          },
          {
            image: ssTour,
            caption: 'A sample virtual tour featuring a 360º panorama with hotspots.'
          }
        ]}
      /> */}

    </Wrapper>
  )
}

export default LeapCharities

const Wrapper = styled.div`
`
