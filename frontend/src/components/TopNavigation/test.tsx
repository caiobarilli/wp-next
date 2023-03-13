import { renderWithTheme } from 'utils/tests/helpers'

import TopNavigation from '.'

describe('<TopNavigation />', () => {
  it('should render the heading', () => {
    renderWithTheme(<TopNavigation />)
  })
})
