import { gql } from '@apollo/client'

import { PostContent } from 'graphql/fragments/post'

export const QUERY_HOME = gql`
  query Home($first: Int!) {
    themeMod {
      logo_url
      page_description
      page_title
    }
    posts(first: $first) {
      nodes {
        ...PostContent
      }
    }
  }
  ${PostContent}
`
