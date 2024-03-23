'use client'

import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    border-radius: ${theme.borders.radius};
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.small};

    ${media.greaterThan('medium')`
      display: grid;
      grid-template-columns: 1fr repeat(2, 1fr);
      grid-template-areas:
        'img title title'
        'img info info';
      min-width: 60rem;
      width: 100%;
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
    height: 20rem;

    ${media.greaterThan('medium')`
    border-radius: ${theme.borders.radius} 0 0 ${theme.borders.radius};
      grid-area: img;
    `}
  `}
`

export const Heading = styled.div`
  ${({ theme }) => css`
    animation: skeleton-loading 1s linear infinite alternate;
    border-radius: ${theme.borders.radius};
    height: 30%;
    margin: ${theme.spacings.small};
    margin-left: 0;

    ${media.greaterThan('medium')`
        grid-area: title;
        align-self: center;
      `}
  `}
`

export const TravelContainer = styled.div`
  ${({ theme }) => css`
    animation: skeleton-loading 1s linear infinite alternate;
    border-radius: ${theme.borders.radius};
    height: 60%;
    margin: ${theme.spacings.small};
    margin-left: 0;

    ${media.greaterThan('medium')`
      grid-area: info;
    `}
  `}
`
