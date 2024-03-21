module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/app/**',
    '!src/lib/registry.tsx',
    '!src/types/**',
    '!src/styles/**',
    '!src/pages/**/*.tsx',
    '!src/**/stories.tsx'
  ],
  modulePaths: ['<rootDir>/src/'],
  moduleNameMapper: {
    '^styled-components':
      'styled-components/dist/styled-components.browser.cjs.js',
    '@/(.*)': '<rootDir>/src/$1'
  },
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }]
  }
}
