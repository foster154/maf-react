import React from 'react'
import styled from 'styled-components'
import Intro from './_IntroSection'
import Content from './_Content'
import ProjectLinks from './_ProjectLinks'
import Screenshots from './_Screenshots'
import coverImg from '../../assets/projects/covers/brookside.jpg'

// Screenshots
import ss01 from '../../assets/projects/Brookside/brookside-front.jpg'

const BrooksideDentistry = () => {
  return (
    <Wrapper>

      <Intro
        title='Brookside Dentistry'
        summary='A professional WordPress-based website built for an award-winning dental office. This site includes embedded reviews and videos, as well as downloadable patient forms.'
        cover={coverImg}
        tags={[ 'wordpress', 'html', 'css' ]}
      />

      <Content>

        <p>A website for an award winning dental office in St. Louis Park, Minnesota.</p>

        <p>For many people, going the dentist isn't their <em>favorite</em> activity. We focused this project on feeling warm and inviting, to help begin the process of putting patients at ease. Given Brookside Dentistry's outstanding track record, we also wanted to prominently feature their recent awards and BBB rating.</p>

        <p>Other than presenting the office well, the other practical benefit of the site is a way for patients to quickly and easy acquire the necessary forms. This was built in, as well as an easily-updated blog to keep patients informed.</p>

        <p>Key technical aspects of the project:</p>
        <ul>
         	<li>Exploration and implementation of site objectives and goals</li>
         	<li><span class="s1">WordPress site creation, including customized theme work</span></li>
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

export default BrooksideDentistry

const Wrapper = styled.div`
`
