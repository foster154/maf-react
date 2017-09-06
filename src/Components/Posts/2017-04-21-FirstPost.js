import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import { PostWrapper } from './PostComponents/PostWrapper'
import TitleSection from './PostComponents/TitleSection'

const FirstPost = () => (
  <Wrapper>
    <Helmet title="First Post" />

    <TitleSection
      title='First Post'
      date='21 Apr 2017'
    />

    <p>There are three (work-related) things I’m focusing on right now:</p>


    <h4>1. Massive technical growth</h4>

    <p>I’m at a stage where I still have a ton to learn. I can immediately think of a dozen areas where I could sharpen my skills. Perhaps this feeling never goes away, but I do believe I’m at an especially crucial inflection point where I can dig in, work super hard, and reach a new stage of skill and ability.</p>

    <p>The 3 immediate tasks for growth are:</p>
    <ul>
      <li>finish the <a href='https://github.com/getify/You-Dont-Know-JS'>You Don’t Know JavaScript</a> book series</li>
      <li>complete the course <a href='https://simpleprogrammer.com/products/learn-anything/'>10 Steps to Learn Anything Quickly</a> by John Sonmez</li>
      <li>complete Stephen Grider’s <a href='https://www.udemy.com/react-native-advanced/'>Advanced React Native</a> course</li>
    </ul>


    <h4>2. Working in the open and teaching what I learn</h4>

    <p>My natural inclination is to work privately. I hide away, struggle through learning and refining, and only then emerge with a ‘finished’ product I’m willing to show the world.</p>

    <p>In reality, this is a form of insecurity. A better approach is to work out in the open, show the iterations, and invite feedback. This requires a sense of humility and a removal of ego.</p>

    <p>Similarly, I want to teach what I’m learning as I go along. As <a href='http://nathanbarry.com/'>Nathan Barry</a> and <a href='http://seanwes.com/'>Seanwes</a> are fond of saying, “teach everything you know”. There is always someone who knows less than you, and perhaps you can help them.</p>

    <p>Again, my natural inclination is to work privately until someday when I'm an expert I’ll begin to share my knowledge and help others through teaching. Instead, the truth is people become experts <em>because</em> they teach.</p>

    <p>My 3 immediate tasks:</p>
    <ul>
      <li>Start posting to this site 1-2x per week</li>
      <li>Instigate more code reviews & feedback cycles at work</li>
      <li>Do a mini-presentation at work (they’ve requested flexbox and Expo)</li>
    </ul>


    <h4>3. Reaching out and getting to know new and interesting people</h4>

    <p>There were benefits to (largely) shutting out the outside world and focusing on growing my coding skills. I learned a lot. But I’m ready to enter a new stage: one which includes collaboration and engagement with new people and new ideas. While I’m still trying to make massive strides with my technical skills, I also want to engage the world around me, and see what emerges.</p>

    <p>My 3 immediate tasks:</p>
    <ul>
      <li>Begin attending local meetups</li>
      <li>Engage with people on Twitter</li>
      <li>Meet one new person every week</li>
    </ul>

  </Wrapper>
)

export default FirstPost

const Wrapper = styled(PostWrapper)``
