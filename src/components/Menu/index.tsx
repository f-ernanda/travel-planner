import { useState } from 'react'
import * as Styled from './styles'
import { Menu as MenuIcon } from '@styled-icons/material-rounded/Menu'
import { Close as CloseIcon } from '@styled-icons/material-rounded/Close'

import LogoIcon from '@/components/LogoIcon'
import Button from '@/components/Button'

export type MenuProps = {
  $username?: string
}

const Menu = ({ $username }: MenuProps) => {
  const [$isOpen, setIsOpen] = useState(false)

  return (
    <Styled.Wrapper>
      <Styled.MenuWrapper>
        <LogoIcon />

        <Styled.IconWrapper>
          <MenuIcon aria-label="Open menu" onClick={() => setIsOpen(true)} />
        </Styled.IconWrapper>
      </Styled.MenuWrapper>

      <Styled.MenuMobile aria-hidden={!$isOpen} $isOpen={$isOpen}>
        <Styled.IconWrapper>
          <CloseIcon aria-label="Close menu" onClick={() => setIsOpen(false)} />
        </Styled.IconWrapper>

        <Styled.MenuList>
          <Styled.MenuLink href="#">Home</Styled.MenuLink>
          {$username && <Styled.MenuLink href="#">My account</Styled.MenuLink>}
        </Styled.MenuList>

        {!$username && (
          <Styled.AuthenticationPanel>
            <Button $fullWidth>Log in</Button>
            <span>or</span>
            <Styled.SignUpLink href="#">Sign up</Styled.SignUpLink>
          </Styled.AuthenticationPanel>
        )}
      </Styled.MenuMobile>
    </Styled.Wrapper>
  )
}

export default Menu
