'use client'

import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`
export const Input = styled.input`
  ${({ theme }) => css`
    appearance: none;
    align-items: center;
    border: 0.2rem solid ${theme.colors.darkGray};
    border-radius: 0.2rem;
    cursor: pointer;
    display: flex;
    height: 1.8rem;
    justify-content: center;
    outline: none;
    position: relative;
    transition: background border ${theme.transitions.fast};
    width: 1.8rem;

    &:before {
      border: 0.2rem solid ${theme.colors.white};
      border-top: 0;
      border-left: 0;
      content: '';
      height: 0.9rem;
      opacity: 0;
      position: absolute;
      transform: rotate(45deg);
      transition: ${theme.transitions.fast};
      top: 0.1rem;
      width: 0.6rem;
    }
    &:focus {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }

    &:hover {
      border-color: ${theme.colors.lightGray};
      transition: ${theme.transitions.fast};
    }

    &:checked {
      background: ${theme.colors.primary};
      border-color: ${theme.colors.primary};

      &:before {
        opacity: 1;
      }
    }
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    cursor: pointer;
    padding-left: ${theme.spacings.tiny};
    color: ${theme.colors.white};
    line-height: 1.8rem;
  `}
`
