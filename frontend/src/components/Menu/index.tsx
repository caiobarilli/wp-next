import Link from 'next/link'
import * as S from './styles'

const Menu = () => {
  return (
    <S.Wrapper>
      <S.listWrapper>
        <S.MenuItem>
          <Link href="/">Home</Link>
        </S.MenuItem>
      </S.listWrapper>
    </S.Wrapper>
  )
}

export default Menu
