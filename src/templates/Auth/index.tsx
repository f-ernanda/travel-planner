'use client'

import SignInForm from '@/components/SignInForm'
import Base from '../Base'
import * as Styled from './styles'

const Auth = () => {
  return (
    <Base $withFlex>
      <Styled.Wrapper>
        <SignInForm />
      </Styled.Wrapper>
    </Base>
  )
}

export default Auth
