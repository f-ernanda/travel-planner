// import { screen } from '@testing-library/react'
import { renderWithTheme } from '@/utils/test-utils'

import TravelCardSkeleton from '.'

describe('<TravelCardSkeleton />', () => {
  it('should render the card correctly', () => {
    renderWithTheme(<TravelCardSkeleton />)
  })
})
