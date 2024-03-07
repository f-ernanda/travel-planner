import { screen } from '@testing-library/react'

import { renderWithTheme } from '../../utils/test-utils'
import Button from '.'

describe('<Button />', () => {
  it('should render the styled button', () => {
    renderWithTheme(<Button>View details</Button>)

    expect(screen.getByRole('button', { name: /View details/i })).toHaveStyle({
      background: '#0D8C84',
      borderRadius: '0.4rem',
      padding: '0.8rem 3.2rem'
    })
  })
})
