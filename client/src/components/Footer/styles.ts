'use client'

import Link from 'next/link'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.footer`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: calc(${theme.grid.gutter} * 2);

    ${media.greaterThan('medium')`
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: 2fr 1fr;
    `}
  `}
`

export const LinkList = styled.div`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: ${theme.grid.gutter};

    ${media.greaterThan('medium')`
      grid-area: 1 / 2 / 3 / 3;
      justify-self: end;
    `}
  `}
`

export const Anchor = styled(Link)`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.fonts.sizes.regular};
    position: relative;
    text-decoration: none;

    &:hover {
      &::after {
        content: '';
        animation: onHover 0.3s forwards;
        background-color: ${theme.colors.primary};
        display: block;
        position: absolute;
        height: 0.4rem;
      }

      @keyframes onHover {
        from {
          width: 0;
          left: 50%;
        }
        to {
          width: 100%;
          left: 0;
        }
      }
    }
  `}
`

export const Copy = styled.small`
  ${({ theme }) => css`
    color: ${theme.colors.darkGray};
    font-size: ${theme.fonts.sizes.tiny};
    margin-block: ${theme.spacings.small};
  `}
`
