import { screen } from '@testing-library/react'
import { renderWithTheme } from '@/utils/test-utils'

import Empty from '.'

describe('<Empty />', () => {
  it('should render the menu and footer', () => {
    renderWithTheme(<Empty />)

    expect(
      screen.getByRole('heading', { name: 'Oops! Page not found' })
    ).toBeInTheDocument()
  })
})
