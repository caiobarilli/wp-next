import Base from 'templates/Base'
import { Container } from 'components/Container'
import * as S from './styles'
import Image from 'next/image'
import { Calendar } from '@styled-icons/boxicons-regular/Calendar'

export type SinglePostProps = {
  post: SingPostProps
}

export type SingPostProps = {
  id: string
  title: string
  content: string
  date: string
  slug: string
  excerpt: string
  featuredImageUrl: string
  avatarName: string
  avatarImageUrl: string
}

const SinglePost = ({ post }: SinglePostProps) => {
  console.log(post)

  return (
    <Base>
      <S.Wrapper>
        <Container>
          <S.Title> {post.title} </S.Title>
          <S.PostWrapper>
            <S.PostInfo>
              <S.PostDate>
                <Calendar />
                {post.date}
              </S.PostDate>
              <S.PostAuthor>
                <Image
                  src={post.avatarImageUrl}
                  alt={post.avatarName}
                  width={40}
                  height={40}
                />
              </S.PostAuthor>
            </S.PostInfo>
            <S.PostContent dangerouslySetInnerHTML={{ __html: post.content }} />
          </S.PostWrapper>
        </Container>
      </S.Wrapper>
    </Base>
  )
}

export default SinglePost
