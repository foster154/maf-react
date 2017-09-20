import React from 'react'
import styled from 'styled-components'
import FontAwesome from 'react-fontawesome'
import colors from '../../../../colors'

const ProjectLinks = ({ liveSite, code }) => (
  <Wrapper>
    { liveSite && <ProjectLink href={liveSite} target='_blank'><FontAwesome name='desktop' /> View Live Site</ProjectLink> }
    { code && <ProjectLink href={code} target='_blank'><FontAwesome name='github' /> View Code</ProjectLink> }
  </Wrapper>
)

export default ProjectLinks

const Wrapper = styled.div`
  margin: 50px auto 30px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const ProjectLink = styled.a`
  text-decoration: none;
  font-weight: 600;
  color: white;
  width: 250px;
  min-width: 200px;
  background-color: ${colors.ltBlue};
  height: 54px;
  border-radius: 34px;
  text-align: center;
  padding-top: 14px;
  margin: 5px;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${colors.ltBlueHover};
  }
`
