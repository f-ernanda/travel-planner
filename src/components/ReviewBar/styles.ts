'use client'

import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;

    > * {
      color: ${theme.colors.primary};
      flex: 0 0 100%;
      max-width: 4.8rem;
    }
  `}
`
