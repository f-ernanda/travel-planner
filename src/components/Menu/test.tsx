import { fireEvent, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { renderWithTheme } from '@/utils/test-utils'
import Menu from '.'

beforeAll(() => {})

describe('<Menu />', () => {
  it('should render the menu correctly', () => {
    renderWithTheme(<Menu />)

    window.innerWidth = 500
    fireEvent(window, new Event('resize'))

    waitFor(() => {
      expect(screen.getByLabelText(/Open menu/i)).toBeInTheDocument()
      expect(
        screen.getByRole('img', { name: /Travel Ease/i })
      ).toBeInTheDocument()
    })
  })

  it('should toggle the visibility of the mobile menu', async () => {
    renderWithTheme(<Menu />)

    const menuMobile = screen.getByRole('navigation', { hidden: true })
    const user = userEvent.setup()

    expect(menuMobile.getAttribute('aria-hidden')).toBe('true')
    expect(menuMobile).toHaveStyle({ opacity: 0 })

    await user.click(screen.getByLabelText(/Open menu/i))
    expect(menuMobile.getAttribute('aria-hidden')).toBe('false')
    expect(menuMobile).toHaveStyle({ opacity: 1 })

    await user.click(screen.getByLabelText(/Close menu/i))
    expect(menuMobile.getAttribute('aria-hidden')).toBe('true')
    expect(menuMobile).toHaveStyle({ opacity: 0 })
  })

  it('should render the authentication panel when no user is logged in', () => {
    renderWithTheme(<Menu />)

    window.innerWidth = 500
    fireEvent(window, new Event('resize'))

    waitFor(() => {
      expect(screen.queryByText(/My account/i)).not.toBeInTheDocument()
      expect(screen.getByText(/Log in/i)).toBeInTheDocument()
      expect(screen.getByText(/Sign up/i)).toBeInTheDocument()
    })
  })

  it('should render the account link when a user is logged in', () => {
    renderWithTheme(<Menu $username="Fernanda" />)

    window.innerWidth = 500
    fireEvent(window, new Event('resize'))

    waitFor(() => {
      expect(screen.getByText(/My account/i)).toBeInTheDocument()
      expect(screen.queryByText(/Log in/i)).not.toBeInTheDocument()
      expect(screen.queryByText(/sign up/i)).not.toBeInTheDocument()
    })
  })
})
