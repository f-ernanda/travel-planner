import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { renderWithTheme } from '@/utils/test-utils'
import Checkbox from '.'

describe('<Checkbox />', () => {
  it('should render with label', () => {
    renderWithTheme(
      <Checkbox label="Foodie" labelFor="Foodie" id="Foodie" checked />
    )

    expect(screen.getByRole('checkbox')).toBeInTheDocument()
    expect(screen.getByLabelText(/Foodie/i)).toBeInTheDocument()
  })

  it('should render without label', () => {
    renderWithTheme(<Checkbox />)

    expect(screen.queryByLabelText('Checkbox')).not.toBeInTheDocument()
  })

  it('should call onCheck when the checkbox status changes', async () => {
    const onCheck = jest.fn()

    renderWithTheme(<Checkbox onCheck={onCheck} />)

    const user = userEvent.setup()
    await user.click(screen.getByRole('checkbox'))

    expect(onCheck).toHaveBeenCalledTimes(1)
    expect(onCheck).toHaveBeenCalledWith(true)
  })

  it('should call onCheck with false when the checkbox is checked', async () => {
    const onCheck = jest.fn()

    renderWithTheme(<Checkbox onCheck={onCheck} isChecked />)

    const user = userEvent.setup()
    await user.click(screen.getByRole('checkbox'))

    expect(onCheck).toHaveBeenCalledTimes(1)
    expect(onCheck).toHaveBeenCalledWith(false)
  })

  it('should be accessible by tab', async () => {
    renderWithTheme(
      <Checkbox label="Foodie" labelFor="Foodie" id="Foodie" checked />
    )

    const user = userEvent.setup()

    expect(document.body).toHaveFocus()

    await user.tab()
    expect(screen.getByLabelText(/Foodie/i)).toHaveFocus()
  })
})
