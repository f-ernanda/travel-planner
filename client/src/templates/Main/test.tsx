import { fireEvent, screen, waitFor } from '@testing-library/react'
import { renderWithTheme } from '@/utils/test-utils'

import Main from '.'

describe('<Main />', () => {
  it('should render the menu and footer', () => {
    renderWithTheme(<Main />)

    window.innerWidth = 1000
    fireEvent(window, new Event('resize'))

    waitFor(() => {
      expect(screen.getByRole('navigation')).toBeInTheDocument()
      expect(screen.getByText(/©/i, { exact: false })).toBeInTheDocument()
    })
  })

  it('should render the search section', () => {
    renderWithTheme(<Main />)

    expect(screen.getByRole('button', { name: /Search/i })).toBeInTheDocument()
  })
})
