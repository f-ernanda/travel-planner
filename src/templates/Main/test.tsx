import { server } from '@/mocks/server'
import { rest } from 'msw'
import { fireEvent, screen, waitFor } from '@testing-library/react'
import { renderWithTheme } from '@/utils/test-utils'

import Main from '.'

const SECONDS = 1000

describe('<Main />', () => {
  it('should render the page correctly', async () => {
    const { container } = renderWithTheme(<Main />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the search section', () => {
    renderWithTheme(<Main />)

    expect(screen.getByRole('button', { name: /Search/i })).toBeInTheDocument()
  })

  it('should update selected tags when checkboxes are changed', () => {
    renderWithTheme(<Main />)

    const checkbox = screen.getByLabelText('Charming')
    fireEvent.click(checkbox)

    expect(checkbox).toBeChecked()
  })

  it(
    'should display search results when search is successful',
    async () => {
      renderWithTheme(<Main />)

      const checkbox = screen.getByLabelText('Charming')
      fireEvent.click(checkbox)

      const button = screen.getByRole('button', { name: /Search/i })
      fireEvent.click(button)

      await waitFor(() => {
        expect(
          screen.getByRole('heading', { name: 'Stockholm' })
        ).toBeInTheDocument()
      })
    },
    10 * SECONDS
  )

  it('should handle errors when search fails', async () => {
    server.use(
      rest.post('/api/search', (req, res, ctx) => {
        return res(
          ctx.status(500),
          ctx.json({
            errorMessage: 'Failed to fetch data. Please try again later.'
          })
        )
      })
    )

    const consoleSpy = jest.spyOn(console, 'error')
    consoleSpy.mockImplementation(() => {})

    renderWithTheme(<Main />)

    const button = screen.getByRole('button', { name: /Search/i })
    fireEvent.click(button)

    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalledWith(
        'Error occurred during search:',
        expect.any(Error)
      )
    })
  })

  it('should match snapshot after a search', async () => {
    const { container } = renderWithTheme(<Main />)

    const button = screen.getByRole('button', { name: /Search/i })
    fireEvent.click(button)

    await waitFor(() => {
      expect(container.firstChild).toMatchSnapshot()
    })
  })

  it('should display the alternative texts when flight and hotel is not available ', async () => {
    server.use(
      rest.post('/api/search', (req, res, ctx) => {
        return res(
          ctx.json({
            results: [
              {
                place: {
                  id: 'stockholm',
                  name: 'Stockholm',
                  image_url: 'https://source.unsplash.com/featured/?stockholm',
                  tags: ['Charming', 'History']
                },
                bestHotel: null,
                bestFlight: null
              }
            ]
          })
        )
      })
    )

    renderWithTheme(<Main />)

    const button = screen.getByRole('button', { name: /Search/i })
    fireEvent.click(button)

    await waitFor(() => {
      expect(screen.getByText('No available flights')).toBeInTheDocument()
      expect(screen.getByText('No available hotels')).toBeInTheDocument()
      expect(screen.getAllByText('N/A')).toHaveLength(2)
    })
  })
})
