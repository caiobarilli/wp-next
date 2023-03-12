import Logo from 'components/Logo'
import Menu from 'components/Menu'
import TopNavigation from 'components/TopNavigation'
import Footer from 'components/Footer'

import { Container } from 'components/Container'

import * as S from './styles'

export type BaseProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseProps) => {
  return (
    <S.Wrapper>
      <Container larger>
        <S.Header>
          <TopNavigation />
          <Logo />
          <Menu />
        </S.Header>
      </Container>

      <S.Content>{children}</S.Content>

      <Footer />
    </S.Wrapper>
  )
}

export default Base
