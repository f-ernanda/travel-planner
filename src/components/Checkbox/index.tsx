import { InputHTMLAttributes, useState } from 'react'
import * as Styled from './styles'

export type CheckboxProps = {
  isChecked?: boolean
  label?: string
  labelFor?: string
  value?: string | ReadonlyArray<string> | number
  onCheck?: (status: boolean) => void
} & InputHTMLAttributes<HTMLInputElement>

const Checkbox = ({
  isChecked = false,
  label,
  labelFor = '',
  value,
  onCheck,
  ...props
}: CheckboxProps) => {
  const [checked, setChecked] = useState(isChecked)

  const onChange = () => {
    const status = !checked
    setChecked(status)

    onCheck && onCheck(status)
  }

  return (
    <Styled.Wrapper>
      <Styled.Input
        type="checkbox"
        value={value}
        checked={checked}
        onChange={onChange}
        {...props}
        id={labelFor}
      />
      {label && <Styled.Label htmlFor={labelFor}>{label}</Styled.Label>}
    </Styled.Wrapper>
  )
}

export default Checkbox
