import Image from 'next/image'
import Link from 'next/link'
import { forwardRef, useContext } from 'react'
import { Context } from 'utils/context'
import * as S from './styles'

type PostsProps = {
  post: PostProps
}

export type PostProps = {
  id: string
  title: string
  content: string
  date: string
  slug: string
  excerpt: string
  featuredImageUrl: string | undefined
}

const Post: React.ForwardRefRenderFunction<HTMLDivElement, PostsProps> = (
  { post },
  ref
) => {
  const { isDarkTheme } = useContext(Context)
  const featuredImage =
    post.featuredImageUrl !== undefined ? post.featuredImageUrl : ''

  return (
    <S.Wrapper darkTheme={isDarkTheme} ref={ref}>
      <S.WrapperContent>
        <Link href={`post/${post.slug}`}>
          {featuredImage ? (
            <Image
              src={featuredImage}
              alt={post.title}
              width={400}
              height={300}
            />
          ) : (
            <svg
              width="400"
              height="300"
              role="img"
              aria-label="Placeholder"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#868e96"></rect>
            </svg>
          )}
        </Link>

        <S.Title>{post.title}</S.Title>
        <S.Date>{post.date}</S.Date>
        <S.Content dangerouslySetInnerHTML={{ __html: post.excerpt ?? '' }} />
        <Link href={`post/${post.slug}`}>Ver Post</Link>
      </S.WrapperContent>
    </S.Wrapper>
  )
}

export default forwardRef(Post)
