import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import { PostWrapper } from './PostComponents/PostWrapper'
import TitleSection from './PostComponents/TitleSection'

const Template = () => (
  <Wrapper>
    <Helmet title='An Introverts Guide to Attending Your First Conference' />

    <TitleSection
      title='An Introverts Guide to Attending Your First Conference'
      date='10 July 2017'
    />

    <p>A few weekends ago, I attended my first conference.</p>

    <p>This was something I had wanted to do for about a year now. It seemed like something every software developer or online business owner should do, and was doing… except for me. Somehow I always found excuses not to go.</p>

    <p>At the beginning of the year I decided to change this and set it as a goal for myself. Despite this, I’d made no real progress toward making it happen. Then, I caught wind of an interesting conference being held right here in Boise. It was called Craft & Commerce, put on by the email marketing company <a href='https://convertkit.com/'>Convertkit</a>. I had heard <a href='http://nathanbarry.com/'>Nathan Barry</a> (CEO of ConvertKit) speak a couple times locally, and his talks were always /really/ good. I followed a few of the other speakers as well, and knew the conference was going to be very high quality and right up my ally. </p>

    <p>I still waffled on registering. Even though I wouldn’t have to pay for a hotel or flight, I would think about what else I could buy with the registration fee. I would think about other projects I could work on with my time that weekend. I expressed my wishy-washiness to my wife, but she immediately saw through it and challenged me to go (chalk up one more point to having an amazing spouse). Shortly after her encouragement, I was on a webinar with <a href='https://thefocuscourse.com/'>Shawn Blanc</a>. He mentioned he would be attending, and it began to feel ridiculous that I wasn’t registered, so I pulled the trigger.</p>

    <p>I wasn’t disappointed. A lot of <em>really</em> high caliber people descended on Boise for the weekend and dropped some serious knowledge and inspiration. </p>

    <p>The idea for this post is to present a few items to consider if you are in a similar spot: thinking about going to your first conference, but shy or introverted and having a hard time committing. Here are a few reflections I hope can serve you well.</p>

    <h3>1. Showing up is a victory in itself</h3>
    <p>Before we get too far into this, let’s just pause and remember that simply /going/ is something to be celebrated. Just showing up (and doing nothing else) is a victory!</p>

    <p>I almost chickened out of the whole thing before it even started. I knew the speakers would be awesome. I knew it was a group of people I wanted to be around. I knew I wanted to go to a conference. I still almost didn’t go.</p>

    <p>If you’re an introvert and having a hard time actually clicking the submit button to register, let me be one more voice in the chorus of people encouraging you to go. Do it! Set just one goal for yourself: show up. Even if you don’t talk to anyone, and you immediately slink back to your hotel room once scheduled activities are done, fine. No problem. We can always improve at our second conference. Just take things one step at a time, and for now simply show up.</p>

    <h3>2. Commit to putting yourself out there</h3>
    <p>I’m not a natural conversation starter, small talker, and mingler. At all. It takes intentional effort to start conversations. It takes even more energy to maintain conversations. And to repeat the process of being engaging in a room full of people I don’t know requires a herculean effort worthy of the annals of time. In situations like this, my gut reaction is to exit stage left, ASAP. If no one knows who you are, that means you can leave and no one will notice, right?</p>

    <p>Everyone will tell you there is immense potential value in the relationships that begin at conferences. I’m not really an expert in that, as I’m new to the whole thing. But in order to even have a /shot/ at that coming true, we need to commit to putting ourselves out there. Not leaving… staying. Engaging. Staying and engaging again. And again.</p>

    <p>If you leave, the possibility of a life changing interaction is 0%. If you stay and try, it is no longer 0%. At the very least, you’ll have practiced being outside your comfort zone. This alone is super valuable.</p>

    <p>Commit to meeting and having conversations with three new people a day. Get their contact information, shoot them an email or a tweet later that evening. Step out of your shell and roll the dice on something really valuable happening.</p>

    <h3>3. Look for people you can help</h3>
    <p>This was a strategy that worked wonders for me, and I’m excited to share it. As an insecure introvert in a uncomfortable situation, my brain tends to be consumed with self. I think about how I’m feeling at that given point, about whether there’s something in my teeth, about what I should say next so the other person thinks I’m cool.</p>

    <p>Instead, I find incredible value in forcing myself to forget about myself. Look around: who else could use a helping hand? Is anyone else standing alone, looking nervous, or in need of anything you can provide? If you’re in a room full of strangers, you can bet you’re not the only one feeling a bit out of sorts. See if you can find these people, introduce yourself, and start a conversation. They’ll be glad you did, and you may be able to make a real impact on their conference experience.</p>

    <h3>Wrapup</h3>
    <p>As I continue to reflect on my first conference experience, about half the value came from listening to the talks and workshops. The other half came from intangible, unplanned experiences. Things like hallway conversations and the atmosphere of simply being around likeminded individuals able to push you to the next level.</p>

    <p>I wrote this article with a very specific person in mind. It’s for someone interested in tech, entrepreneurship, online business, or self-employment, who sees everyone attending conferences, is interested, but hasn’t gone to one yet.</p>

    <p>Let me be one more voice: action trumps everything! Save up the money, and do it.</p>

  </Wrapper>
)

export default Template

const Wrapper = styled(PostWrapper)``
