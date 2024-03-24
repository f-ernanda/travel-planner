'use client'

import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.article`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    border-radius: ${theme.borders.radius};
    display: grid;
    gap: ${theme.grid.gutter};
    grid-template-areas:
      'img'
      'title'
      'info';
    width: 100%;

    ${media.greaterThan('medium')`
      grid-template-columns: 1fr repeat(2, 1fr);
      grid-template-areas:
        'img title title'
        'img info info';
      min-width: 60rem;
    `}

    @keyframes skeleton-loading {
      0% {
        background-color: hsl(200, 20%, 80%);
      }
      100% {
        background-color: hsl(200, 20%, 95%);
      }
    }
  `}
`

export const ImageBox = styled.div`
  ${({ theme }) => css`
    animation: skeleton-loading 1s linear infinite alternate;
    border-radius: ${theme.borders.radius} ${theme.borders.radius} 0 0;
    grid-area: img;
    height: 20rem;

    ${media.greaterThan('medium')`
      border-radius: ${theme.borders.radius} 0 0 ${theme.borders.radius};
    `}
  `}
`

export const Heading = styled.div`
  ${({ theme }) => css`
    animation: skeleton-loading 1s linear infinite alternate;
    border-radius: ${theme.borders.radius};
    grid-area: title;
    height: 4rem;
    margin: ${theme.spacings.small};
    place-self: stretch;

    ${media.lessThan('medium')`
      margin-bottom: 0;
    `}

    ${media.greaterThan('medium')`
      margin-left: 0;
    `}
  `}
`

export const TravelWrapper = styled.div`
  ${({ theme }) => css`
    animation: skeleton-loading 1s linear infinite alternate;
    border-radius: ${theme.borders.radius};
    grid-area: info;
    height: 7rem;
    margin: ${theme.spacings.small};
    place-self: stretch;

    ${media.greaterThan('medium')`
      margin-left: 0;
    `}
  `}
`
