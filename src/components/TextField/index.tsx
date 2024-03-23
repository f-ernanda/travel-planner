import { InputHTMLAttributes, useState } from 'react'

import * as Styled from './styles'

export type TextFieldProps = {
  label?: string
  labelFor?: string
  disabled?: boolean
  $initialValue?: string
  $error?: string
  $onInputChange?: (value: string) => void
} & InputHTMLAttributes<HTMLInputElement>

const TextField = ({
  label,
  labelFor = '',
  disabled = false,
  $error,
  $initialValue = '',
  $onInputChange,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState($initialValue)

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.currentTarget.value
    setValue(newValue)
    $onInputChange && $onInputChange(newValue)
  }

  return (
    <Styled.Wrapper disabled={disabled} $error={!!$error}>
      {label && <Styled.Label htmlFor={labelFor}>{label}</Styled.Label>}
      <Styled.InputWrapper>
        <Styled.Input
          type="text"
          onChange={onChange}
          value={value}
          {...props}
        ></Styled.Input>
      </Styled.InputWrapper>
      {$error && <Styled.Error>{$error}</Styled.Error>}
    </Styled.Wrapper>
  )
}

export default TextField
