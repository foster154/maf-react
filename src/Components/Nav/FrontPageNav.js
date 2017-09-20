import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import navData from './NavData'
import colors from '../../colors'

const FrontPageNav = props => {
  return (
    <Wrapper>
      {
        navData.map(link => {
          return <LinkWrapper key={link.path}>
            <Link to={link.path}>
              {link.label}
            </Link>
          </LinkWrapper>
        })
      }
    </Wrapper>
  )
}

FrontPageNav.propTypes = {

}

export default FrontPageNav

const Wrapper = styled.nav`
  text-align: right;
`

const LinkWrapper = styled.div`
  margin-bottom: 12px;
`

const Link = styled(NavLink)`
  color: ${colors.ltBlue};
  text-decoration: none;
  margin: 5px 5px;
  font-size: 18px;
  transition: color 200ms;

  &:hover {
    color: ${colors.ltBlueHover};
    // color: white;
  }
`
