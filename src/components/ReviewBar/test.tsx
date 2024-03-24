import { render, screen } from '@testing-library/react'

import ReviewBar from '.'

describe('<ReviewBar />', () => {
  it('should render the heading', () => {
    const { container } = render(<ReviewBar />)

    expect(
      screen.getByRole('heading', { name: /ReviewBar/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
