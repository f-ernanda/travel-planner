'use client'

import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      font-size: ${theme.fonts.sizes.regular};
    }

    button,
    input {
      font-family: inherit;
    }
  `}
`

export default GlobalStyles
