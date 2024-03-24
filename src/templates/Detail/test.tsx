import { server } from '@/mocks/server'
import { rest } from 'msw'
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
    10 * SECONDS
  )

  it('should log an error when fetching place fails', async () => {
    const consoleSpy = jest.spyOn(console, 'error')
    consoleSpy.mockImplementation(() => {})

    renderWithTheme(<Detail $id="error" />)

    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalledWith(
        'Error occurred during details fetch:',
        expect.any(Error)
      )
    })

    consoleSpy.mockRestore()
  })

  it('should log an error when fetching flights fails', async () => {
    server.use(
      rest.get('/api/flights', (req, res, ctx) => {
        const place = req.url.searchParams.get('place')
        if (place === 'Stockholm') {
          return res(
            ctx.status(500),
            ctx.json({
              errorMessage: 'Failed to fetch flights. Please try again later.'
            })
          )
        }
      })
    )

    const consoleSpy = jest.spyOn(console, 'error')
    consoleSpy.mockImplementation(() => {})

    renderWithTheme(<Detail $id="1" />)

    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalledWith(
        'Error occurred during details fetch:',
        expect.any(Error)
      )
    })

    consoleSpy.mockRestore()
  })

  it('should log an error when fetching hotels fails', async () => {
    server.use(
      rest.get('/api/hotels', (req, res, ctx) => {
        const place = req.url.searchParams.get('place')
        if (place === 'Stockholm') {
          return res(
            ctx.status(500),
            ctx.json({
              errorMessage: 'Failed to fetch hotels. Please try again later.'
            })
          )
        }
      })
    )

    const consoleSpy = jest.spyOn(console, 'error')
    consoleSpy.mockImplementation(() => {})

    renderWithTheme(<Detail $id="1" />)

    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalledWith(
        'Error occurred during details fetch:',
        expect.any(Error)
      )
    })

    consoleSpy.mockRestore()
  })
})
