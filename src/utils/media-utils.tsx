'useClient'

import styled, { css } from 'styled-components'
import media, { DefaultBreakpoints } from 'styled-media-query'

type breakpoint = keyof DefaultBreakpoints

type MediaWrapperProps = {
  $lessThan?: breakpoint
  $greaterThan?: breakpoint
}

const mediaWrapperModifiers = {
  lessThan: (size: breakpoint) => css`
    ${media.lessThan(size)`
      display: block;
    `}
  `,

  greaterThan: (size: breakpoint) => css`
    ${media.greaterThan(size)`
      display: block;
    `}
  `
}

export const MediaWrapper = styled.div<MediaWrapperProps>`
  ${({ $lessThan, $greaterThan }) => css`
    display: none;

    ${$lessThan && mediaWrapperModifiers.lessThan($lessThan)}
    ${$greaterThan && mediaWrapperModifiers.greaterThan($greaterThan)}
  `}
`
