import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Inter } from 'next/font/google'

import GlobalStyles from '../src/styles/global'
import theme from '../src/styles/theme'

const inter = Inter({ subsets: ['latin'] })

const preview: Preview = {
  parameters: {
    backgrounds: {
      values: [
        {
          name: 'dark',
          value: theme.colors.bg
        },
        {
          name: 'light',
          value: theme.colors.white
        },
        {
          name: 'primary',
          value: theme.colors.primaryAlpha
        }
      ]
    },
    controls: {
      hideNoControlsWarning: true
    },
    options: {
      showPanel: true,
      panelDirection: 'right'
    }
  }
}

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

export default preview
