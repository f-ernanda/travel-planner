import { render, screen } from '@testing-library/react'

import Auth from '.'

describe('<Auth />', () => {
  it('should render the heading', () => {
    render(
      <Auth>
        <input type="text" />
      </Auth>
    )

    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
})
