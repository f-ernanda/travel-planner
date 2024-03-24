import { screen } from '@testing-library/react'
import { renderWithTheme } from '@/utils/test-utils'

import TravelCardSkeleton from '.'

describe('<TravelCardSkeleton />', () => {
  it('should render the skeleton correctly', () => {
    renderWithTheme(<TravelCardSkeleton />)

    expect(screen.getByRole('article', { hidden: true })).toBeInTheDocument()
  })
})
