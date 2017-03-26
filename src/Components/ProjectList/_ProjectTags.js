import React from 'react'
import styled from 'styled-components'

// Project badge icons
import bootstrapIcon from '../../assets/projects/badges/bootstrap.png'
import cssIcon from '../../assets/projects/badges/css3.png'
import gulpIcon from '../../assets/projects/badges/gulp.png'
import htmlIcon from '../../assets/projects/badges/html5.png'
import jqueryIcon from '../../assets/projects/badges/jquery.png'
import jsIcon from '../../assets/projects/badges/js.png'
import mongoIcon from '../../assets/projects/badges/mongo.png'
import railsIcon from '../../assets/projects/badges/rubyonrails.png'
import reactIcon from '../../assets/projects/badges/react.png'
import reduxIcon from '../../assets/projects/badges/redux.png'
import sassIcon from '../../assets/projects/badges/sass.png'
import webpackIcon from '../../assets/projects/badges/webpack.png'
import wordpressIcon from '../../assets/projects/badges/wordpress.png'

const renderTags = ({tags, size}) => {
  return tags.map(tag => {
    switch (tag) {
      case 'bootstrap':
        return <Tag key={`${tag}`} style={{height: size || 36, width: size || 36}} src={bootstrapIcon}></Tag>
      case 'css':
        return <Tag key={`${tag}`} style={{height: size || 36, width: size || 36}} src={cssIcon}></Tag>
      case 'gulp':
        return <Tag key={`${tag}`} style={{height: size || 36, width: size || 36}} src={gulpIcon}></Tag>
      case 'html':
        return <Tag key={`${tag}`} style={{height: size || 36, width: size || 36}} src={htmlIcon}></Tag>
      case 'jquery':
        return <Tag key={`${tag}`} style={{height: size || 36, width: size || 36}} src={jqueryIcon}></Tag>
      case 'js':
        return <Tag key={`${tag}`} style={{height: size || 36, width: size || 36}} src={jsIcon}></Tag>
      case 'mongo':
        return <Tag key={`${tag}`} style={{height: size || 36, width: size || 36}} src={mongoIcon}></Tag>
      case 'rails':
        return <Tag key={`${tag}`} style={{height: size || 36, width: size || 36}} src={railsIcon}></Tag>
      case 'react':
        return <Tag key={`${tag}`} style={{height: size || 36, width: size || 36}} src={reactIcon}></Tag>
      case 'redux':
        return <Tag key={`${tag}`} style={{height: size || 36, width: size || 36}} src={reduxIcon}></Tag>
      case 'sass':
        return <Tag key={`${tag}`} style={{height: size || 36, width: size || 36}} src={sassIcon}></Tag>
      case 'webpack':
        return <Tag key={`${tag}`} style={{height: size || 36, width: size || 36}} src={webpackIcon}></Tag>
      case 'wordpress':
        return <Tag key={`${tag}`} style={{height: size || 36, width: size || 36}} src={wordpressIcon}></Tag>
      default:
        return null
    }
  })
}

const ProjectTags = ({tags, size}) => (
  <Wrapper>
    { renderTags({tags, size}) }
  </Wrapper>
)

export default ProjectTags

const Wrapper = styled.div`
  text-align: center;
`

const Tag = styled.img`
  height: 36px;
  width: 36px;
  margin: 12px 4px 8px;
`
