import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ButtonMenu, ButtonMenuItem } from '../../uikit'
import useI18n from 'hooks/useI18n'

const StyledNav = styled.div`
  margin-top: 25px;
  margin-bottom: 10px;
`

function Nav({ activeIndex = 0 }: { activeIndex?: number }) {
  const TranslateString = useI18n()
  return (
    <StyledNav>
      <ButtonMenu activeIndex={activeIndex} scale="sm" variant="secondary" id="swap-tabs">
        <ButtonMenuItem id="swap-nav-link" to="/swap" as={Link}>
          {TranslateString(1142, 'Swap')}
        </ButtonMenuItem>
        <ButtonMenuItem id="pool-nav-link" to="/pool" as={Link}>
          {TranslateString(262, 'Liquidity')}
        </ButtonMenuItem>
        <ButtonMenuItem
          id="pool-nav-link"
          as="a"
          target="_new"
          href="https://www.binance.org/en/bridge?utm_source=BinanceChain"
        >
          Bridge
        </ButtonMenuItem>
      </ButtonMenu>
    </StyledNav>
  )
}

export default Nav
