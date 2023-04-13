import Logo from 'components/Logo'
import { Container } from 'components/Container'
import FooterNavigation from 'components/FooterNavigation'
import * as S from './styles'

const Footer = () => (
  <S.Footer>
    <Container>
      <S.WrapperFooter>
        <Logo small />
        <FooterNavigation />
      </S.WrapperFooter>
    </Container>
    <Container larger>
      <S.Copyright>
        © Next Boilerplate - Todos os direitos reservados
      </S.Copyright>
    </Container>
  </S.Footer>
)

export default Footer
