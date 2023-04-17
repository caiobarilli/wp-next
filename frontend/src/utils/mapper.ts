import { Post } from 'graphql/generated/graphql'
import { formatDate } from 'utils'

export const postsMapper = (posts: Post[]) => {
  return posts?.map((post: Post) => ({
    id: post.id ?? '',
    title: post.title ?? '',
    content: post.content ?? '',
    date: formatDate(post.date) ?? '',
    slug: post.slug ?? '',
    excerpt: post.excerpt ?? '',
    featuredImageUrl: post.featuredImage?.node.sourceUrl ?? '',
    avatarImageUrl: post.author?.node.avatar?.url ?? ''
  }))
}

export const postMapper = (post: Post) => {
  return {
    id: post.id ?? '',
    title: post.title ?? '',
    content: post.content ?? '',
    date: formatDate(post.date) ?? '',
    slug: post.slug ?? '',
    excerpt: post.excerpt ?? '',
    featuredImageUrl: post.featuredImage?.node.sourceUrl ?? '',
    avatarName: post.author?.node.name ?? '',
    avatarImageUrl: post.author?.node.avatar?.url ?? ''
  }
}
