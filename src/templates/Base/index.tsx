'use client'
import * as Styled from './styles'

import Menu from '@/components/Menu'
import Footer from '@/components/Footer'
import { Container } from '@/utils/container-utils'

export type BaseTemplateProps = {
  children: React.ReactNode
  $withFlex?: boolean
}

const Base = ({ $withFlex = false, children }: BaseTemplateProps) => {
  return (
    <Styled.Wrapper>
      <Container>
        <Styled.MenuContainer>
          <Menu />
        </Styled.MenuContainer>
        <Styled.Content $withFlex={$withFlex}>{children}</Styled.Content>
        <Styled.FooterContainer>
          <Footer />
        </Styled.FooterContainer>
      </Container>
    </Styled.Wrapper>
  )
}

export default Base
