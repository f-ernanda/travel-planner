import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { renderWithTheme } from '@/utils/test-utils'
import TextField from '.'

describe('<TextField />', () => {
  it('should render the with label', () => {
    renderWithTheme(<TextField label="Email" labelFor="Email" id="Email" />)

    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument()
  })

  it('should render with placeholder', () => {
    renderWithTheme(<TextField placeholder="john.smith@email.com" />)

    expect(
      screen.getByPlaceholderText('john.smith@email.com')
    ).toBeInTheDocument()
  })

  it('should render with error when error prop is set ', () => {
    renderWithTheme(<TextField $error="Error" />)

    expect(screen.getByText(/Error/i)).toBeInTheDocument()
  })

  it('should be accessible by tab', async () => {
    renderWithTheme(<TextField label="Email" labelFor="Email" id="Email" />)

    const user = userEvent.setup()
    expect(document.body).toHaveFocus()

    await user.tab()
    expect(screen.getByLabelText(/Email/i)).toHaveFocus()
  })

  it('should not be accessible by tab when disabled', async () => {
    renderWithTheme(
      <TextField label="Email" labelFor="Email" id="Email" disabled />
    )

    const user = userEvent.setup()
    expect(document.body).toHaveFocus()

    await user.tab()
    expect(screen.getByLabelText(/Email/i)).not.toHaveFocus()
  })
})
