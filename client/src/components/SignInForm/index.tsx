import * as Styled from './styles'

import Button from '@/components/Button'
import TextField from '@/components/TextField'

const SignInForm = () => (
  <Styled.Wrapper>
    <form>
      <TextField
        label="Email"
        labelFor="Email"
        name="Email"
        placeholder="Email"
        type="Email"
      />
      <TextField
        label="Password"
        labelFor="Password"
        name="Password"
        placeholder="Password"
        type="password"
      />
      <Button>Sign In</Button>
    </form>
  </Styled.Wrapper>
)

export default SignInForm
