import React from 'react'
import styled from 'styled-components'
import colors from '../../../../colors'

const renderScreenshots = (data) => {
  return data.map((screenshot, index) => {
    return (
      <Screenshot key={index}>
        <Caption>{screenshot.caption}</Caption>
        <Image src={screenshot.image} />
      </Screenshot>
    )
  })
}

const Screenshots = ({data}) => (
  <Wrapper>
    { renderScreenshots(data) }
  </Wrapper>

)

export default Screenshots

const Wrapper = styled.div`
  background-color: ${colors.dkBlue};
  padding: 30px 0;
`

const Screenshot = styled.div`
  width: 1000px;
  max-width: 92%;
  margin: 30px auto 70px;
`

const Caption = styled.div`
  color: white;
  font-size: 1.2em;
  text-align: center;
  margin: 40px auto 40px;
`

const Image = styled.img`
  max-width: 100%;
`
