'use client'

import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import Image from 'next/image'

export const Wrapper = styled.article`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border-radius: ${theme.borders.radius};
    box-shadow: 0 0.4rem 0.5rem 0 rgba(0, 0, 0, 0.2);
    padding: ${theme.spacings.regular} ${theme.spacings.small};

    ${media.greaterThan('medium')`
      align-items: center;
      display: grid;
      gap: ${theme.spacings.regular};
      grid-template-areas:
        'img img'
        'title list';
      grid-template-columns: 1fr 2fr;
    `};
  `}
`

export const ImageBox = styled.div`
  animation: skeleton-loading 1s linear infinite alternate;
  height: 30rem;
  position: relative;
  width: 100%;

  ${media.greaterThan('medium')`
    grid-area: img;
    height: 50rem;
  `};

  @keyframes skeleton-loading {
    0% {
      background-color: hsl(200, 20%, 80%);
    }
    100% {
      background-color: hsl(200, 20%, 95%);
    }
  }
`

export const ImageItem = styled(Image)`
  ${({ theme }) => css`
    border-radius: ${theme.borders.radius};
    object-fit: cover;
  `}
`

export const TitleWrapper = styled.div`
  ${({ theme }) => css`
    ${media.lessThan('medium')`
      align-items: baseline;
      display: flex;
      gap: ${theme.grid.gutter};
      margin-block: ${theme.spacings.regular};

      > *:first-child {
        border-right: ${theme.thickness.thin} solid ${theme.colors.primary};
        padding-right: ${theme.grid.gutter};

        &::after {
          border-bottom: none;
        }
      }

      > h3 {
        font-size: ${theme.fonts.sizes.regular};
      }
    `};

    ${media.greaterThan('medium')`
    align-self: self-start;
    grid-area: title;
    > *:first-child {
      margin-bottom: ${theme.spacings.large};
    }

    > h3 {
        font-size: ${theme.fonts.sizes.large};
      }
`};
  `}
`

export const List = styled.ul`
  ${({ theme }) => css`
    list-style-type: circle;

    ${media.lessThan('medium')`
      display: flex;
      flex-wrap: wrap;
      gap: ${theme.grid.gutter};
    `};

    ${media.greaterThan('medium')`
      display: grid;
      gap: ${theme.grid.gutter};
      grid-area: list;
      grid-template-columns: minmax(min-content, auto) minmax(min-content, auto);
    `};
  `}
`

export const ListItem = styled.li`
  list-style-position: inside;
`
