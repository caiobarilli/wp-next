import { renderWithTheme } from 'utils/tests/helpers'

import Post, { PostProps } from '.'

const post: PostProps = {
  id: 'TesteID_123',
  title: 'Teste',
  content: 'Teste',
  date: '2021-01-01',
  slug: 'Teste',
  excerpt: 'Teste',
  featuredImageUrl: undefined
}

describe('<Post />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Post post={post} />)
  })
})
