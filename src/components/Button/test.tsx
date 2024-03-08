import { screen } from '@testing-library/react'

import { renderWithTheme } from '../../utils/test-utils'
import Button from '.'

describe('<Button />', () => {
  it('should render the styled button by default', () => {
    renderWithTheme(<Button>View details</Button>)

    expect(screen.getByRole('button', { name: /View details/i })).toHaveStyle({
      background: '#0D8C84',
      color: '#DAE4E4'
    })
  })

  it('should render the full width button when prop is set', () => {
    renderWithTheme(<Button $fullWidth>View details</Button>)

    expect(screen.getByRole('button', { name: /View details/i })).toHaveStyle({
      width: '100%'
    })
  })
})
