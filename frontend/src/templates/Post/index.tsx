import Base from 'templates/Base'
import { Container } from 'components/Container'
import * as S from './styles'
import { PostProps } from 'components/Post'

export type SinglePostProps = {
  postBy: PostProps
}

const Post = ({ postBy }: SinglePostProps) => {
  console.log(postBy)
  return (
    <Base>
      <S.Wrapper>
        <Container>
          <h1>{postBy.title}</h1>
        </Container>
      </S.Wrapper>
    </Base>
  )
}

export default Post
