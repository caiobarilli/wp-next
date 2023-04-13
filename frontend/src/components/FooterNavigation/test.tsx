import { renderWithTheme } from 'utils/tests/helpers'

import FooterNavigation from '.'

describe('<FooterNavigation />', () => {
  it('should render the heading', () => {
    renderWithTheme(<FooterNavigation />)
  })
})
