import React from 'react'
import Helmet from 'react-helmet'
import styled, { keyframes } from 'styled-components'
import { fadeIn } from 'react-animations'

const Contact = () => (
  <Wrapper>

    <Helmet title="Contact: Mark Adam Foster" />

    <h1>Contact</h1>

    <Message>
      Have a question? Need help with a project? I'd love to hear from you.
    </Message>

    <Email>
      foster154[at]gmail.com
    </Email>

  </Wrapper>
)

export default Contact

const animation = keyframes`${fadeIn}`

const Wrapper = styled.div`
  animation: 500ms ${animation};
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`

const Message = styled.div`

`

const Email = styled.div`
  text-align: center;
  margin-top: 30px;
  font-size: 36px;
  font-weight: 300;
`
