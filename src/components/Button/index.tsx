import * as Styled from './styles'

export type ButtonProps = {
  children?: React.ReactNode
}

const Button = ({ children }: ButtonProps) => (
  <Styled.Wrapper>{children && <span>{children}</span>}</Styled.Wrapper>
)

export default Button
