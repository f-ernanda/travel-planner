'use client'

import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { LogoProps } from '.'

const wrapperModifiers = {
  normal: () => css`
    width: 8rem;

    ${media.greaterThan('medium')`
      width: 10rem;
    `}
  `,

  large: () => css`
    width: 12rem;

    ${media.greaterThan('medium')`
      width: 20rem;
    `}
  `
}

export const Wrapper = styled.div<LogoProps>`
  ${({ $size }) => css`
    ${$size && wrapperModifiers[$size]}
  `}
`
