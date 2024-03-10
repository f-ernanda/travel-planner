'use client'

import styled, { css, DefaultTheme } from 'styled-components'
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
  `,

  dark: (theme: DefaultTheme) => css`
    color: ${theme.colors.black};
  `,

  light: (theme: DefaultTheme) => css`
    color: ${theme.colors.white};
  `
}

export const Wrapper = styled.div<LogoProps>`
  ${({ theme, $size, $textColor }) => css`
    ${$size && wrapperModifiers[$size]}
    ${$textColor && wrapperModifiers[$textColor](theme)}
  `}
`
