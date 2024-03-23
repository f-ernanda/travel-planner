'use client'

import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    ${media.greaterThan('medium')`
        display: grid;
        gap: ${theme.grid.gutter};
        grid-template-areas: 'search list';
        grid-template-columns: minmax(1fr, 50rem) minmax(2fr, auto);
        grid-template-rows: 25rem auto 1fr;
    `}

    @media (768px <= width <= 1200px) {
      display: flex;
      justify-content: center;
      align-items: start;
      flex-direction: column;
    }
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
