import * as S from './styles'
import { useContext } from 'react'
import { Context } from 'utils/context'
import Button from 'components/Button'

import { LightMode, NightlightRound } from '@styled-icons/material-outlined'

const TopNavigation = () => {
  const { toggleTheme, isDarkTheme } = useContext(Context)
  return (
    <S.Wrapper>
      <ul>
        <li>
          <Button
            size="small"
            icon={isDarkTheme ? <LightMode /> : <NightlightRound />}
            minimal={true}
            onClick={toggleTheme}
          >
            {isDarkTheme ? 'Light Mode' : 'Dark Mode'}
          </Button>
        </li>
      </ul>
    </S.Wrapper>
  )
}

export default TopNavigation
