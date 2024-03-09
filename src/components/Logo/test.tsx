import { render, screen } from '@testing-library/react'
import 'jest-styled-components'

import Logo from '.'

describe('<Logo />', () => {
  it('should render the small logo by default', () => {
    render(<Logo />)

    expect(screen.getByLabelText(/Travel Ease/i).parentElement).toHaveStyle({
      width: '12rem'
    })
  })

  it('should render the regular logo by default on desktop', () => {
    render(<Logo />)

    expect(screen.getByLabelText(/Travel Ease/i).parentElement).toHaveStyleRule(
      'width',
      '20rem',
      {
        media: '(min-width:  768px)'
      }
    )
  })

  it('should render the larger logo when prop is set', () => {
    render(<Logo $size="large" />)

    const logo = screen.getByLabelText(/Travel Ease/i).parentElement

    expect(logo).toHaveStyle({
      width: '20rem'
    })

    expect(logo).toHaveStyleRule('width', '30rem', {
      media: '(min-width:  768px)'
    })
  })
})
