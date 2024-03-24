import { screen } from '@testing-library/react'
import { renderWithTheme } from '@/utils/test-utils'

import TravelCard from '.'

const props = {
  $img: '/img/stockholm.jpg',
  $title: 'Stockholm',
  $flight: '1+ stops',
  $flightPrice: '$374',
  $hotel: '3 starts',
  $hotelPrice: '$81'
}

describe('<TravelCard />', () => {
  it('should render the card correctly', () => {
    renderWithTheme(<TravelCard {...props} />)

    expect(
      screen.getByRole('heading', { name: /Stockholm/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: /Stockholm/i })).toBeInTheDocument()
  })
})
