import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import Intro from './Shared/IntroSection'
import Content from './Shared/Content'
// import ProjectLinks from './Shared/ProjectLinks'
// import Screenshots from './Shared/ScreenshotSection'

import { projectData } from '../ProjectData'

// Screenshots
// import ss01 from '../../assets/projects/BSUYoungLife/bsu-younglife.jpg'

const CheckIn = () => {
  const project = projectData.find(project => project.name === 'Check-In')

  return (
    <Wrapper>

      <Helmet title="Project: Check-In" />

      <Intro project={project} />

      <Content>

        More details coming soon...

      </Content>

      {/* <Screenshots
        data={[
          {
            image: ss01,
            caption: 'The home page.'
          }
        ]}
      /> */}

    </Wrapper>
  )
}

export default CheckIn

const Wrapper = styled.div`
`
