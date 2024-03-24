import { render, screen } from '@testing-library/react'

import Detail from '.'

describe('<Detail />', () => {
  it('should render the heading', () => {
    const { container } = render(<Detail />)

    expect(screen.getByRole('heading', { name: /Detail/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
