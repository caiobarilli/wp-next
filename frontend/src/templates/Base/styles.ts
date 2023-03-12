import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`

export const Content = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xsmall};
    flex: 1 0 auto;
  `}
`

export const SectionFooter = styled.section`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.large};
    padding-bottom: ${theme.spacings.xsmall};
    padding-top: ${theme.spacings.xxlarge};
    color: ${theme.colors.secondary};
    background-color: ${theme.colors.primary};
  `}
`
