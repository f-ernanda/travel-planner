import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { renderWithTheme } from '@/utils/test-utils'
import Button from '.'

describe('<Button />', () => {
  it('should render the styled button by default', async () => {
    renderWithTheme(<Button>View details</Button>)

    const button = screen.getByRole('button', { name: /View details/i })
    const user = userEvent.setup()

    //using toHaveStyleRule here because:
    //https://github.com/jsdom/jsdom/issues/3607
    expect(button).toHaveStyleRule('background', '#0D8C84')

    await user.hover(button)

    expect(button).toHaveStyle({
      background: '#0D8C84CC'
    })
  })

  it('should render the full width button when prop is set', () => {
    renderWithTheme(<Button $fullWidth>View details</Button>)

    expect(screen.getByRole('button', { name: /View details/i })).toHaveStyle({
      width: '100%'
    })
  })
})
