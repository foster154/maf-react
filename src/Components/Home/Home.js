import React, { Component } from 'react'
import Helmet from 'react-helmet'
import styled, { keyframes } from 'styled-components'
import { fadeIn } from 'react-animations'

import HeroImageSrc from '../../assets/fp-hero.jpg'
import avatarImg from '../../assets/avatar.jpg'
import FrontPageNav from '../Nav/FrontPageNav'
import colors from '../../colors'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = { photoStory: false }
  }
  render () {
    return (
      <Wrapper>
        <Helmet title="Mark Adam Foster" />

        {
          this.state.photoStory &&
          <PhotoStory>
            Lorem ipsum etcyarn
          </PhotoStory>
        }

        <HeroImage />

        <ContentBackground>
          {/* <PhotoInfoButton onClick={() => this.setState({ photoStory: true })}>
            [about this photo]
          </PhotoInfoButton> */}
          <Content>
            <Left>
              <Avatar src={avatarImg} />
              <TextContent>
                <Name>Mark Adam Foster</Name>
                <Title>Web, Mobile & UX Developer</Title>

                <Intro>
                  <p>I've been building digital products for a few years now... mostly ReactJS web apps, React Native mobile apps, and WordPress websites. Have a look around, and I'd love to hear from you!</p>
                </Intro>
              </TextContent>
            </Left>

            <Right>
              <FrontPageNav />
            </Right>
          </Content>
        </ContentBackground>
      </Wrapper>
    )
  }
}

export default Home

const animation = keyframes`${fadeIn}`

const Wrapper = styled.div`
  background-color: ${colors.dkGray};
  height: 100vh;
  width: 100%;
  position: relative;
`

const PhotoStory = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`

const HeroImage = styled.div`
  animation: 3s ${animation};
  height: 100vh;
  width: 100%;
  background: url(${HeroImageSrc}) no-repeat center center fixed;
  background-size: cover;
`

const ContentBackground = styled.div`
  position: absolute;
  background-image: linear-gradient(-180deg, rgba(73,73,73,0.00) 0%, #232323 19%);
  width: 100%;
  color: white;
  text-align: center;
  bottom: 0px;
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1000px;
  max-width: 100%;
  padding: 20px;
  margin: 80px auto 0;
`

const Avatar = styled.img`
  border-radius: 50%;
  height: 100px;
  margin: 10px 26px;
  background: #D0D0D0;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.50);
`

const TextContent = styled.div`

`

const Left = styled.div`
  width: 75%;
  text-align: left;
  display: flex;
`

const Right = styled.div`

`

const Name = styled.div`
  font-size: 48px;
  font-weight: 600;

  @media (max-width: 600px) {
    font-size: 38px;
  }

  @media (max-width: 400px) {
    font-size: 32px;
  }
`

const Title = styled.div`
  font-size: 18px;
  font-style: italic;
  margin-top: 5px;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`

const Intro = styled.div`
  margin: 30px auto;
  font-size: 16px;
  line-height: 22px;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`
