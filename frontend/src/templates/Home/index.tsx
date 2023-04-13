import Slider, { SlideProps } from 'components/Slider'
import { Container } from 'components/Container'
import Base from 'templates/Base'
import * as S from './styles'

const slides: SlideProps[] = [
  {
    id: 1,
    imageUrl: 'https://picsum.photos/1080'
  },
  {
    id: 2,
    imageUrl: 'https://picsum.photos/1080'
  },
  {
    id: 3,
    imageUrl: 'https://picsum.photos/1080'
  }
]

const Home = () => {
  return (
    <Base>
      <S.Wrapper>
        <Container>
          <Slider slides={slides} />
        </Container>
      </S.Wrapper>
    </Base>
  )
}

export default Home
