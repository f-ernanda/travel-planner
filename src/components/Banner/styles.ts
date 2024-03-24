'use client'

import styled, { css } from 'styled-components'

export const Wrapper = styled.article`
  ${({ theme }) => css`
    align-items: start;
    background-color: ${theme.colors.white};
    border-radius: ${theme.borders.radius};
    box-shadow: 0 0.4rem 0.5rem 0 rgba(0, 0, 0, 0.2);
    display: grid;
    gap: ${theme.grid.gutter};
    grid-template-areas:
      'title title'
      'icon icon'
      'price button';
    grid-template-rows: repeat(2, 1fr) auto;
    padding: ${theme.spacings.regular} ${theme.spacings.small};
    max-width: 30rem;

    > *:first-child {
      grid-area: title;
    }

    > *:last-child {
      cursor: not-allowed;
      grid-area: button;
    }
  `}
`

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    flex-direction: column;
    grid-area: icon;

    > *:first-child {
      color: ${theme.colors.primary};
      width: 4.8rem;
    }

    > p {
      font-weight: ${theme.fonts.bold};
      margin-top: ${theme.spacings.tiny};
    }
  `}
`

export const Price = styled.span`
  ${({ theme }) => css`
    background-color: transparent;
    color: ${theme.colors.primary};
    font-weight: ${theme.fonts.bold};
    grid-area: price;
  `}
`
