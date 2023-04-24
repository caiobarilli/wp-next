import Base from 'templates/Base'
import Post, { PostProps } from 'components/Post'
import { Container } from 'components/Container'
import * as S from './styles'

import { ThemeMod } from 'graphql/generated/graphql'

export type HomeProps = {
  posts: PostProps[]
  themeMod?: ThemeMod
}

const Home = ({ posts, themeMod }: HomeProps) => {
  console.log(themeMod)

  return (
    <Base>
      <S.Wrapper>
        <Container>
          <S.PostWrapper>
            {posts &&
              posts?.map((post) => {
                return <Post post={post} key={post.id} />
              })}
          </S.PostWrapper>
        </Container>
      </S.Wrapper>
    </Base>
  )
}

export default Home
