import { render, screen } from '@testing-library/react'

import FlightStopsIcon from '.'

describe('<FlightStopsIcon />', () => {
  it('should render the heading', () => {
    const { container } = render(<FlightStopsIcon />)

    expect(
      screen.getByRole('heading', { name: /FlightStopsIcon/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
