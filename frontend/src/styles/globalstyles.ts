import {
  createGlobalStyle,
  css,
  DefaultTheme,
  FrontendTheme,
  GlobalStyleComponent
} from 'styled-components'

export type GlobalStylesProps = {
  theme: FrontendTheme
}

const GlobalStyles: GlobalStyleComponent<
  GlobalStylesProps,
  DefaultTheme
> = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    &::after, &::before {
      box-sizing: inherit;
    }
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      background-color: ${theme.colors.primary};
      color: ${theme.colors.secondary};
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
    }

    P {
      margin: 0;
    }
  `}
`

export default GlobalStyles
