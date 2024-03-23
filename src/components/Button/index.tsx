import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import * as Styled from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  children?: React.ReactNode
  $fullWidth?: boolean
  as?: React.ElementType
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
} & ButtonTypes

const Button = ({ children, $fullWidth = false, ...props }: ButtonProps) => (
  <Styled.Wrapper $fullWidth={$fullWidth} {...props}>
    {children && <span>{children}</span>}
  </Styled.Wrapper>
)

export default Button
