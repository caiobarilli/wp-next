export default {
  grid: {
    container: '130rem',
    containerLarge: '150rem',
    gutter: '3.2rem'
  },
  border: {
    radius: '0.4rem'
  },
  font: {
    family:
      "Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    bold: 600,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem',
      xxxlarge: '5.5rem'
    }
  },
  colors: {
    white: '#F4F4F4',
    black: '#444251',
    defaultText: '#444251',
    defaultBackground: '#F4F4F4',
    colorVariation1: '#E0E0E0',
    backgroundVariation1: '#CDD5DC'
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  layers: {
    zero: 0,
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  }
} as const
