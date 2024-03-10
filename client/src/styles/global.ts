'use client'

import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      font-size: ${theme.fonts.sizes.regular};
      background-color: ${theme.colors.white};
    }

    button,
    input {
      font-family: inherit;
    }
  `}
`

export default GlobalStyles
