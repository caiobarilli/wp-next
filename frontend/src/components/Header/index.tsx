import Logo from 'components/Logo'
import Menu from 'components/Menu'
import TopNavigation from 'components/TopNavigation'
import { Container } from 'components/Container'
import * as S from './styles'

const Header = () => (
  <S.Header>
    <Container larger>
      <S.HeaderWrapper>
        <TopNavigation />
        <Logo />
        <Menu />
      </S.HeaderWrapper>
    </Container>
  </S.Header>
)

export default Header
