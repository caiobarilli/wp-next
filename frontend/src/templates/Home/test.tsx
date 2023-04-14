import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Home, { Post } from '.'

const posts: Post[] = [
  {
    id: '231231',
    title: 'sdasd'
  }
]

jest.mock('components/Menu', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Menu"></div>
    }
  }
})

jest.mock('components/Footer', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Footer"></div>
    }
  }
})

jest.mock('components/Slider', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Slider"></div>
    }
  }
})

describe('<Home />', () => {
  it('should render the menu and footer', () => {
    renderWithTheme(<Home posts={posts} />)

    expect(screen.getByTestId('Mock Menu')).toBeInTheDocument()
    expect(screen.getByTestId('Mock Footer')).toBeInTheDocument()
  })
})
