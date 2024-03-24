'use client'

import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.article`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border-radius: ${theme.borders.radius};
    height: 50rem;
    padding: ${theme.spacings.regular} ${theme.spacings.small};

    ${media.greaterThan('medium')`
      align-items: center;
      display: grid;
      gap: ${theme.spacings.regular};
      grid-template-areas:
        'img img'
        'title list';
      grid-template-columns: 1fr 2fr;
      height: 70rem;
    `};

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
    border-radius: ${theme.borders.radius};
    height: 30rem;

    ${media.greaterThan('medium')`
      grid-area: img;
      height: 50rem;
      place-self: stretch;
    `};
  `}
`

export const TitleWrapper = styled.div`
  ${({ theme }) => css`
    animation: skeleton-loading 1s linear infinite alternate;
    border-radius: ${theme.borders.radius};
    height: 3rem;

    ${media.lessThan('medium')`
      margin-block: ${theme.spacings.regular}
    `};

    ${media.greaterThan('medium')`
      grid-area: title;
      height: 10rem;
      place-self: stretch;
    `};
  `}
`

export const List = styled.ul`
  ${({ theme }) => css`
    animation: skeleton-loading 1s linear infinite alternate;
    border-radius: ${theme.borders.radius};
    height: 5rem;

    ${media.greaterThan('medium')`
      grid-area: list;
      height: 10rem;
      place-self: stretch;
    `};
  `}
`
