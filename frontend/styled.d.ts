/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components'

type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends FrontendTheme {}

  export interface FrontendTheme {
    grid: {
      container: string
      containerLarge: string
      gutter: string
    }

    border: {
      radius: string
    }

    font: {
      family: string
      light: number
      normal: number
      bold: number
      sizes: {
        xsmall: string
        small: string
        medium: string
        large: string
        xlarge: string
        xxlarge: string
        xxxlarge: string
      }
    }

    colors: {
      white: string
      black: string
      defaultText: string
      defaultBackground: string
      colorVariation1: string
      backgroundVariation1: string
    }

    spacings: {
      xxsmall: string
      xsmall: string
      small: string
      medium: string
      large: string
      xlarge: string
      xxlarge: string
    }

    layers: {
      base: number
      menu: number
      overlay: number
      modal: number
      alwaysOnTop: number
    }
  }
}
