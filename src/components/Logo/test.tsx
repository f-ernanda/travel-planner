import { render, screen } from '@testing-library/react'
import 'jest-styled-components'

import Logo from '.'

describe('<Logo />', () => {
  it('should render a normal logo by default', () => {
    render(<Logo />)

    expect(screen.getByLabelText(/Travel Ease/i).parentElement).toHaveStyle({
      width: '10rem'
    })
  })

  it('should render a larger logo', () => {
    render(<Logo size="large" />)

    expect(screen.getByLabelText(/Travel Ease/i).parentElement).toHaveStyle({
      width: '20rem'
    })
  })

  // it('should render a smaller logo on mobile', () => {
  //   render(<Logo />)

  //   expect(screen.getByLabelText(/Travel Ease/i).parentElement).toHaveStyleRule(
  //     'width',
  //     '8rem',
  //     {
  //       media: '(max-width: 768px)'
  //     }
  //   )
  // })
})
