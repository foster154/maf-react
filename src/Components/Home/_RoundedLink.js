import React, { PropTypes } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../colors'

const RoundedLink = ({to, children}) => (
  <StyledLink to={to}>
    {children}
  </StyledLink>
)

export default RoundedLink

RoundedLink.propTypes = {
  children: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
}

const StyledLink = styled(Link) `
  display: block;
  text-align: center;
  width: 250px;
  max-width: 96%;
  margin: 10px auto;
  font-weight: 400;
  font-size: 22px;
  padding: 10px;
  text-decoration: none;
  color: ${colors.orange};
  border: 1px solid ${colors.orange};
  border-radius: 3px;
  transition: background-color .5s, color .5s ease-out;

  @media screen and (max-width: 550px) {
    font-size: 18px;
  }

  &:hover {
    text-decoration: none;
    color: white;
    background-color: ${colors.orange};
  }
`
