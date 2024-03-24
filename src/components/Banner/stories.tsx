import { Meta, StoryObj } from '@storybook/react'
import Banner from '.'
import React from 'react'
import { StarHalf as StarHalfIcon } from '@styled-icons/material-rounded/StarHalf'

export default {
  title: 'Banner',
  component: Banner,
  args: {
    $title: 'Book now',
    $icon: (
      <>
        <StarHalfIcon />
      </>
    ),
    $iconText: 'Review',
    $priceValue: '$800'
  }
} as Meta

export const Default: StoryObj = {}
