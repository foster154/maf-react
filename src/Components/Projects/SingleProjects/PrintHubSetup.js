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

const PrintHubSetup = () => {
  const project = projectData.find(project => project.name === 'PrintHub Setup App')

  return (
    <Wrapper>

      <Helmet title="Project: PrintHub Setup App" />

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

export default PrintHubSetup

const Wrapper = styled.div`
`
