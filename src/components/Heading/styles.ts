'use client'

import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

import { HeadingProps } from '.'

const wrapperModifiers = {
  withHorizontalLine: (theme: DefaultTheme) => css`
    position: relative;

    &::after {
      border-bottom: ${theme.thickness.thin} solid ${theme.colors.primary};
      bottom: -1rem;
      content: '';
      left: 0;
      position: absolute;
      width: 3rem;

      ${media.greaterThan('medium')`
        border-bottom-width: ${theme.thickness.regular};
        bottom: -2rem;
        width: 6rem;
      `}
    }
  `,

  withVerticalLine: (theme: DefaultTheme) => css`
    border-left: ${theme.thickness.thin} solid ${theme.colors.primary};
    padding-left: ${theme.spacings.tiny};

    ${media.greaterThan('medium')`
        border-left-width: ${theme.thickness.regular};
        padding-left: ${theme.spacings.small};
    `}
  `
}

export const Wrapper = styled.h2<HeadingProps>`
  ${({ theme, $withHorizontalLine, $withVerticalLine }) => css`
    color: ${theme.colors.black};
    font-size: ${theme.fonts.sizes.large};

    ${media.greaterThan('medium')`
      font-size: ${theme.fonts.sizes.huge}
    `}

    ${$withHorizontalLine && wrapperModifiers.withHorizontalLine(theme)}
    ${$withVerticalLine && wrapperModifiers.withVerticalLine(theme)}
  `}
`
