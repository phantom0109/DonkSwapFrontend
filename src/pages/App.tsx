import React, { Suspense } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import Popups from '../components/Popups'
import Web3ReactManager from '../components/Web3ReactManager'
import { RedirectDuplicateTokenIds, RedirectOldAddLiquidityPathStructure } from './AddLiquidity/redirects'
import { RedirectOldRemoveLiquidityPathStructure } from './RemoveLiquidity/redirects'
import AddLiquidity from './AddLiquidity'
import Pool from './Pool'
import PoolFinder from './PoolFinder'
import DonkSeal from './DonkSeal'
import RemoveLiquidity from './RemoveLiquidity'
import AddSeal from './AddSeal'
import DeleteSeal from './DeleteSeal'
import Swap from './Swap'
import { RedirectPathToSwapOnly } from './Swap/redirects'
import Menu from '../components/Menu'
import useGetDocumentTitlePrice from '../hooks/useGetDocumentTitlePrice'

import background_logo from 'src/uikit/widgets/Menu/icons/images/donk_transparent.png'

import Casino from './ComingSoonCasino'
import Mine from './ComingSoonMine'
import { HomePage } from './Home'


const AppWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  overflow-x: hidden;

background: #232526;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #414345, #232526);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #414345, #232526); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */



`

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 32px 16px;
  align-items: center;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 1;
  justify-content: center;
  background-repeat: no-repeat;
  background-position: bottom 24px center;
  background-size: 90%;








  

  ${({ theme }) => theme.mediaQueries.xs} {
    background-size: auto;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    background-video: url('/video/flying_poker.mp4');
    background-repeat: no-repeat;
    background-position: center 420px, 10% 230px, 90% 230px;
    background-size: contain, 266px, 266px;
    min-height: 90vh;
  }
`

const Marginer = styled.div`
  margin-top: 5rem;
`

export default function App() {
  useGetDocumentTitlePrice()

  return (
    <Suspense fallback={null}>
      <HashRouter>
        <AppWrapper>
          <img src="" />
          <Menu>
            <BodyWrapper>
              <Popups />
              <div className="relative h-full w-swap" id="donkLogo">
                <img
                  src="/og.png"
                  style={{ width: '120px', height: '120px', position: 'absolute', right: '5rem', top: -30, transform: 'scaleX(-1)' }}
                />
              </div>
              <h3 id="dex-title-under-logo" style={{fontSize: '30px'}}>Donkey King Finance</h3>
              <div className="relative h-full w-swap" id="donkLogo">
                <img
                  src="/Strong+DonkeySwap.webp"
                  style={{ position: 'absolute', right: '-16rem', top: 45, transform: 'scaleX(-1)' }}
                />
                <img src="/Strong+DonkeySwap.webp" style={{ position: 'absolute', left: '-16rem', top: 45 }} />
              </div>
              <Web3ReactManager>
                <Switch>
                  <Route exact path="/home" component={HomePage} />
                  <Route exact path="/donk-seal" component={DonkSeal} />
                  <Route exact path="/casino" component={Casino} />
                  <Route exact path="/mine" component={Mine} />
                  <Route exact strict path="/swap" component={Swap} />
                  <Route exact strict path="/find" component={PoolFinder} />
                  <Route exact strict path="/pool" component={Pool} />
                  <Route exact path="/add" component={AddLiquidity} />
                  <Route exact strict path="/remove/:currencyIdA/:currencyIdB" component={RemoveLiquidity} />
                  <Route exact path="/add/:currencyIdA" component={RedirectOldAddLiquidityPathStructure} />
                  <Route exact path="/add/:currencyIdA/:currencyIdB" component={RedirectDuplicateTokenIds} />
                  <Route exact strict path="/remove/:tokens" component={RedirectOldRemoveLiquidityPathStructure} />
                  <Route exact strict path="/add-seal" component={AddSeal} />
                  <Route exact strict path="/delete-seal" component={DeleteSeal} />
                  <Route component={RedirectPathToSwapOnly} />
                </Switch>
              </Web3ReactManager>
              <Marginer />
            </BodyWrapper>
          </Menu>
        </AppWrapper>
        <div className="copyrights">
          <p className="col">Copyright &copy; 2021. All Rights Reserved: Donkey King Finance</p>
        </div>
      </HashRouter>
    </Suspense>
  )
}
