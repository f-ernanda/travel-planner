import type { StorybookConfig } from '@storybook/nextjs'
import path from 'path'

const config: StorybookConfig = {
  staticDirs: ['../public'],
  stories: ['../src/components/**/stories.tsx'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },
  docs: {
    autodocs: true
  },
  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, '../src')
      }
    }
    return config
  }
}
export default config
