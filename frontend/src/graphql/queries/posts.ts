import { gql } from '@apollo/client'

import { PostContent } from 'graphql/fragments/post'

export const QUERY_POST_BY_SLUG = gql`
  query GetPostBySlug($slug: String!) {
    postBy(slug: $slug) {
      ...PostContent
    }
  }
  ${PostContent}
`

export const QUERY_POSTS = gql`
  query GetPosts($first: Int!) {
    posts(first: $first) {
      nodes {
        ...PostContent
      }
    }
  }
  ${PostContent}
`

export const QUERY_ALL_POSTS_SLUGS = gql`
  query GetAllPostsSlug {
    posts {
      nodes {
        slug
      }
    }
  }
`
