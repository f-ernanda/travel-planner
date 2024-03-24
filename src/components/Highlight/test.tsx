import { screen } from '@testing-library/react'
import { renderWithTheme } from '@/utils/test-utils'

import Highlight from '.'

const props = {
  $img: '/img/stockholm.jpg',
  $title: 'Stockholm',
  $subtitle: 'Sweden',
  $tags: ['Charming', 'History', 'Architecture', 'Museums']
}

describe('<Highlight />', () => {
  it('should render the highlight correctly', () => {
    renderWithTheme(<Highlight {...props} />)

    expect(
      screen.getByRole('heading', { name: /Stockholm/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /Stockholm/i })).toHaveAttribute(
      'src'
    )
  })
})
