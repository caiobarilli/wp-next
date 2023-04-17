import styled, { css } from 'styled-components'

export const Footer = styled.footer`
  ${({ theme }) => css`
    padding: 1.5rem 0;
    background: ${theme.colors.backgroundVariation1};
    z-index: ${theme.layers.base};
  `}
`

export const WrapperFooter = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
`

export const Copyright = styled.p`
  ${({ theme }) => css`
    text-transform: uppercase;
    text-align: center;
    padding: 0.5rem 0;
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.defaultBackground};
  `}
`
