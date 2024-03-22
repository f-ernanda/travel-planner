import { Meta, StoryObj } from '@storybook/react'
import Checkbox from '.'

export default {
  title: 'Checkbox',
  component: Checkbox,
  args: {
    label: 'Foodie',
    labelFor: 'Foodie',
    id: 'Foodie'
  },
  argTypes: {
    onCheck: { action: 'checked' }
  }
} as Meta

export const Default: StoryObj = {}

Default.parameters = {
  backgrounds: {
    default: 'dark'
  }
}
