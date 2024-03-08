'use client'

import styled, { css } from 'styled-components'

import { ButtonProps } from '.'

const wrapperModifiers = {
  fullWidth: () => css`
    width: 100%;
  `
}

export const Wrapper = styled.button<ButtonProps>`
  ${({ theme, $fullWidth }) => css`
    background: ${theme.colors.primary};
    border: 0;
    border-radius: ${theme.borders.radius};
    color: ${theme.colors.white};
    font-size: ${theme.fonts.sizes.small};
    padding: ${theme.spacings.small} ${theme.spacings.regular};

    ${$fullWidth && wrapperModifiers.fullWidth}
  `}
`
