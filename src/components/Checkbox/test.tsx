import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { renderWithTheme } from '@/utils/test-utils'
import Checkbox from '.'

describe('<Checkbox />', () => {
  it('should render with label', () => {
    renderWithTheme(<Checkbox label="Foodie" labelFor="Foodie" id="Foodie" />)

    expect(screen.getByRole('checkbox')).toBeInTheDocument()
    expect(screen.getByLabelText(/Foodie/i)).toBeInTheDocument()
  })

  it('should be accessible by tab', async () => {
    renderWithTheme(<Checkbox label="Foodie" labelFor="Foodie" id="Foodie" />)

    const user = userEvent.setup()

    expect(document.body).toHaveFocus()

    await user.tab()
    expect(screen.getByLabelText(/Foodie/i)).toHaveFocus()
  })
})
