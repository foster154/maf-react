import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import { PostWrapper } from './PostComponents/PostWrapper'
import TitleSection from './PostComponents/TitleSection'

// images
import trelloLearningImg from '../../assets/posts/trello-learning.png'
import paddleboardImg from '../../assets/posts/paddleboard.jpg'

const Template = () => (
  <Wrapper>
    <Helmet title='A Weekend Away' />

    <TitleSection
      title='A Weekend Away'
      date='29 May 2017'
    />

    <p>One of the things I find both enjoyable and difficult about being a web developer is the constant stream of new information to learn and projects to build.</p>

    <p>Here's the current state of my Trello board titled "Learning":</p>

    <img className='post-img' src={trelloLearningImg} alt="Screenshot of Trello board" />

    <p>I've got 7 courses/books I'm currently in the middle of, many more waiting in my To Do column, and literally an endless supply waiting for me to discover online. Not included on this board are the dozen or so dev-related projects I've started (or want to start).</p>

    <p>Don't get me wrong, I'm grateful for this never ending firehose of information. A couple years of early mornings and weekends, combined with the vast amount of information on the internet, allowed me to transition into a profession that I love. But when you combine a natural enjoyment of learning with potential professional success, it can make it hard to take time off.</p>

    <p>Actually, that wouldn't be so bad. What happens to me is that I'll still take the time off, but not feel great about it. There's a constant, back-of-the-mind niggling thought that I should be inside working, reading one more book, taking one more course, building one more side project.  And not just that I should, but that I also want to be. It's not an entirely satisfying place to be.</p>

    <p>Anyway, I'm grateful that I was able to escape from all of that for a couple days this weekend. Some friends alerted us to the fact that some other friends weren't able to use their campsite reservation, and it was up for grabs.</p>

    <p>When my wife told me about it, I was in the midst of working through a Next.js tutorial, and excited about using part of the weekend to convert this site over to it. But I digress...</p>

    <p>The weekend away was incredible, one of our favorite times as a family of four. I didn't think about work much, but there was one moment where I was sitting in the sunshine, sipping a microbrew IPA (at 10 am), beside the crystal clear mountain lake. Our youngest daughter was in the tent taking her morning nap, and my wife and other daughter had taken the paddleboard over to the nearby lodge to look for stickers.</p>

    <img className='post-img' src={paddleboardImg} alt="Paddleboarding on Lake" />

    <p>Sitting there, I remembered our weekend was soon going to be over, and before I knew it I'd be back at work. As that thought crossed my mind, I realized that... (drum roll please)... I wasn't bummed at the prospect. And that's incredible.</p>

    <p>I don't have good advice to share about combining massive productivity with the ability to be fully present in moments of rest. I haven't figured out either of those yet.</p>

    <p>But when you do get away,<br />
    and are sitting quietly in a place of incredible beauty,<br />
    and you remember that work starts again in a couple days...<br />
    Here's to hoping it doesn't bum you out.</p>

    <p>If it does, start a Trello board called "Learning" and get to work :)</p>

  </Wrapper>
)

export default Template

const Wrapper = styled(PostWrapper)``
