import { screen } from '@testing-library/react'

import { renderWithTheme } from '@/utils/test-utils'
import SignInForm from '.'

describe('<SignInForm />', () => {
  it('should render the form correctly', () => {
    renderWithTheme(<SignInForm />)

    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Sign In/i })).toBeInTheDocument()
  })
})