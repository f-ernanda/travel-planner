import { Meta, StoryObj } from '@storybook/react'
import Highlight from '.'

const tags = ['Charming', 'Foodie', 'Nightlife', 'Architecture']

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    $img: '/img/stockholm.jpg',
    $title: 'Stockholm',
    $subtitle: 'Sweden',
    $tags: tags
  }
} as Meta

export const Default: StoryObj = {}
