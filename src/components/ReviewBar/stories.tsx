import { Meta, StoryObj } from '@storybook/react'
import ReviewBar from '.'

export default {
  title: 'ReviewBar',
  component: ReviewBar,
  args: {
    $totalFilled: 2.3
  }
} as Meta

export const Default: StoryObj = {}
