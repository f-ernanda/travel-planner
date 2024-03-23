'use client'

import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: minmax(min-content, auto) minmax(min-content, auto);
    gap: ${theme.grid.gutter};
  `}
`
