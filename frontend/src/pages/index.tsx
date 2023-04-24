import Home, { HomeProps } from 'templates/Home'
import { initializeApollo } from 'utils/apollo'
import { QUERY_HOME } from 'graphql/queries/home'
import {
  HomeQuery,
  HomeQueryVariables,
  Post,
  ThemeMod
} from 'graphql/generated/graphql'
import { postsMapper } from 'utils/mapper'

export default function Index(props: HomeProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const {
    data: { posts, themeMod }
  } = await apolloClient.query<HomeQuery, HomeQueryVariables>({
    query: QUERY_HOME,
    variables: {
      first: 3
    },
    fetchPolicy: 'no-cache'
  })

  return {
    revalidate: 10,
    props: {
      themeMod: themeMod as ThemeMod,
      posts: postsMapper(posts?.nodes as Post[])
    }
  }
}
