import React from 'react'
import styled from 'styled-components'
import colors from '../../../colors'

const TitleSection = ({title, date}) => (
  <Wrapper>
    <Title>{title}</Title>
    <PostDate>{date}</PostDate>
  </Wrapper>
)

export default TitleSection

const Wrapper = styled.div`
  margin: 30px 0;
  color: ${colors.dkBlue};
`

const Title = styled.h1`
  margin: 0px;
  padding-bottom: 0;
`

const PostDate = styled.div`
  text-align: center;
  font-size: 18px;
`
