import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import Intro from './_IntroSection'
import Content from './_Content'
import ProjectLinks from './_ProjectLinks'
import Screenshots from './_Screenshots'
import coverImg from '../../assets/projects/covers/rentbuy.jpg'

// Screenshots
import ss01 from '../../assets/projects/RentBuy/mrwb-front.jpg'
import ss02 from '../../assets/projects/RentBuy/mrwb-email-capture.jpg'
import ss03 from '../../assets/projects/RentBuy/mrwb-results.jpg'

const MyRentWillBuy = () => {
  return (
    <Wrapper>

      <Helmet title="Project: My Rent Will Buy" />

      <Intro
        title='My Rent Will Buy'
        summary='A Ruby on Rails web app for getting a mortgage qualification estimate. Backed with a PostgreSQL database and featuring automatic email notifications.'
        cover={coverImg}
        badges={[ 'rails', 'sass', 'bootstrap', 'html', 'css' ]}
      />

      <Content>

        <p>My Rent Will Buy is a web app geared toward toward helping potential home buyers quickly learn how much they may be able to qualify for. By answering a few simple questions, they get a quick estimate, as well the information of a local mortgage officer.</p>

        <p>This database-backed Ruby on Rails web app can be used to help generate leads for real estate agents and mortgage lenders, and allows for a large amount of customization in regards to automatic followup emails, lead notifications, and more.</p>

        <p>Key technical aspects of the project:</p>
        <ul>
         	<li>built with Ruby on Rails</li>
         	<li>database design and implementation with PostgreSQL</li>
         	<li>front-end implementation with Bootstrap 3 and SASS</li>
         	<li>customizable email templates for lead notifications and followups</li>
        </ul>

        <ProjectLinks
          liveSite='http://www.myrentwillbuy.com/'
          code='https://github.com/foster154/rentbuy'
        />

      </Content>

      <Screenshots
        data={[
          {
            image: ss01,
            caption: 'The initial screen.'
          },
          {
            image: ss02,
            caption: 'An email capture interface before displaying results.'
          },
          {
            image: ss03,
            caption: 'The results page.'
          }
        ]}
      />

    </Wrapper>
  )
}

export default MyRentWillBuy

const Wrapper = styled.div`
`
