import { rest } from 'msw'

export const handlers = [
  rest.get('/api/places/:id', (req, res, ctx) => {
    const { id } = req.params

    if (id === 'error') {
      return res(
        ctx.status(500),
        ctx.json({
          errorMessage: 'Failed to fetch place. Please try again later.'
        })
      )
    }

    return res(
      ctx.status(200),
      ctx.json({
        place: {
          id: id,
          name: 'Stockholm',
          country: 'Sweden',
          tags: ['Charming', 'History', 'Architecture', 'Museums'],
          image_url: 'https://source.unsplash.com/featured/?stockholm'
        }
      })
    )
  }),

  rest.get('/api/flights', (req, res, ctx) => {
    const place = req.url.searchParams.get('place')

    if (req.url.searchParams.get('error') === 'flights') {
      return res(
        ctx.status(500),
        ctx.json({
          errorMessage: 'Failed to fetch flights. Please try again later.'
        })
      )
    }

    return res(
      ctx.status(200),
      ctx.json({
        flights: [
          {
            id: '1',
            place: place,
            price: 550,
            company: 'SAS',
            stops: 1
          }
        ]
      })
    )
  }),

  rest.get('/api/hotels', (req, res, ctx) => {
    const place = req.url.searchParams.get('place')

    return res(
      ctx.status(200),
      ctx.json({
        hotels: [
          {
            id: '1',
            place: place,
            name: 'Grand Hotel Stockholm',
            price_per_night: 350,
            rating: 4.7
          }
        ]
      })
    )
  }),

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
            bestHotel: {
              price_per_night: 350,
              rating: 4.7
            },
            bestFlight: {
              price: 550,
              stops: 1
            }
          }
        ]
      })
    )
  })
]
