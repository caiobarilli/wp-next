import styled, { css } from 'styled-components'

type WrapperProps = {
  darkTheme: boolean
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, darkTheme }) => css`
    max-width: 40rem;
    color: ${theme.colors.black};
    border: 0.1rem solid;
    border-color: ${theme.colors.backgroundVariation1};
    background-color: ${darkTheme
      ? theme.colors.backgroundVariation1
      : theme.colors.white};
    border-radius: 0.6rem;
    overflow: hidden;
  `}
`

export const WrapperContent = styled.div`
  padding: 0;
`

export const Title = styled.h3`
  padding: 0;
`

export const Date = styled.span`
  padding: 0;
`

export const Content = styled.div`
  padding: 0;
`
