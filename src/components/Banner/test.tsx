import { screen } from '@testing-library/react'
import { renderWithTheme } from '@/utils/test-utils'

import Banner from '.'

const props = {
  $title: 'Banner',
  $iconInfo: 'Info',
  $priceValue: '800'
}

describe('<Banner />', () => {
  it('should render the banner correctly', () => {
    renderWithTheme(<Banner {...props} />)

    expect(screen.getByRole('heading', { name: /Banner/i })).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /Book now/i })
    ).toBeInTheDocument()
  })
})
