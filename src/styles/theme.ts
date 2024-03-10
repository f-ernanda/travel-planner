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
      tiny: '1.2rem',
      small: '1.4rem',
      regular: '1.6rem',
      large: '2.4rem',
      huge: '3.4rem'
    }
  },

  colors: {
    primary: '#0D8C84',
    primaryAlpha: '#0D8C84CC',
    white: '#DAE4E4',
    black: '#151C1B',
    lightGray: '#BDC3C3',
    darkGray: '#565D5D',
    alert: '#73171D'
  },

  spacings: {
    tiny: '0.8rem',
    small: '1.6rem',
    regular: '3.2rem',
    large: '4.8rem',
    huge: '5.6rem'
  },

  thickness: {
    thin: '0.4rem',
    regular: '0.8rem',
    thick: '1.2rem'
  },

  borders: {
    radius: '0.4rem'
  },

  transitions: {
    default: '.3s ease-in-out',
    fast: '.1s ease-in-out'
  },

  backgrounds: {
    wave: 'linear-gradient(to right, #e4eded 0%, #d1e3e2 20%, #e4eded 40%, #e4eded 100%)'
  }
} as const
