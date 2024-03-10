import React from 'react'
import * as Styled from './styles'

export type HeadingProps = {
  children: React.ReactNode
  $withHorizontalLine?: boolean
  $withVerticalLine?: boolean
  $color?: 'dark' | 'light'
}

const Heading = ({
  children,
  $withHorizontalLine = false,
  $withVerticalLine = false,
  $color = 'light'
}: HeadingProps) => (
  <Styled.Wrapper
    $withHorizontalLine={$withHorizontalLine}
    $withVerticalLine={$withVerticalLine}
    $color={$color}
  >
    {children}
  </Styled.Wrapper>
)

export default Heading
