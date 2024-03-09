import { screen } from '@testing-library/react'
import 'jest-styled-components'

import { renderWithTheme } from '@/utils/test-utils'
import Heading from '.'

describe('<Heading />', () => {
  it('should render the heading correctly', () => {
    renderWithTheme(<Heading>Travel Ease</Heading>)

    expect(
      screen.getByRole('heading', { name: /Travel Ease/i })
    ).toBeInTheDocument()
  })

  it('should render the heading with a horizontal line when prop is set', () => {
    renderWithTheme(<Heading $withHorizontalLine>Travel Ease</Heading>)
    expect(
      screen.getByRole('heading', { name: /Travel Ease/i })
    ).toHaveStyleRule('border-bottom', '0.4rem solid #0D8C84', {
      modifier: '::after'
    })
  })

  it('should render the heading with a vertical line when prop is set', () => {
    renderWithTheme(<Heading $withVerticalLine>Travel Ease</Heading>)
    expect(screen.getByRole('heading', { name: /Travel Ease/i })).toHaveStyle({
      'border-left': '0.4rem solid #0D8C84'
    })
  })
})
