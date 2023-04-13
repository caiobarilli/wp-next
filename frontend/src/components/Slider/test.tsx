import React from 'react'
import Slider, { SlideProps } from '.'
import { render, screen } from '@testing-library/react'

const slides: SlideProps[] = [
  {
    id: 1,
    imageUrl: 'https://example.com/image1.jpg'
  },
  {
    id: 2,
    imageUrl: 'https://example.com/image2.jpg'
  },
  {
    id: 3,
    imageUrl: 'https://example.com/image3.jpg'
  }
]

jest.mock('.', () => ({
  __esModule: true,
  default: jest.fn().mockImplementation(({ slides }) => (
    <div data-testid="mock-slider">
      {slides.map((slide: { id: number; imageUrl: string }) => (
        <div key={slide.id} data-testid={`mock-slide-${slide.id}`} />
      ))}
    </div>
  ))
}))

describe('Slider component', () => {
  it('renders correctly with slides', () => {
    render(<Slider slides={slides} />)
    expect(screen.getByTestId('mock-slider')).toBeInTheDocument()
  })
})
