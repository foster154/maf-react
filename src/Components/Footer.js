import React from 'react'
import styled from 'styled-components'

const Footer = () => (
  <FooterDiv>
    © 2017 Mark Adam Foster. All Rights Reserved.
  </FooterDiv>
)

export default Footer

const FooterDiv = styled.div`
  width: 100%;
  margin: 20px 0;
  font-weight: 300;
  display: block;
  text-align: center;
  color: #bdbdbd;

  @media (max-width: 767px) {
    font-size: 16px;
  }

  @media (max-width: 466) {
    font-size: 14px;
  }
`
