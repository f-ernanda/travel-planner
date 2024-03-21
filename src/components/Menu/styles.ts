'use client'

import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.menu`
  ${({ theme }) => css`
    padding-block: ${theme.spacings.small};
  `}
`

export const MenuWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    cursor: pointer;
    width: 4.8rem;
  `}
`

type MenuMobileProps = {
  $isOpen: boolean
}

export const MenuMobile = styled.nav<MenuMobileProps>`
  ${({ theme, $isOpen }) => css`
    opacity: ${$isOpen ? 1 : 0};
    pointer-events: ${$isOpen ? 'all' : 'none'};
    background: ${theme.colors.black};
    bottom: 0;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: space-between;
    left: 0;
    overflow: hidden;
    position: absolute;
    right: 0;
    top: 0;
    transition: opacity ${theme.transitions.default};
    z-index: 2;

    ${IconWrapper} {
      position: absolute;
      right: 0;
      top: 2rem;
    }

    ${MenuList} {
      align-items: center;
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: center;
    }

    ${MenuLink} {
      transform: ${$isOpen ? 'translateY(0)' : 'translateY(3rem)'};
      color: ${theme.colors.white};
      font-size: ${theme.fonts.sizes.large};
      font-weight: ${theme.fonts.bold};
      margin-bottom: ${theme.spacings.small};
      transition: transform ${theme.transitions.default};
    }

    ${AuthenticationPanel} {
      align-items: center;
      display: flex;
      flex-direction: column;
      padding: ${theme.spacings.regular};
      padding-top: 0;

      > span {
        color: ${theme.colors.white};
        display: block;
        font-size: ${theme.fonts.sizes.tiny};
        margin-block: ${theme.spacings.small};
      }

      transform: ${$isOpen ? 'translateY(0)' : 'translateY(3rem)'};
      transition: transform ${theme.transitions.default};
    }
  `}
`

export const MenuList = styled.div`
  ${({ theme }) => css`
    ${media.greaterThan('medium')`
      align-items: center;
      display: flex;
      gap: calc(${theme.grid.gutter} * 2) ;
    `}
  `}
`

export const MenuLink = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.fonts.sizes.regular};
    position: relative;
    text-align: center;
    text-decoration: none;

    &:hover {
      &::after {
        content: '';
        animation: onHover 0.3s forwards;
        background-color: ${theme.colors.primary};
        display: block;
        position: absolute;
        height: 0.4rem;
      }

      @keyframes onHover {
        from {
          width: 0;
          left: 50%;
        }
        to {
          width: 100%;
          left: 0;
        }
      }
    }
  `}
`

export const AuthenticationPanel = styled.div`
  ${({ theme }) => css`
    ${media.greaterThan('medium')`
      align-items: center;
      display: flex;
      gap: ${theme.grid.gutter};
    `}
  `}
`

export const SignUpLink = styled.a`
  ${({ theme }) => css`
    border-bottom: 0.2rem solid ${theme.colors.primary};
    color: ${theme.colors.primary};
    font-size: ${theme.fonts.sizes.regular};
    text-decoration: none;
  `}
`
