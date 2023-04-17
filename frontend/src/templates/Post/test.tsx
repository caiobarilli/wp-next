import { renderWithTheme } from 'utils/tests/helpers'

import SinglePost, { SinglePostProps } from '.'

const single: SinglePostProps = {
  post: {
    id: 'TesteID_123',
    title: 'Teste',
    content: 'Teste',
    date: '2021-01-01',
    slug: 'Teste',
    excerpt: 'Teste',
    avatarName: 'Teste',
    featuredImageUrl: undefined,
    avatarImageUrl: undefined
  }
}

describe('<Posts />', () => {
  it('should render the heading', () => {
    renderWithTheme(<SinglePost post={single.post} />)
  })
})
