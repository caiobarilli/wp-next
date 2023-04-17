import {
  GetAllPostsSlugQuery,
  GetPostBySlugQuery,
  GetPostBySlugQueryVariables
} from 'graphql/generated/graphql'
import {
  QUERY_ALL_POSTS_SLUGS,
  QUERY_POST_BY_SLUG
} from 'graphql/queries/posts'
import { initializeApollo } from 'utils/apollo'
import SinglePost, { SinglePostProps } from 'templates/Post'
import { GetStaticProps } from 'next'
import { postMapper } from 'utils/mapper'
import { Post } from 'graphql/generated/graphql'

const apolloClient = initializeApollo()

export default function Index(props: SinglePostProps) {
  return <SinglePost {...props} />
}

export const getStaticPaths = async () => {
  const {
    data: { posts }
  } = await apolloClient.query<GetAllPostsSlugQuery>({
    query: QUERY_ALL_POSTS_SLUGS
  })

  const paths = posts?.nodes.map((post) => ({ params: { slug: post.slug } }))

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const {
    data: { postBy }
  } = await apolloClient.query<GetPostBySlugQuery, GetPostBySlugQueryVariables>(
    {
      query: QUERY_POST_BY_SLUG,
      variables: { slug: `${params?.slug}` }
    }
  )

  return {
    revalidate: 60,
    props: {
      post: postMapper(postBy as Post)
    }
  }
}
