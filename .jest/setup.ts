import '@testing-library/jest-dom'
import 'jest-styled-components'
import 'whatwg-fetch'
import { server } from '@/mocks/server'

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())
