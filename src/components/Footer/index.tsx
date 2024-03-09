import * as Styled from './styles'

import Logo from '@/components/Logo'

const Footer = () => (
  <Styled.Wrapper>
    <Logo $size="large" />
    <Styled.LinkList>
      <Styled.Anchor href="/">Home</Styled.Anchor>
      <Styled.Anchor href="/">Search</Styled.Anchor>
    </Styled.LinkList>
    <Styled.Copy>Travel Ease 2024 © All rights reserved.</Styled.Copy>
  </Styled.Wrapper>
)

export default Footer
