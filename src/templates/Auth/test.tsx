import { screen } from '@testing-library/react'
import { renderWithTheme } from '@/utils/test-utils'

import Auth from '.'

describe('<Auth />', () => {
  it('should render the page correctly', () => {
    const { container } = renderWithTheme(<Auth />)

    expect(screen.getByRole('form')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
