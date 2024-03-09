'use client'

import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { LogoProps } from '.'

const wrapperModifiers = {
  normal: () => css`
    width: 12rem;

    ${media.greaterThan('medium')`
      width: 20rem;
    `}
  `,

  large: () => css`
    width: 20rem;

    ${media.greaterThan('medium')`
      height: 5.8rem;
      width: 30rem;
    `}
  `
}

export const Wrapper = styled.div<LogoProps>`
  ${({ $size }) => css`
    ${$size && wrapperModifiers[$size]}
  `}
`
