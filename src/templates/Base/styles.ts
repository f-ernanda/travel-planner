'use client'

import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { BaseTemplateProps } from '.'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    min-height: 100vh;

    ${media.lessThan('medium')`
        background-color: ${theme.colors.bg};
    `}

    ${media.greaterThan('medium')`
      position: relative;
      z-index: 0;

      &::after {
        background-color: ${theme.colors.bg};
        bottom: 0;
        clip-path: polygon(100% 0, 100% 100%, 65% 100%, 0 65%, 0 0);
        content: '';
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        z-index: -1;
      }

      & > * {
        display: grid;
        gap: ${theme.grid.gutter};
        grid-template-areas:
          'menu'
          'content'
          'footer';
        grid-template-columns: minmax(1fr, 50rem) minmax(2fr, auto);
        grid-template-rows: 25rem minmax(auto, max-content) 1fr;
        min-height: 100vh;
      }
    `};
  `}
`

export const MenuWrapper = styled.section`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.large};

    ${media.greaterThan('medium')`
      grid-area: menu;
      margin-top: ${theme.spacings.small};
    `}
  `}
`

export const FooterWrapper = styled.section`
  ${media.lessThan('medium')`
        margin-top: auto;
    `}
  ${media.greaterThan('medium')`
    align-self: end;
    grid-area: footer;
  `}
`

const contentModifiers = {
  withFlex: () => css`
    ${media.greaterThan('medium')`
      display: flex;
      justify-content: center;
    `}
  `
}

export const Content = styled.main<BaseTemplateProps>`
  ${({ $withFlex }) => css`
    ${media.greaterThan('medium')`
      align-self: center;
      grid-area: content;
    `}

    ${$withFlex && contentModifiers.withFlex}
  `}
`
