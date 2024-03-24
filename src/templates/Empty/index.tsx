'use client'
import * as Styled from './styles'

import Base from '../Base'
import Heading from '@/components/Heading'

const Empty = () => {
  return (
    <Base>
      <Styled.Wrapper>
        <Heading>Oops! Page not found</Heading>
        <p>We could not find the page you are looking for.</p>
      </Styled.Wrapper>
    </Base>
  )
}

export default Empty
