import { InputHTMLAttributes } from 'react'

import * as Styled from './styles'

export type TextFieldProps = {
  label?: string
  labelFor?: string
} & InputHTMLAttributes<HTMLInputElement>

const TextField = ({ label, labelFor = '', ...props }: TextFieldProps) => {
  return (
    <Styled.Wrapper>
      {label && <Styled.Label htmlFor={labelFor}>{label}</Styled.Label>}
      <Styled.InputWrapper>
        <Styled.Input type="text" {...props}></Styled.Input>
      </Styled.InputWrapper>
    </Styled.Wrapper>
  )
}

export default TextField
