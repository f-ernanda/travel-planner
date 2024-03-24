import { screen } from '@testing-library/react'
import { renderWithTheme } from '@/utils/test-utils'

import Banner from '.'

describe('<Banner />', () => {
  it('should render the banner correctly', () => {
    renderWithTheme(
      <Banner $title="Banner" $iconInfo="Info" $priceValue="$800" />
    )

    expect(screen.getByRole('heading', { name: /Banner/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Banner/i })).toBeInTheDocument()
  })

  it('should render the banner with an icon', () => {
    renderWithTheme(
      <Banner $title="Banner" $iconInfo="Info" $priceValue="$800" />
    )

    expect(screen.getByRole('heading', { name: /Banner/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Banner/i })).toBeInTheDocument()
  })
})
