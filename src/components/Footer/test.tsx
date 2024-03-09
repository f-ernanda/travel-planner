import { screen } from '@testing-library/react'

import Footer from '.'
import { renderWithTheme } from '@/utils/test-utils'

describe('<Footer />', () => {
  it('should render the footer correctly', () => {
    renderWithTheme(<Footer />)

    expect(screen.getByText(/©/i, { exact: false })).toBeInTheDocument()
  })
})
