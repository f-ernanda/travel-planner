import { render, screen } from '@testing-library/react'
import 'jest-styled-components'

import Logo from '.'

describe('<Logo />', () => {
  it('should render a small logo by default', () => {
    render(<Logo />)

    expect(screen.getByLabelText(/Travel Ease/i).parentElement).toHaveStyle({
      width: '8rem'
    })
  })

  it('should render a regular logo by default on desktop', () => {
    render(<Logo />)

    expect(screen.getByLabelText(/Travel Ease/i).parentElement).toHaveStyleRule(
      'width',
      '10rem',
      {
        media: '(min-width:  768px)'
      }
    )
  })

  it('should render a larger logo when prop is set', () => {
    render(<Logo $size="large" />)

    const logo = screen.getByLabelText(/Travel Ease/i).parentElement

    expect(logo).toHaveStyle({
      width: '12rem'
    })

    expect(logo).toHaveStyleRule('width', '20rem', {
      media: '(min-width:  768px)'
    })
  })
})
