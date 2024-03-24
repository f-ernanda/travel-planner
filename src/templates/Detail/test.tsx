import { screen, waitFor } from '@testing-library/react'
import { renderWithTheme } from '@/utils/test-utils'

import Detail from '.'

const SECONDS = 1000

describe('<Detail />', () => {
  it(
    'should render the page correctly',
    async () => {
      const { container } = renderWithTheme(<Detail $id="1" />)

      await waitFor(() => {
        expect(
          screen.getByRole('heading', { name: 'Stockholm' })
        ).toBeInTheDocument()
        expect(container.firstChild).toMatchSnapshot()
      })
    },
    5 * SECONDS
  )
})
