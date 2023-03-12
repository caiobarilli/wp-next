import * as S from './styles'
import { useContext } from 'react'
import { Context } from 'utils/context'
import Button from 'components/Button'

const TopNavigation = () => {
  const { toggleTheme } = useContext(Context)
  return (
    <S.Wrapper>
      <Button size="small" minimal={true} onClick={toggleTheme}>
        Mudar tema
      </Button>
    </S.Wrapper>
  )
}

export default TopNavigation
