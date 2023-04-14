import { gql } from '@apollo/client'

export const PostContent = gql`
  fragment PostContent on Post {
    id
    title
    content
    date
    slug
    excerpt
    featuredImage {
      node {
        sourceUrl
      }
    }
    author {
      node {
        avatar {
          url
        }
        name
        email
      }
    }
  }
`
