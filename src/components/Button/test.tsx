import { render, screen } from '@testing-library/react'

import Button from '.'

describe('<Button />', () => {
  it('should render the styled button', () => {
    render(<Button>View details</Button>)

    expect(screen.getByRole('button', { name: /View details/i })).toHaveStyle({
      border: '0',
      height: '4rem',
      padding: '0.8rem'
    })
  })
})
