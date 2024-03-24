import { Meta, StoryObj } from '@storybook/react'
import HighlightSkeleton from '.'

const tags = ['Charming', 'Foodie', 'Nightlife', 'Architecture', 'History']

export default {
  title: 'HighlightSkeleton',
  component: HighlightSkeleton,
  args: {
    $img: '/img/stockholm.jpg',
    $title: 'Stockholm',
    $subtitle: 'Sweden',
    $tags: tags
  }
} as Meta

export const Default: StoryObj = {}
