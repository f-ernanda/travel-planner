import * as Styled from './styles'

export type ButtonProps = {
  children?: React.ReactNode
  $fullWidth?: boolean
}

const Button = ({ children, $fullWidth = false, ...props }: ButtonProps) => (
  <Styled.Wrapper $fullWidth={$fullWidth} {...props}>
    {children && <span>{children}</span>}
  </Styled.Wrapper>
)

export default Button
