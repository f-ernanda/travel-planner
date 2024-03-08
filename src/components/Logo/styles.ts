'use client'

import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { LogoProps } from '.'

const wrapperModifiers = {
  normal: () => css`
    width: 10rem;
  `,

  large: () => css`
    width: 20rem;
  `
}

export const Wrapper = styled.div<LogoProps>`
  ${({ size }) => css`
    ${size && wrapperModifiers[size]}
    ${media.lessThan('medium')`
      width: 8rem;
    `}
  `}
`
