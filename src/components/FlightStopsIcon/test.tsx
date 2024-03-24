import { renderWithTheme } from '@/utils/test-utils'
import FlightStopsIcon from '.'

describe('<FlightStopsIcon />', () => {
  it('should render the matched icon', () => {
    const { container } = renderWithTheme(<FlightStopsIcon />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the icon correctly when no prop is set', () => {
    const { container } = renderWithTheme(<FlightStopsIcon />)

    expect(container.querySelector('.flight-takeoff')).toBeInTheDocument()
    expect(container.querySelector('.zero-stops-icon')).toBeInTheDocument()
    expect(container.querySelector('.one-stop-icon')).not.toBeInTheDocument()
    expect(
      container.querySelector('.two-or-more-stops-icon')
    ).not.toBeInTheDocument()
    expect(container.querySelector('.flight-land')).toBeInTheDocument()
  })

  it('should render the icon correctly when prop is set with 1 stops', () => {
    const { container } = renderWithTheme(<FlightStopsIcon $stops={1} />)

    expect(container.querySelector('.flight-takeoff')).toBeInTheDocument()
    expect(container.querySelector('.one-stop-icon')).toBeInTheDocument()
    expect(container.querySelector('.flight-land')).toBeInTheDocument()
  })

  it('should render the icon correctly when prop is set with 2 stops', () => {
    const { container } = renderWithTheme(<FlightStopsIcon $stops={2} />)

    expect(container.querySelector('.flight-takeoff')).toBeInTheDocument()
    expect(
      container.querySelector('.two-or-more-stops-icon')
    ).toBeInTheDocument()
    expect(container.querySelector('.flight-land')).toBeInTheDocument()
  })
})
