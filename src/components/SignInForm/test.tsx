import { render, screen } from '@testing-library/react'

import SignInForm from '.'

describe('<SignInForm />', () => {
  it('should render the form correctly', () => {
    render(<SignInForm />)

    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Sign In/i })).toBeInTheDocument()
  })
})
