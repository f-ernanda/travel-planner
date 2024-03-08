import React from 'react'
import * as Styled from './styles'

export type HeadingProps = {
  children: React.ReactNode
  $withHorizontalLine?: boolean
  $withVerticalLine?: boolean
}

const Heading = ({
  children,
  $withHorizontalLine = false,
  $withVerticalLine = false
}: HeadingProps) => (
  <Styled.Wrapper
    $withHorizontalLine={$withHorizontalLine}
    $withVerticalLine={$withVerticalLine}
  >
    {children}
  </Styled.Wrapper>
)

export default Heading
