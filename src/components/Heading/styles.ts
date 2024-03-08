'use client'

import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

import { HeadingProps } from '.'

const wrapperModifiers = {
  withHorizontalLine: (theme: DefaultTheme) => css`
    margin-bottom: ${theme.spacings.small};
    position: relative;

    &::after {
      border-bottom: ${theme.thickness.thin} solid ${theme.colors.primary};
      bottom: -1.5rem;
      content: '';
      left: 0;
      position: absolute;
      width: 4rem;
    }
  `,

  withVerticalLine: (theme: DefaultTheme) => css`
    border-left: ${theme.thickness.thin} solid ${theme.colors.primary};
    padding-left: ${theme.spacings.small};
  `
}

export const Wrapper = styled.h2<HeadingProps>`
  ${({ theme, $withHorizontalLine, $withVerticalLine }) => css`
    color: ${theme.colors.black};
    font-size: ${theme.fonts.sizes.regular};

    ${media.greaterThan('medium')`
      font-size: ${theme.fonts.sizes.large}
    `}

    ${$withHorizontalLine && wrapperModifiers.withHorizontalLine(theme)}
    ${$withVerticalLine && wrapperModifiers.withVerticalLine(theme)}
  `}
`
