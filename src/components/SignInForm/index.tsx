import * as Styled from './styles'

import Button from '../Button'
import TextField from '../TextField'

const SignInForm = () => (
  <Styled.Wrapper>
    <form>
      <TextField name="Email" placeholder="Email" type="Email" />
      <TextField name="Password" placeholder="Password" type="password" />
      <Button>Sign In</Button>
    </form>
  </Styled.Wrapper>
)

export default SignInForm
