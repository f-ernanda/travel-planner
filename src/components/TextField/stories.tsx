import { Meta, StoryObj } from '@storybook/react'
import TextField from '.'

export default {
  title: 'TextField',
  component: TextField,
  args: {
    label: 'Email',
    labelFor: 'Email',
    id: 'Email',
    placeholder: 'john.smith@email.com'
  }
} as Meta

export const Default: StoryObj = {}
