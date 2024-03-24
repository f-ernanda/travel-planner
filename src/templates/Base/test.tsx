import { fireEvent, screen, waitFor } from '@testing-library/react'
import { renderWithTheme } from '@/utils/test-utils'

import Base from '.'

describe('<Base />', () => {
  it('should render the page correctly', () => {
    const { container } = renderWithTheme(
      <Base>
        <h1>Travel Ease</h1>
      </Base>
    )

    expect(
      screen.getByRole('heading', { name: /Travel Ease/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the menu and footer', () => {
    renderWithTheme(
      <Base>
        <h1>Travel Ease</h1>
      </Base>
    )

    window.innerWidth = 1000
    fireEvent(window, new Event('resize'))

    waitFor(() => {
      expect(screen.getByRole('navigation')).toBeInTheDocument()
      expect(screen.getByText(/©/i, { exact: false })).toBeInTheDocument()
    })
  })
})
