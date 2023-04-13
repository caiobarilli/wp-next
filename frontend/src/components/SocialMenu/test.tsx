import { renderWithTheme } from 'utils/tests/helpers'

import SocialMenu from '.'

describe('<SocialMenu />', () => {
  it('should render the heading', () => {
    renderWithTheme(<SocialMenu />)
  })
})
