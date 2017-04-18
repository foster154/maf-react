import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Intro from './_IntroSection'
import Content from './_Content'
import ProjectLinks from './_ProjectLinks'
import Screenshots from './_Screenshots'
import coverImg from '../../assets/projects/covers/bsu-younglife.jpg'

// Screenshots
import ss01 from '../../assets/projects/BSUYoungLife/bsu-younglife.jpg'

const BoiseStateYoungLife = () => {
  return (
    <Wrapper>

      <Helmet title="Project: Boise State Young Life" />

      <Intro
        title='Boise State Young Life'
        summary='A clean, friendly website built with WordPress for a local college ministry. Featuring an Instagram feed, embedded videos, and 100% mobile-friendly.'
        cover={coverImg}
        tags={[ 'wordpress', 'html', 'css' ]}
      />

      <Content>

        <p>Boise State Young Life is a thriving college ministry. They were in need of a clean, friendly site to engage donors and get information to students. Other requirements included it being easy to update and maintain, and to be flexible for ongoing (and unforeseen) needs.</p>

        <p>This WordPress site does just that. Rather than starting from scratch, we adapted an existing theme to help speed up the development process and reduce cost. Updates to the site are easy to make (even by those with no coding experience), and new pages for announcing events and fundraisers can be added easily. And though the use of a child theme, I am able to make ongoing customizations to their theme while still allow theme updates to happen without a hitch.</p>

        <p>Key technical aspects of the project:</p>
        <ul>
         	<li>Exploration and implementation of site objectives and goals</li>
         	<li>WordPress site creation, including customized child theme</li>
        </ul>

        <ProjectLinks
          liveSite='http://www.boisestateyounglife.org/'
        />

      </Content>

      <Screenshots
        data={[
          {
            image: ss01,
            caption: 'The home page.'
          }
        ]}
      />

    </Wrapper>
  )
}

export default BoiseStateYoungLife

const Wrapper = styled.div`
`
