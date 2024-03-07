import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { renderWithTheme } from '../../utils/test-utils'
import TextField from '.'

describe('<TextField />', () => {
  it('should render the with label', () => {
    renderWithTheme(<TextField label="Email" labelFor="Email" id="Email" />)

    expect(screen.getByLabelText('Email')).toBeInTheDocument()
  })

  it('should render with placeholder', () => {
    renderWithTheme(<TextField placeholder="john.smith@email.com" />)

    expect(
      screen.getByPlaceholderText('john.smith@email.com')
    ).toBeInTheDocument()
  })

  it('should be accessible by tab', async () => {
    renderWithTheme(<TextField label="Email" labelFor="Email" id="Email" />)

    expect(document.body).toHaveFocus()

    const user = userEvent.setup()
    await user.tab()

    expect(screen.getByLabelText('Email')).toHaveFocus()
  })
})
