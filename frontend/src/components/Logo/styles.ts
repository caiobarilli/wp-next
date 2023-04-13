import styled, { css } from 'styled-components'

import { LogoProps } from '.'

export const Wrapper = styled.div<Pick<LogoProps, 'small'>>`
  ${({ small }) => css`
    img {
      ${small
        ? css`
            max-width: 4.8rem !important;
          `
        : css`
            max-width: 9.6rem !important;
          `}
    }
  `}
`
