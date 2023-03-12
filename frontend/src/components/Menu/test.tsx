import { renderWithTheme } from 'utils/tests/helpers'
import { screen } from '@testing-library/react'
import Menu from '.'

it('should render the menu', () => {
  renderWithTheme(<Menu />)

  expect(screen.getByText(/Home/i)).toBeInTheDocument()
})
