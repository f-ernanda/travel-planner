'use client'

import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
  ${({ theme }) => css`
    margin-inline: auto;
    max-width: ${theme.grid.container};
    padding-inline: calc(${theme.grid.gutter} / 2);
    width: 100%;

    ${media.lessThan('medium')`
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    `}
  `}
`
