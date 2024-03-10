'use client'

import styled, { css } from 'styled-components'

import * as TextFieldStyles from '@/components/TextField/styles'
import * as ButtonStyles from '@/components/Button/styles'

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
