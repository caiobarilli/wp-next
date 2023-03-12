import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
`

export const Content = styled.div`
  flex: 1 0 auto;
`

export const Footer = styled.footer`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
    background-color: ${theme.colors.primary};
  `}
`
