import { screen } from '@testing-library/react'
import { renderWithTheme } from '@/utils/test-utils'

import Main from '.'

// const SECONDS = 1000

describe('<Main />', () => {
  it('should render the page correctly', async () => {
    const { container } = renderWithTheme(<Main />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the search section', () => {
    renderWithTheme(<Main />)

    expect(screen.getByRole('button', { name: /Search/i })).toBeInTheDocument()
  })
})
