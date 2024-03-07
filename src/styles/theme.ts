export default {
  grid: {
    container: '140rem',
    gutter: '2.4rem'
  },

  fonts: {
    light: 300,
    regular: 400,
    bold: 700,
    sizes: {
      small: '1.4rem',
      regular: '1.6rem',
      large: '2.0rem'
    }
  },

  colors: {
    primary: '#0D8C84',
    white: '#DAE4E4',
    black: '#151C1B',
    lightGray: '#BDC3C3',
    darkGray: '#565D5D',
    alert: '#73171D'
  },

  spacings: {
    small: '0.8rem',
    regular: '3.2rem',
    large: '4.8rem'
  },

  borders: {
    radius: '0.4rem'
  },

  transitions: {
    default: '.3s ease-in-out',
    fast: '.1s ease-in-out'
  }
} as const
