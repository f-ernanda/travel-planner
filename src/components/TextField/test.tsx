import { render, screen, RenderResult } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ThemeProvider } from 'styled-components'

import theme from '../../styles/theme'
import TextField from '.'

const renderWithTheme = (children: React.ReactNode): RenderResult =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>)

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
