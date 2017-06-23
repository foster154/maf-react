import React from 'react'
import styled from 'styled-components'

// Project badge icons
import bootstrapIcon from '../../assets/projects/badges/bootstrap.png'
import cssIcon from '../../assets/projects/badges/css3.png'
import expoIcon from '../../assets/projects/badges/expo.png'
import gulpIcon from '../../assets/projects/badges/gulp.png'
import htmlIcon from '../../assets/projects/badges/html5.png'
import jqueryIcon from '../../assets/projects/badges/jquery.png'
import jsIcon from '../../assets/projects/badges/js.png'
import mongoIcon from '../../assets/projects/badges/mongo.png'
import railsIcon from '../../assets/projects/badges/rubyonrails.png'
import reactIcon from '../../assets/projects/badges/react.png'
import reduxIcon from '../../assets/projects/badges/redux.png'
import sassIcon from '../../assets/projects/badges/sass.png'
import sketchIcon from '../../assets/projects/badges/sketch.png'
import styledComponents from '../../assets/projects/badges/styled-components.png'
import webpackIcon from '../../assets/projects/badges/webpack.png'
import wordpressIcon from '../../assets/projects/badges/wordpress.png'

const renderBadges = ({badges, size}) => {
  return badges.map(badge => {
    switch (badge) {
      case 'bootstrap':
        return <Badge key={`${badge}`} style={{height: size || 36, width: size || 36}} src={bootstrapIcon}></Badge>
      case 'css':
        return <Badge key={`${badge}`} style={{height: size || 36, width: size || 36}} src={cssIcon}></Badge>
      case 'expo':
        return <Badge key={`${badge}`} style={{height: size || 36, width: size || 36}} src={expoIcon}></Badge>
      case 'gulp':
        return <Badge key={`${badge}`} style={{height: size || 36, width: size || 36}} src={gulpIcon}></Badge>
      case 'html':
        return <Badge key={`${badge}`} style={{height: size || 36, width: size || 36}} src={htmlIcon}></Badge>
      case 'jquery':
        return <Badge key={`${badge}`} style={{height: size || 36, width: size || 36}} src={jqueryIcon}></Badge>
      case 'js':
        return <Badge key={`${badge}`} style={{height: size || 36, width: size || 36}} src={jsIcon}></Badge>
      case 'mongo':
        return <Badge key={`${badge}`} style={{height: size || 36, width: size || 36}} src={mongoIcon}></Badge>
      case 'rails':
        return <Badge key={`${badge}`} style={{height: size || 36, width: size || 36}} src={railsIcon}></Badge>
      case 'react':
        return <Badge key={`${badge}`} style={{height: size || 36, width: size || 36}} src={reactIcon}></Badge>
      case 'redux':
        return <Badge key={`${badge}`} style={{height: size || 36, width: size || 36}} src={reduxIcon}></Badge>
      case 'sass':
        return <Badge key={`${badge}`} style={{height: size || 36, width: size || 36}} src={sassIcon}></Badge>
      case 'sketch':
        return <Badge key={`${badge}`} style={{height: size || 36, width: size || 36}} src={sketchIcon}></Badge>
      case 'styled-components':
        return <Badge key={`${badge}`} style={{height: size || 36, width: size || 36}} src={styledComponents}></Badge>
      case 'webpack':
        return <Badge key={`${badge}`} style={{height: size || 36, width: size || 36}} src={webpackIcon}></Badge>
      case 'wordpress':
        return <Badge key={`${badge}`} style={{height: size || 36, width: size || 36}} src={wordpressIcon}></Badge>
      default:
        return null
    }
  })
}

const ProjectBadges = ({badges, size}) => (
  <Wrapper>
    { renderBadges({badges, size}) }
  </Wrapper>
)

export default ProjectBadges

const Wrapper = styled.div`
  text-align: center;
`

const Badge = styled.img`
  height: 36px;
  width: 36px;
  margin: 12px 4px 8px;
`
