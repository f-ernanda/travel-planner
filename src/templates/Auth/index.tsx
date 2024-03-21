import * as Styled from './styles'

type AuthProps = {
  children: React.ReactNode
}

const Auth = ({ children }: AuthProps) => (
  <Styled.Wrapper>{children}</Styled.Wrapper>
)

export default Auth
