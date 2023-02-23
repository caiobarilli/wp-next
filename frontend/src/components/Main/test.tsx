import { render, screen } from '@testing-library/react'
import Main from '@/components/Main'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Main />)

    const heading = screen.getByRole('heading', {
      name: /next boilerplate/i
    })

    expect(heading).toBeInTheDocument()
    expect(heading).toHaveStyleRule('margin', '0')
    expect(heading).toMatchSnapshot()
  })
})
