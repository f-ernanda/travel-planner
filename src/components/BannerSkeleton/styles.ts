'use client'

import styled, { css } from 'styled-components'

export const Wrapper = styled.article`
  ${({ theme }) => css`
    align-items: center;
    background-color: ${theme.colors.white};
    border-radius: ${theme.borders.radius};
    display: grid;
    gap: ${theme.grid.gutter};
    grid-template-areas:
      'heading'
      'icon'
      'footer';
    height: 30rem;
    padding: ${theme.spacings.regular} ${theme.spacings.small};
    max-width: 30rem;

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

export const Heading = styled.div`
  ${({ theme }) => css`
    animation: skeleton-loading 1s linear infinite alternate;
    border-radius: ${theme.borders.radius};
    grid-area: heading;
    height: 3rem;
    place-self: stretch;
  `}
`

export const IconWrapper = styled.div`
  animation: skeleton-loading 1s linear infinite alternate;
  border-radius: 50%;
  justify-self: center;
  grid-area: icon;
  height: 10rem;
  width: 10rem;
`

export const Footer = styled.div`
  ${({ theme }) => css`
    animation: skeleton-loading 1s linear infinite alternate;
    border-radius: ${theme.borders.radius};
    grid-area: footer;
    height: 5rem;
    place-self: stretch;
  `}
`
