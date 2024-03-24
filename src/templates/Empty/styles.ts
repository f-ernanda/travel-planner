'use client'

import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    text-align: center;

    & > p {
      color: ${theme.colors.white};
      margin-top: ${theme.spacings.regular};
    }
  `}
`
