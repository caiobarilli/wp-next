import { render } from '@testing-library/react'

import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'

const customRender = ({ ...renderOptions } = {}) =>
  render(<ThemeProvider theme={theme}></ThemeProvider>, renderOptions)

export * from '@testing-library/react'
export { customRender as render }
