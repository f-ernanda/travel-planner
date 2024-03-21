import { render, screen } from '@testing-library/react'

import CheckboxList from '.'

describe('<CheckboxList />', () => {
  it('should render the heading', () => {
    const { container } = render(<CheckboxList />)

    expect(
      screen.getByRole('heading', { name: /CheckboxList/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
