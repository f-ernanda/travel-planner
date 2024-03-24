'use client'

import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.grid.gutter};
    justify-content: center;

    > * {
      flex: 0 0 100%;
    }
  `}
`
