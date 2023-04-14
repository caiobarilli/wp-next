import styled, { css } from 'styled-components'

type WrapperProps = {
  small?: boolean
  darkTheme: boolean
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, small, darkTheme }) => css`
    a {
      color: ${darkTheme ? theme.colors.white : theme.colors.black};

      ${small &&
      css`
        svg {
          width: 3rem;
          height: 3rem;
        }
      `}
    }
  `}
`
