import { fireEvent, screen, waitFor } from '@testing-library/react'

import { renderWithTheme } from '@/utils/test-utils'
import SignInForm from '.'
import userEvent from '@testing-library/user-event'

describe('<SignInForm />', () => {
  it('should render the form correctly', () => {
    renderWithTheme(<SignInForm />)

    expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/Password/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Sign In/i })).toBeInTheDocument()
  })

  it('should submit the form correctly', async () => {
    renderWithTheme(<SignInForm />)

    const handleSubmit = jest.fn()
    screen.getByRole('form').onsubmit = handleSubmit

    const user = userEvent.setup()

    fireEvent.change(screen.getByPlaceholderText('Email'), {
      target: { value: 'valid_email@example.com' }
    })
    fireEvent.change(screen.getByPlaceholderText('Password'), {
      target: { value: 'validPassword' }
    })

    await user.click(screen.getByRole('button'))
    waitFor(() => {
      expect(handleSubmit).toHaveBeenCalled()
      expect(
        screen.getByText(/Please correct the highlighted fields/i)
      ).not.toBeInTheDocument()
    })
  })

  it('should not submit the form correctly if required fields are empty', async () => {
    renderWithTheme(<SignInForm />)

    const handleSubmit = jest.fn()
    screen.getByRole('form').onsubmit = handleSubmit

    const user = userEvent.setup()

    await user.click(screen.getByRole('button'))
    waitFor(() => {
      expect(handleSubmit).toHaveBeenCalled()
      expect(
        screen.getByText(/Please correct the highlighted fields/i)
      ).toBeInTheDocument()
    })
  })
})
