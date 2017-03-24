import React from 'react'
import styled from 'styled-components'

const Contact = () => (
  <Wrapper>

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

const Wrapper = styled.div`
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
