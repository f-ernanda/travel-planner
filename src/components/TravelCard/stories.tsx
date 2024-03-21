import { Meta, StoryObj } from '@storybook/react'
import TravelCard from '.'

export default {
  title: 'TravelCard',
  component: TravelCard,
  args: {
    $img: '/img/mariaberget.jpg',
    $title: 'Mariaberget',
    $flight: '1+ stops',
    $flightPrice: '$374',
    $hotel: '3 starts',
    $hotelPrice: '$81'
  }
} as Meta

export const Default: StoryObj = {}
