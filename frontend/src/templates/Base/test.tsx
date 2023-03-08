import { render } from 'utils/test-utils'

import Base from '.'

describe('<Base />', () => {
  it('should render menu, footer and children', () => {
    render(
      <Base>
        <h1>Heading</h1>
      </Base>
    )
  })
})
