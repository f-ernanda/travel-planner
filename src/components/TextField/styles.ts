'use client'

import styled, { css } from 'styled-components'

export const Wrapper = styled.div``

export const Label = styled.label`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    cursor: pointer;
    font-size: ${theme.fonts.sizes.small};
  `}
`

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.lightGray};
    border: 0.2rem solid;
    border-color: ${theme.colors.lightGray};
    border-radius: ${theme.borders.radius};
    display: flex;
    padding-inline: ${theme.spacings.small};
    &:focus-within {
      box-shadow: 0 0 0.2rem ${theme.colors.primary};
    }
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    background: transparent;
    border: 0;
    color: ${theme.colors.black};
    font-size: ${theme.fonts.sizes.regular};
    padding-block: ${theme.spacings.small};
    outline: none;
    width: 100%;
  `}
`
