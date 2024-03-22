import * as Styled from './styles'

export type ButtonProps = {
  children?: React.ReactNode
  $fullWidth?: boolean
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button = ({ children, $fullWidth = false, ...props }: ButtonProps) => (
  <Styled.Wrapper $fullWidth={$fullWidth} {...props}>
    {children && <span>{children}</span>}
  </Styled.Wrapper>
)

export default Button
