'use client'

import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { LogoIconProps } from '.'

const wrapperModifiers = {
  normal: () => css`
    height: 5.2rem;
    width: 6rem;

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

export const Wrapper = styled.div<LogoIconProps>`
  ${({ $size }) => css`
    ${$size && wrapperModifiers[$size]}
  `}
`
