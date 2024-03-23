'use client'

import styled, { css } from 'styled-components'

export const Wrapper = styled.div``

export const FormError = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.alert};
    font-size: ${theme.fonts.sizes.small};
    font-weight: ${theme.fonts.bold};
    margin-bottom: ${theme.spacings.regular};
  `}
`
