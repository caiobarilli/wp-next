import Home, { HomeProps } from 'templates/Home'
import { initializeApollo } from 'utils/apollo'
import { QUERY_POSTS } from 'graphql/queries/posts'
import {
  GetPostsQuery,
  GetPostsQueryVariables,
  Post
} from 'graphql/generated/graphql'
import { postsMapper } from 'utils/mapper'

export default function Index(props: HomeProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const {
    data: { posts }
  } = await apolloClient.query<GetPostsQuery, GetPostsQueryVariables>({
    query: QUERY_POSTS,
    variables: {
      first: 3
    },
    fetchPolicy: 'no-cache'
  })

  return {
    revalidate: 10,
    props: {
      posts: postsMapper(posts?.nodes as Post[])
    }
  }
}
