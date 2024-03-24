'use client'

import { useState } from 'react'
import { Menu as MenuIcon } from '@styled-icons/material-rounded/Menu'
import { Close as CloseIcon } from '@styled-icons/material-rounded/Close'

import * as Styled from './styles'
import { MediaWrapper } from '@/utils/media-utils'
import Button from '@/components/Button'
import Logo from '@/components/Logo'
import Link from 'next/link'

export type MenuProps = {
  $username?: string
}

const Menu = ({ $username }: MenuProps) => {
  const [$isOpen, setIsOpen] = useState(false)

  return (
    <Styled.Wrapper>
      <MediaWrapper $lessThan="medium">
        <Styled.MenuWrapper>
          <Link href="/">
            <Logo $size="large" />
          </Link>
          <Styled.IconWrapper>
            <MenuIcon aria-label="Open menu" onClick={() => setIsOpen(true)} />
          </Styled.IconWrapper>
        </Styled.MenuWrapper>

        <Styled.MenuMobile aria-hidden={!$isOpen} $isOpen={$isOpen}>
          <Styled.IconWrapper>
            <CloseIcon
              aria-label="Close menu"
              onClick={() => setIsOpen(false)}
            />
          </Styled.IconWrapper>
          <Styled.MenuList>
            <Styled.MenuLink href="/">Home</Styled.MenuLink>
            {$username && (
              <Styled.MenuLink style={{ cursor: 'not-allowed' }}>
                My account
              </Styled.MenuLink>
            )}
          </Styled.MenuList>
          {!$username && (
            <Styled.AuthenticationPanel>
              <Button as={Link} $fullWidth href="/sign-in">
                Log in
              </Button>
            </Styled.AuthenticationPanel>
          )}
        </Styled.MenuMobile>
      </MediaWrapper>

      <MediaWrapper $greaterThan="medium">
        <Styled.MenuWrapper>
          <Link href="/">
            <Logo $size="large" />{' '}
          </Link>
          <Styled.MenuList>
            <Styled.MenuLink href="/">Home</Styled.MenuLink>
            {$username && (
              <Styled.MenuLink style={{ cursor: 'not-allowed' }}>
                My account
              </Styled.MenuLink>
            )}
            {!$username && (
              <Styled.AuthenticationPanel>
                <Button as={Link} href="/sign-in">
                  Log in
                </Button>
              </Styled.AuthenticationPanel>
            )}
          </Styled.MenuList>
        </Styled.MenuWrapper>
      </MediaWrapper>
    </Styled.Wrapper>
  )
}

export default Menu
