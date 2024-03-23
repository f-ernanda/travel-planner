'use client'

import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { BaseTemplateProps } from '.'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    min-height: 100vh;

    & > * {
      display: grid;
      gap: ${theme.grid.gutter};
      grid-template-areas:
        'menu'
        'content'
        'footer';
      grid-template-rows: 25rem auto 1fr;
      min-height: 100vh;
    }

    ${media.lessThan('medium')`
        background-color: ${theme.colors.bg};
    `}

    ${media.greaterThan('medium')`
      position: relative;
      z-index: 0;
      &::after {
        background-color: ${theme.colors.bg};
        bottom: 0;
        clip-path: polygon(100% 0, 100% 100%, 75% 100%, 0 57%, 0 0);
        content: '';
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        z-index: -1;
      }

      & > * {
        grid-template-columns: minmax(1fr, 50rem) minmax(2fr, auto);
      }
    `}
  `}
`

export const MenuContainer = styled.section`
  ${({ theme }) => css`
    grid-area: menu;
    margin-bottom: ${theme.spacings.large};

    ${media.greaterThan('medium')`
      margin-top: ${theme.spacings.small};
    `}
  `}
`

export const FooterContainer = styled.section`
  align-self: end;
  grid-area: footer;
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
    align-self: center;
    grid-area: content;
    ${$withFlex && contentModifiers.withFlex}
  `}
`
