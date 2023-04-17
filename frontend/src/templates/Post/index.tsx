import Base from 'templates/Base'
import { Container } from 'components/Container'
import * as S from './styles'
import Image from 'next/image'
import { Calendar } from '@styled-icons/boxicons-regular/Calendar'

export type SinglePostProps = {
  post: SinglePost
}

type SinglePost = {
  id: string
  title: string
  content: string
  date: string
  slug: string
  excerpt: string
  featuredImageUrl: string | undefined
  avatarName: string
  avatarImageUrl: string | undefined
}

const SinglePost = ({ post }: SinglePostProps) => {
  const featuredImage =
    post.featuredImageUrl !== undefined ? post.featuredImageUrl : ''
  const avatarImage =
    post.avatarImageUrl !== undefined ? post.avatarImageUrl : ''

  return (
    <Base>
      {featuredImage && (
        <S.FeaturedImage>
          <Image
            src={featuredImage}
            alt={post.title}
            width={1920}
            height={1080}
          />
        </S.FeaturedImage>
      )}

      <S.Wrapper>
        <Container>
          <S.Title> {post.title} </S.Title>
          <S.PostWrapper>
            <S.PostInfo>
              <S.PostDate>
                <Calendar />
                {post.date}
              </S.PostDate>
              {avatarImage && (
                <S.PostAuthor>
                  <Image
                    src={avatarImage}
                    alt={post.avatarName}
                    width={40}
                    height={40}
                  />
                </S.PostAuthor>
              )}
            </S.PostInfo>
            <S.PostContent dangerouslySetInnerHTML={{ __html: post.content }} />
          </S.PostWrapper>
        </Container>
      </S.Wrapper>
    </Base>
  )
}

export default SinglePost
