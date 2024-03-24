'use client'

import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div``

export const DetailsWrapper = styled.div`
  ${({ theme }) => css`
    margin-block: ${theme.spacings.regular};

    > h2 {
      margin-block: ${theme.spacings.regular};
    }

    ${media.greaterThan('large')`
      display: grid;
      gap: ${theme.grid.gutter};
      grid-template-areas:
        'left-title right-title'
        'left-banner right-banner';
      grid-template-columns: repeat(2, 1fr);

      > h2:first-of-type {
        grid-area: left-title;
      }

      > h2:last-of-type {
        grid-area: right-title;
      }
    `}
  `}
`

export const BannerWrapper = styled.div`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    gap: ${theme.grid.gutter};
    justify-content: center;

    ${media.lessThan('large')`
      flex-direction: column;

      & > * {
        max-width: 60%;
        width: 100%;
      }
    `}

    ${media.greaterThan('large')`
      align-content: flex-start;
      flex-wrap: wrap;

      &:first-of-type {
        grid-area: left-banner;
      }

      &:last-of-type {
        grid-area: right-banner;
      }

      & > * {
        height: 35rem;
        width: 30rem;
      }
    `}
  `}
`
