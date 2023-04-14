import { renderWithTheme } from 'utils/tests/helpers'

import Posts from '.'

describe('<Posts />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Posts />)
  })
})
