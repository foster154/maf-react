import React from 'react'
import styled, { keyframes } from 'styled-components'
import { fadeIn, bounceIn } from 'react-animations'
import Badges from '../ProjectList/_ProjectBadges'
import colors from '../../colors'

const IntroSection = ({ title, summary, badges, cover }) => (
  <Wrapper>
    <Title><TitleSmall>Project: </TitleSmall>{title}</Title>
    <FadeIn>
      <Content>
        <ColumnLeft>
          <Summary>{summary}</Summary>
          <BounceIn>
            <Badges badges={badges} size={56} />
          </BounceIn>
        </ColumnLeft>
        <ColumnRight>
          <Cover src={cover} />
        </ColumnRight>
      </Content>
    </FadeIn>
  </Wrapper>
)

export default IntroSection

const Wrapper = styled.div`
  background-color: ${colors.dkBlue};
  width: 100%;
  padding-bottom: 30px;
`

const Title = styled.h1`
  font-size: 2.8em;
  margin: 0;
  padding: 20px 0;
  color: white;
  @media (max-width: 850px) {
    font-size: 2em;
  }
`

const TitleSmall = styled.span`
  font-size: .5em;
`

const fadeInAnimation = keyframes`${fadeIn}`

const FadeIn = styled.div`
  animation: 500ms ${fadeInAnimation};
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1000px;
  max-width: 96%;
  margin: 50px auto;

  @media (max-width: 850px) {
    flex-direction: column;
  }

`

const ColumnLeft = styled.div`
  width: 48%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (max-width: 850px) {
    width: 90%;
    margin: 0 auto;
  }
`

const ColumnRight = styled.div`
  width: 48%;

  @media (max-width: 850px) {
    width: 90%;
    margin: 10px auto 0;
  }
`

const bounceInAnimation = keyframes`${bounceIn}`

const BounceIn = styled.div`
  animation: 800ms ${bounceInAnimation};
`

const Summary = styled.div`
  color: white;
  font-size: 1.3em;
  margin-bottom: 30px;
`

const Cover = styled.img`
  max-width: 100%;
  border: 5px solid white;
`
