import React from 'react'
import styled from 'styled-components'
import familyPic from '../../assets/family-triangles.jpg'

const About = () => (
  <PageWrapper>
    <h1>About</h1>

    <FamilyPic src={familyPic} />

    <p>A few years ago, I was poised to begin optometry school. I’d spent a long time taking the necessary courses and entrance exams, and travelled around the country to interview. I had picked a school, enrolled in classes, and my wife and I were ready to move.</p>

    <p>At the last minute, we pulled the plug. Something didn’t feel right (probably the six-figure student debt required in order to then work at a job I wasn’t terribly excited about). Instead, I took a position as a tech support rep at a local software company. This was a godsend.</p>

    <p>While my primary role was support, I began using the early mornings and weekends to teach myself how to code. I was quickly hooked. I read books and blogs, watched tutorials, and began to build things. Eventually I could build things of value, and transitioned to the development team. I love what I do.</p>

    <h3>Personal</h3>

    <p>When I’m not sitting (or standing) behind a computer screen, you’ll find me spending time with my family, mountain biking, geocaching, trail running, backpacking, and working on house projects.</p>
  </PageWrapper>
)

export default About

const PageWrapper = styled.div`
  max-width: 700px;
  margin: 0 auto;
  font-size: 22px;
  line-height: 32px;
`

const FamilyPic = styled.img`
  max-width: 96%;
  margin: 0 auto;
`
