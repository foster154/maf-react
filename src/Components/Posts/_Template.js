import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import { PostWrapper } from './PostComponents/PostWrapper'
import TitleSection from './PostComponents/TitleSection'

const Template = () => (
  <Wrapper>
    <Helmet title='' />

    <TitleSection
      title=''
      date='21 Apr 2017'
    />

  </Wrapper>
)

export default Template

const Wrapper = styled(PostWrapper)``
