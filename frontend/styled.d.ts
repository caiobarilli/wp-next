// import original module declarations
import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
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
      primary: string
      secondary: string
      mainBg: string
      lightBg: string
      white: string
      black: string
      lightGray: string
      gray: string
      darkGray: string
      red: string
    }

    colors: {
      primary: string
      secondary: string
      mainBg: string
      lightBg: string
      white: string
      black: string
      lightGray: string
      gray: string
      darkGray: string
      red: string
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
