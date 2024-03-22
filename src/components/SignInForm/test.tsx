import { screen } from '@testing-library/react'

import { renderWithTheme } from '@/utils/test-utils'
import SignInForm from '.'

describe('<SignInForm />', () => {
  it('should render the form correctly', () => {
    renderWithTheme(<SignInForm />)

    expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/Password/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Sign In/i })).toBeInTheDocument()
  })
})
