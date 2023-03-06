import * as S from './styles'
import React, { useContext } from 'react'
import { Context } from 'utils/context'

const Menu = () => {
  const { toggleTheme } = useContext(Context)

  return (
    <S.Wrapper>
      <h1>Menu</h1>
      <button onClick={toggleTheme}>Alternar tema</button>
    </S.Wrapper>
  )
}

export default Menu
