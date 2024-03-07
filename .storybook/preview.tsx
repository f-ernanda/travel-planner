import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Montserrat } from 'next/font/google'

import GlobalStyles from '../src/styles/global'
import theme from '../src/styles/theme'

const montserrat = Montserrat({ subsets: ['latin'] })

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <main className={montserrat.className}>
        <Story />
      </main>
    </ThemeProvider>
  )
]
