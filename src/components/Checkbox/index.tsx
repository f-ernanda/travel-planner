import { InputHTMLAttributes } from 'react'
import * as Styled from './styles'

export type CheckboxProps = {
  checked?: boolean
  label?: string
  labelFor?: string
  value?: string | ReadonlyArray<string> | number
} & InputHTMLAttributes<HTMLInputElement>

const Checkbox = ({
  checked = false,
  label,
  labelFor = '',
  value,
  ...props
}: CheckboxProps) => (
  <Styled.Wrapper>
    <Styled.Input type="checkbox" value={value} checked={checked} {...props} />
    {!!label && <Styled.Label htmlFor={labelFor}>{label}</Styled.Label>}
  </Styled.Wrapper>
)

export default Checkbox
