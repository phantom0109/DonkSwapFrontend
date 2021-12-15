import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { LogoIcon } from '../../../components/Svg'
import Flex from '../../../components/Box/Flex'
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu'
import '@szhsin/react-menu/dist/index.css'

const MenuLinks = [

  ['Home', 'https://donkswaphomepage.netlify.app/'],
  ['DonkSeal', '#donk-seal'],
  ['Swap', '#swap'],
  ['Donkey King Casino', '#soon'],

  ['Home', '#home'],
  ['DonkSeal', '#donk-seal'],
  ['Swap', '#swap'],
  ['Donkey King Casino', '#casino'],

  // ['NFTs (soon)', '#soon'],
  // ['Pools', '#soon'],
  // ['Lottery', '#soon'],
  ['Donkey Mines', '#mine'],
  ['LinkTree', 'https://linktr.ee/DonkeyKingFinance'],
]

interface Props {
  isPushed: boolean
  isDark: boolean
  togglePush: () => void
  href: string
}
const FlexRow = styled.div`
  display: flex;
  
  flex-direction: row;
  width: 100%;
  margin-left: 1rem;
  @media (max-width: 840px) {
    width: 100%;
  }
`

const StyledLink = styled(Link)`
  display: flex;
  
  align-items: center;
  .mobile-icon {
    width: 32px;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: none;
    }
  }
  .desktop-icon {
    font-size: xx-large;
    font-weight: bolder;
    margin-left: 10px;
    font-family: 'Bungee Inline', cursive;
    color: #9d70c3;
    display: none;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: block;
    }
  }
`

const Logo: React.FC<Props> = ({ isPushed, togglePush, isDark, href }) => {
  const isAbsoluteUrl = href.startsWith('http')
  const innerLogo = (
    <div className="relative">
      <LogoIcon className="mobile-icon" />
      {/* @ts-ignore */}
      <h1 className="desktop-icon pointer" onClick={() => (window.location.href = '/')}>
        DonkSwap
      </h1>
    </div>
  )

  return (
    <>
      <Flex>
        {isAbsoluteUrl ? (
          <StyledLink as="a" href={href} aria-label="DonkSwap home page">
            {innerLogo}
          </StyledLink>
        ) : (
          <StyledLink to={href} aria-label="DonkSwap home page">
            {innerLogo}
          </StyledLink>
        )}
      </Flex>
      <FlexRow>
        <div className="md-up center pl-rem">
          {MenuLinks.map((d, x) => (
            <a
              href={d[1]}
              key={x}
              className="self-center font-bold ml-rem"
              id={`menu-${x}`}
              style={{
                fontWeight: 'bolder',
                color: 'rgb(140, 84, 187)',
              }}
            >
              {d[0]}
            </a>
          ))}
        </div>
        <div className="md-down center">
          <Menu menuButton={<div className="font-bold rounded-full pointer">Menu</div>}>
            {/* @ts-ignore */}
            {MenuLinks.map((d, x) => (
              <MenuItem key={x}>
                <a href={d[1]} className="font-bold">
                  {d[0]}
                </a>
              </MenuItem>
            ))}
          </Menu>
        </div>
      </FlexRow>
    </>
  )
}

export default React.memo(Logo, (prev, next) => prev.isPushed === next.isPushed && prev.isDark === next.isDark)
