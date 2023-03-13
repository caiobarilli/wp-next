import Header from 'components/Header'
import Footer from 'components/Footer'

import * as S from './styles'

export type BaseProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseProps) => {
  return (
    <S.Wrapper>
      <Header />

      <S.Content>{children}</S.Content>

      <Footer />
    </S.Wrapper>
  )
}

export default Base
