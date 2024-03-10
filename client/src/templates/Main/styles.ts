'use client'

import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
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
        clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 74%);
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
          'menu menu'
          'search list'
          'footer footer';
        grid-template-columns: 1fr 2fr;
        min-height: 100vh;
      }
    `}
  `}
`

export const MenuContainer = styled.section`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.large};

    ${media.greaterThan('medium')`
      grid-area: menu;
      margin-top: ${theme.spacings.small};
    `}
  `}
`

export const SearchContainer = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.grid.gutter};

    ${media.lessThan('medium')`
      margin-bottom: ${theme.spacings.large};
    `}

    ${media.greaterThan('medium')`
      align-items: flex-start;
      grid-area: search;
    `}
  `}
`

export const TravelList = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.grid.gutter};
    margin-bottom: ${theme.spacings.large};

    ${media.greaterThan('medium')`
      align-items: flex-start;
      grid-area: list;
    `}
  `}
`

export const FooterContainer = styled.section`
  align-self: end;
  grid-area: footer;
`
