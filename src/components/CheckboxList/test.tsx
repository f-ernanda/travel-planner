import { screen } from '@testing-library/react'

import { renderWithTheme } from '@/utils/test-utils'
import CheckboxList from '.'
import userEvent from '@testing-library/user-event'

const tags = ['Charming', 'Foodie', 'Nightlife']
const selectedTags = ['Foodie']

describe('<CheckboxList />', () => {
  it('should render checkboxes for each tag', () => {
    const onChange = jest.fn()

    renderWithTheme(
      <CheckboxList
        $tags={tags}
        $selectedTags={selectedTags}
        onChange={onChange}
      />
    )

    tags.forEach((tag) => {
      expect(screen.getByDisplayValue(tag)).toBeInTheDocument()
    })
  })

  it('should call onChange function when a checkbox is clicked', async () => {
    const onChange = jest.fn()

    renderWithTheme(
      <CheckboxList
        $tags={tags}
        $selectedTags={selectedTags}
        onChange={onChange}
      />
    )

    const user = userEvent.setup()

    await user.click(screen.getByDisplayValue(/Charming/i))
    expect(onChange).toHaveBeenCalledWith('Charming', true)
  })
})
