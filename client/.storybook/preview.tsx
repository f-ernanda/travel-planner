import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Inter } from 'next/font/google'

import GlobalStyles from '../src/styles/global'
import theme from '../src/styles/theme'

const inter = Inter({ subsets: ['latin'] })

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <main className={inter.className}>
        <Story />
      </main>
    </ThemeProvider>
  )
]
