import { screen } from '@testing-library/react'
import { renderWithTheme } from '@/utils/test-utils'

import TravelCardSkeleton from '.'

describe('<TravelCardSkeleton />', () => {
  it('should render the card correctly', () => {
    renderWithTheme(<TravelCardSkeleton />)

    expect(
      screen.getByRole('heading', { name: props.$title })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: props.$title })).toBeInTheDocument()
  })
})
