'use client'

import styled, { DefaultTheme, css } from 'styled-components'
import { TextFieldProps } from '.'

type WrapperProps = Pick<TextFieldProps, 'disabled'> & { $error?: boolean }

export const Label = styled.label`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    cursor: pointer;
    display: block;
    font-size: ${theme.fonts.sizes.small};
    margin-bottom: calc(${theme.spacings.tiny} / 2);
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
    margin-bottom: calc(${theme.spacings.tiny} / 2);

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
    padding-block: ${theme.spacings.tiny};
    outline: none;
    width: 100%;
  `}
`

export const Error = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.alert};
    font-size: ${theme.fonts.sizes.small};
  `}
`

const wrapperModifiers = {
  error: (theme: DefaultTheme) => css`
    ${InputWrapper} {
      border-color: ${theme.colors.alert};
    }
    ${Label} {
      color: ${theme.colors.alert};
    }
  `,

  disabled: (theme: DefaultTheme) => css`
    ${Label},
    ${Input} {
      cursor: not-allowed;
      color: ${theme.colors.darkGray};
      &::placeholder {
        color: currentColor;
      }
    }
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, $error, disabled }) => css`
    margin-bottom: ${theme.spacings.regular};
    width: 100%;
    ${disabled && wrapperModifiers.disabled(theme)}
    ${$error && wrapperModifiers.error(theme)}
  `}
`
