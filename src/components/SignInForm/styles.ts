'use client'

import styled, { css } from 'styled-components'

import * as TextFieldStyles from '../TextField/styles'
import * as ButtonStyles from '../Button/styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    ${TextFieldStyles.Wrapper} {
      margin-block: ${theme.spacings.small};
    }

    ${ButtonStyles.Wrapper} {
      margin-block: ${theme.spacings.regular};
    }
  `}
`
