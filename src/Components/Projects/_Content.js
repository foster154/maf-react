import React from 'react'
import styled from 'styled-components'
import colors from '../../colors'

const Content = ({children}) => (
  <Wrapper>
      {children}
  </Wrapper>
)

export default Content

const Wrapper = styled.div`
  width: 1000px;
  max-width: 100%;
  margin: 0 auto;
  border-left: 10px solid ${colors.orange};
  padding: 10px 30px;
`
