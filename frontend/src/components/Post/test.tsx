import { PostFragmentFragment } from 'graphql/generated/graphql'
import { renderWithTheme } from 'utils/tests/helpers'

import Post from '.'

const post: PostFragmentFragment = {
  id: 'TesteID_123',
  title: 'Teste'
}

describe('<Post />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Post post={post} />)
  })
})
