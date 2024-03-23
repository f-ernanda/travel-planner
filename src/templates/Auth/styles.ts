'use client'

import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border-radius: ${theme.borders.radius};
    padding: ${theme.spacings.regular} ${theme.spacings.huge};

    ${media.lessThan('medium')`
      margin-bottom ${theme.spacings.regular};
    `}

    ${media.greaterThan('medium')`
      width: 50%;
    `}
  `}
`
