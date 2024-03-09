import { render, screen } from '@testing-library/react'
import 'jest-styled-components'

import LogoIcon from '.'

describe('<LogoIcon />', () => {
  it('should render the small logo icon by default', () => {
    render(<LogoIcon />)

    expect(screen.getByLabelText(/Travel Ease/i).parentElement).toHaveStyle({
      width: '6rem'
    })
  })

  it('should render the regular logo icon by default on desktop', () => {
    render(<LogoIcon />)

    expect(screen.getByLabelText(/Travel Ease/i).parentElement).toHaveStyleRule(
      'width',
      '10rem',
      {
        media: '(min-width:  768px)'
      }
    )
  })

  it('should render the larger logo icon when prop is set', () => {
    render(<LogoIcon $size="large" />)

    const logoIcon = screen.getByLabelText(/Travel Ease/i).parentElement

    expect(logoIcon).toHaveStyle({
      width: '12rem'
    })

    expect(logoIcon).toHaveStyleRule('width', '20rem', {
      media: '(min-width:  768px)'
    })
  })
})
