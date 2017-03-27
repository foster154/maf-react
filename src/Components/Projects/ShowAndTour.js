import React from 'react'
import styled from 'styled-components'
import Intro from './_IntroSection'
import Content from './_Content'
import ProjectLinks from './_ProjectLinks'
import coverImg from '../../assets/projects/covers/showtour.jpg'

const ShowAndTour = () => {
  return (
    <Wrapper>

      <Intro
        title='Show and Tour'
        summary='A slideshow virtual tour creation web app for real estate agents & photographers to showcase properties.'
        cover={coverImg}
        tags={[ 'rails', 'sass', 'bootstrap', 'html', 'css' ]}
      />

      <Content>

        <p>Photographers can log in, create a new tour, enter the home’s information, upload photos, and choose a tour theme. There are also various other settings and features, including lead capture forms, photo credits, and more. This virtual tour can then be sold or given to the real estate agent listing the home for marketing purposes.</p>

        <p>I began work on Show and Tour in March of 2014. It has served as an excellent sample project to flesh out many of the web development skills I’d been gaining from studying online resources. I needed a sandbox to put concepts into practice, and Show &amp; Tour was just that.</p>

        <strong>Key technical aspects:</strong>
        <ul>
          <li>Built with Ruby on Rails (and Bootstrap)</li>
          <li>database design and implementation with PostgreSQL</li>
          <li>integration with Stripe for payment processing (subscription and per tour options)</li>
          <li>CSS &amp; JS management of multiple active themes (for sales pages &amp; tour theme options)</li>
          <li>intuitive tour creation with user-friendly design</li>
          <li>multiple, simultaneous image uploads and processing, done via a background process</li>
          <li>cookie-based lead generation modals with optional email notifications</li>
        </ul>

        <ProjectLinks
          liveSite='https://www.showandtour.com/'
          code='https://github.com/foster154/tour_app'
        />

      </Content>

    </Wrapper>
  )
}

export default ShowAndTour

const Wrapper = styled.div`
`
