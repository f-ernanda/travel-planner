'use client'

import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import Image from 'next/image'

export const Wrapper = styled.article`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    border-radius: ${theme.borders.radius};
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.small};

    ${media.greaterThan('medium')`
      display: grid;
      grid-template-columns: 2fr repeat(2, 1fr);
      grid-template-areas:
        'img title details'
        'img info info';
    `}

    & > h2,
    & > *:last-child {
      margin-bottom: ${theme.spacings.small};
      margin-inline: ${theme.spacings.tiny};
    }

    & > h2 {
      ${media.greaterThan('medium')`
        grid-area: title;
        align-self: center;
      `}
    }

    & > *:last-child {
      ${media.greaterThan('medium')`
        grid-area: details;
        place-self: center end;
      `}
    }
  `}
`

export const ImageBox = styled.div`
  ${({ theme }) => css`
    animation: waveSkeleton 1s linear infinite forwards;
    background: ${theme.colors.lightGray};
    background-image: ${theme.backgrounds.wave};
    background-size: 80rem 20rem;
    border-radius: ${theme.borders.radius} ${theme.borders.radius} 0 0;
    height: 20rem;
    position: relative;
    width: 100%;

    @keyframes waveSkeleton {
      from {
        background-position: -40rem 0;
      }
      to {
        background-position: 40rem 0;
      }
    }

    ${media.greaterThan('medium')`
    border-radius: ${theme.borders.radius} 0 0 ${theme.borders.radius};
      grid-area: img;
    `}
  `}
`

export const ImageItem = styled(Image)`
  ${({ theme }) => css`
    border-radius: ${theme.borders.radius} ${theme.borders.radius} 0 0;
    object-fit: cover;

    ${media.greaterThan('medium')`
      border-radius: ${theme.borders.radius} 0 0 ${theme.borders.radius};
    `}
  `}
`

export const TravelContainer = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.small};
    padding: ${theme.spacings.tiny};

    ${media.greaterThan('medium')`
      grid-area: info;
    `}
  `}
`

export const TravelItem = styled.p`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    margin-bottom: ${theme.spacings.tiny};

    & > span:first-child {
      font-weight: ${theme.fonts.bold};
    }
  `}
`

export const Price = styled.span`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    border-radius: ${theme.borders.radius};
    color: ${theme.colors.white};
    margin-left: auto;
    min-width: 10rem;
    padding: 0 ${theme.spacings.tiny};
    text-align: center;

    ${media.greaterThan('medium')`
        background-color: transparent;
        color: ${theme.colors.primary};
        font-weight: ${theme.fonts.bold};
        text-align: right;
    `}
  `}
`
