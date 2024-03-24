import { screen } from '@testing-library/react'
import { renderWithTheme } from '@/utils/test-utils'

import BannerSkeleton from '.'

describe('<BannerSkeleton />', () => {
  it('should render the skeleton correctly', () => {
    renderWithTheme(<BannerSkeleton />)

    expect(screen.getByRole('article', { hidden: true })).toBeInTheDocument()
  })
})
