import React from 'react'
import styled from 'styled-components'
import colors from '../../colors'
import quoteImg from '../../assets/quote.svg'

const Quote = () => {
  return (
      <Section>
        <Wrapper>
          <QuoteImg src={quoteImg} />
          <QuoteText>
            Mark really captured the vision for our organization. He is a great communicator, which made the whole process very user friendly.  I have nothing but good things to say--would definitely recommend working with Mark!
            <QuoteBy><em> - Amanda, LEAP Charities</em></QuoteBy>
          </QuoteText>
        </Wrapper>
      </Section>
  )
}

export default Quote

const Section = styled.section`
  background-color: ${colors.darkerBlue};
  color: #e0e0e0;
  font-weight: 400;
  padding: 30px;
  font-size: 20px;
`

const Wrapper = styled.div`
  width: 800px;
  max-width: 90%;
  margin: 0 auto;
  position: relative;
`

const QuoteImg = styled.img`
  position: absolute;
  height: 120%;
  left: -36px;
  top: -8px;
`

const QuoteText = styled.div`
  z-index: 1;
  opacity: .99;
  @media screen and (max-width: 800px) {
  font-size: .8em;
  }
`

const QuoteBy = styled.span`
  float: right;
  font-size: .9em;
  font-weight: 300;
`
