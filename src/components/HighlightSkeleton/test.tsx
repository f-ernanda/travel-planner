import { screen } from '@testing-library/react'
import { renderWithTheme } from '@/utils/test-utils'

import HighlightSkeleton from '.'

describe('<HighlightSkeleton />', () => {
  it('should render the skeleton correctly', () => {
    renderWithTheme(<HighlightSkeleton />)

    expect(screen.getByRole('article', { hidden: true })).toBeInTheDocument()
  })
})
