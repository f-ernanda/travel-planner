'use client'

import styled, { css } from 'styled-components'

export const Wrapper = styled.button`
  ${({ theme }) => css`
    background: ${theme.colors.primary};
    border: 0;
    border-radius: ${theme.borders.radius};
    color: ${theme.colors.white};
    font-size: ${theme.fonts.sizes.small};
    padding: ${theme.spacings.small} ${theme.spacings.regular};
  `}
`
