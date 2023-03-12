import Link from 'next/link'
import * as S from './styles'

const Menu = () => {
  return (
    <S.Wrapper>
      <S.MenuContainer>
        <S.MenuItem>
          <Link href="/">Home</Link>
        </S.MenuItem>
      </S.MenuContainer>
    </S.Wrapper>
  )
}

export default Menu
