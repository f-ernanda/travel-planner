'use client'

import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: ${theme.grid.gutter};
    max-height: 30vh;
  `}
`
