'use client'

import * as Styled from './styles'
import { FieldErrors, signInValidate } from '@/utils/form-utils'

import Button from '@/components/Button'
import TextField from '@/components/TextField'
import { useState } from 'react'

const SignInForm = () => {
  const [formErrorMessage, setFormErrorMessage] = useState('')
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})
  const [formValues, setFormValues] = useState({ email: '', password: '' })

  const handleInputChange = (fieldName: string, value: string) => {
    setFormValues((prevValues) => ({ ...prevValues, [fieldName]: value }))
    setFieldErrors((prevErrors) => ({ ...prevErrors, [fieldName]: '' }))
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    const errors = signInValidate(formValues)

    if (Object.keys(errors).length) {
      setFieldErrors(errors)
      setFormErrorMessage('Please correct the highlighted fields. ')
      return
    }

    try {
      window.location.href = '/'
    } catch (error) {
      setFormErrorMessage('Failed to sign in. Please try again later.')
    }
  }

  return (
    <Styled.Wrapper>
      <form aria-label="form" onSubmit={handleSubmit}>
        <TextField
          label="Email"
          labelFor="Email"
          id="Email"
          placeholder="Email"
          type="email"
          $error={fieldErrors?.email}
          $onInputChange={(value) => handleInputChange('email', value)}
        />
        <TextField
          label="Password"
          labelFor="Password"
          id="Password"
          placeholder="Password"
          type="password"
          $error={fieldErrors?.password}
          $onInputChange={(value) => handleInputChange('password', value)}
        />
        {formErrorMessage && (
          <Styled.FormError>{formErrorMessage}</Styled.FormError>
        )}
        <Button type="submit">Sign In</Button>
      </form>
    </Styled.Wrapper>
  )
}

export default SignInForm
