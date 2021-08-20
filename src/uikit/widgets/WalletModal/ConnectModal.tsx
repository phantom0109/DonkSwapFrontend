import React from 'react'
import styled from 'styled-components'
import { Link } from '../../components/Link'
// import { HelpIcon } from "../../components/Svg";
import { Modal } from '../Modal'
import WalletCard from './WalletCard'
import config from './config'
import { Login } from './types'

interface Props {
  login: Login
  onDismiss?: () => void
}

const ConnectModal: React.FC<Props> = ({ login, onDismiss = () => null }) => (
  <Modal title="Connect to a wallet" onDismiss={onDismiss}>
    {config.map((entry, index) => (
      <WalletCard
        key={entry.title}
        login={login}
        walletConfig={entry}
        onDismiss={onDismiss}
        mb={index < config.length - 1 ? "8px" : "0"}
      />
    ))}
      </Modal>
);

// const HelpLink = styled(Link)`
//   display: flex;
//   align-self: center;
//   align-items: center;
//   margin-top: 24px;
// `
// const AddBSC = () => {
//   const rpc = {
//     jsonrpc: '2.0',
//     method: 'wallet_addEthereumChain',
//     params: [
//       {
//         chainId: '0x142',
//         chainName: 'BSC Chain',
//         rpcUrls: ['https://bsc-dataseed1.defibit.io'],
//         iconUrls: ['https://pbs.twimg.com/profile_images/1344225709770776576/_A_lMzCW_400x400.png'],
//         nativeCurrency: {
//           name: 'BNB',
//           symbol: 'BNB',
//           decimals: 18,
//         },
//         blockExplorerUrls: null,
//       },
//     ],
//     id: 0,
//   }
//   try {
//     const provider = window.ethereum
//     // @ts-ignore
//     provider.request(rpc, () => {
//       return rpc
//     })
//   } catch (e) {
//     console.error(e)
//   }
// }
// const ConnectModal: React.FC<Props> = ({ login, onDismiss = () => null }) => (
//   <Modal title="Connect to a wallet" onDismiss={onDismiss}>
//     {config.map((entry, index) => (
//       <WalletCard
//         key={entry.title}
//         login={login}
//         walletConfig={entry}
//         onDismiss={onDismiss}
//         mb={index < config.length - 1 ? '8px' : '0'}
//       />
//     ))} 
//   </Modal>
// )

export default ConnectModal
