import React from 'react'
import { Link } from 'react-router-dom'
import colors from '../colors'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { postData } from './Posts/_PostData'


const renderPosts = () => {
  return postData.map(post => {
    return (
      <PostEntry key={post.slug}>
        <Title to={`/posts/${post.slug}`}>
          {post.title}
        </Title>
        <PostDate>{post.date}</PostDate>


      </PostEntry>
    )
  })
}

const PostsPage = () => (
  <PageWrapper>
    <Helmet title="Posts: Mark Adam Foster" />
    <h1>Posts</h1>
    {renderPosts()}
  </PageWrapper>
)

export default PostsPage

const PageWrapper = styled.div`
  width: 600px;
  max-width: 96%;
  margin: 0 auto;
`
const PostEntry = styled.div``

const Title = styled(Link)`
  font-size: 32px;
  font-weight: 600;
  margin-right: 10px;
  text-decoration: none;
  color: ${colors.dkBlue};
  &:visited {
    color: ${colors.dkBlue};
  }
  &:hover {
    color: ${colors.orange};
  }
`
const PostDate = styled.span`
  font-size: 14px;
`
