import { renderWithTheme } from '@/utils/test-utils'
import ReviewBar from '.'

describe('<ReviewBar />', () => {
  it('should render the matched icon', () => {
    const { container } = renderWithTheme(<ReviewBar />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the icon correctly with 3 filled stars', () => {
    const { container } = renderWithTheme(<ReviewBar $totalFilled={3} />)

    const filledStars = container.querySelectorAll('.star-filled')
    expect(filledStars.length).toBe(3)

    const emptyStars = container.querySelectorAll('.star-outline')
    expect(emptyStars.length).toBe(2)
  })

  it('should render the icon correctly with 2.5 filled stars', () => {
    const { container } = renderWithTheme(<ReviewBar $totalFilled={2.5} />)

    const filledStars = container.querySelectorAll('.star-filled')
    expect(filledStars.length).toBe(2)

    const halfFilledStars = container.querySelectorAll('.star-half')
    expect(halfFilledStars.length).toBe(1)

    const emptyStars = container.querySelectorAll('.star-outline')
    expect(emptyStars.length).toBe(2)
  })

  it('should render the icon correctly u0 filled stars', () => {
    const { container } = renderWithTheme(<ReviewBar $totalFilled={0} />)

    const filledStars = container.querySelectorAll('.star-filled')
    expect(filledStars.length).toBe(0)

    const emptyStars = container.querySelectorAll('.star-outline')
    expect(emptyStars.length).toBe(5)
  })
})
