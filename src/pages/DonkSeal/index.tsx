import React from 'react'
import './donkseal.css';
import AppBody from '../AppBody'
import { CardBody, Button } from '../../uikit'
import { AutoColumn } from 'components/Column'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'
import MaterialTable from 'material-table'
import axios from 'axios'
import { Paper } from '@material-ui/core'
import { useRef, useState } from 'react';

export default function DonkSeal() {
  const donkSealModalRef = useRef<HTMLDivElement>(null);
  const modalBackgroundRef = useRef<HTMLDivElement>(null);
  const coinWebsiteRef = useRef<HTMLAnchorElement>(null);
  const coinLogoRef = useRef<HTMLElement>(null);
  const coinAuditRef = useRef<HTMLElement>(null);
  const coinScanRef = useRef<HTMLElement>(null);
  const tokenSummaryRef = useRef<HTMLElement>(null);
  const coinNameRef = useRef<HTMLElement>(null);
  const coinAddressRef = useRef<HTMLElement>(null);
  const [coinName, setCoinName] = useState();
  const [coinAddress, setCoinAddress] = useState();
  const [coinLogoPic, setCoinLogoPic ] = useState();
  const [coinwebsite, setCoinWebsite] = useState();
  const [coinaudit, setCoinAudit] = useState();
  const [coinscan, setCoinScan] = useState();
  const [tokensummary, setTokenSummary] = useState();
  const [Data, setData] = React.useState([{}])
  //   function addComm(x) {
  //     return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
  //   }
  const theme = useTheme()
  const sm = useMediaQuery(theme.breakpoints.down(576))
  const xs = useMediaQuery(theme.breakpoints.down(300))
  React.useEffect(() => {
    const options = {
      method: 'GET',
      url: '/.netlify/functions/add',
    }
    axios
      //@ts-ignore
      .request(options)
      .then(function (response) {
        console.log('response', response)
        setData(response.data)
      })
      .catch(function (error) {
        console.error('error', error)
        setData([

          {
            _id: '0x3969Fe107bAe2537cb58047159a83C33dfbD73f9',
            coinName: 'DonkSwap Token (DST)',
            coinAddress: '0x3969Fe107bAe2537cb58047159a83C33dfbD73f9',
            coinLogo:
              'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/assets/0x1F82a9b541FE4C322B5cd81DCB066620D57de35C/logo.png',
            coinWebsite: 'https://donk.finance',
            auditFile: 'https://github.com/Watchtower-WTW/Public_Audits/blob/main/DONKSWAP%20Smart%20Contract%20Security%20Audit%20(2).pdf',
            auditLogo: 'https://i.ibb.co/jHTbY4v/Watchtower.jpg',
            summary:'DonkSwap is the official exchange of Donkey King Finance. The goal of DonkSwap is to bring back confidence to the crypto space as only rug-proof projects will be allowed to list. DonkSwap Token is the official currency of Donkey King Finance. $DST will provide financial support and stability to the project and each of its entities. To date, Donkey King Finance and their subsidiary, DonkSwap, have processed over $1 million in transactions since launching on September 1, 2021.'
          },
          {
            _id: '0xf3b5a7093686d297b5b343f23fd901bda7d66cbc',
            coinName: 'Bellatrix Token  (BLTRX)',
            coinAddress: '0xf3b5a7093686d297b5b343f23fd901bda7d66cbc',
            coinLogo:
              'https://i.ibb.co/y45pGc7/Bellatrix-Token.jpg',
            coinWebsite: 'https://bellatrix.money/',
            auditFile: '',
            auditLogo: 'https://i.ibb.co/QnRJ1wP/coming-soon-modified.png',
            summary: 'The only utility coin that will help struggling college students with grants. The primary goal of $BLTRX is to assist low-income families with getting ahead of their school loan payments. Bellatrix is here to provide a necessary solution to students struggling to pay off their debt.'
          },
          {
            _id: '0x6a73a99fac60c265863307c5a40abf32f0a040ac',
            coinName: 'CryoGen  (CRYOGEN)',
            coinAddress: '0x6a73a99fac60c265863307c5a40abf32f0a040ac',
            coinLogo:
              'https://i.ibb.co/GHM8K8F/Cryogen.png',
            coinWebsite: 'https://cryogen.life/',
            auditFile: 'https://cryogen.life/audit.pdf',
            auditLogo: 'https://i.ibb.co/9rZRfTB/tuxpi-com-1641341635-removebg-preview.png',
            summary: 'Cryogen is a Decentralized Application (dApp) Development Company. They aim to be at the forefront of next generation Web3.0 application development. The team is working to integrate the internet we all know with block-chain technology in Web3 format. Their unique applications are for both consumers & developers to use in their everyday online lives.'
          },
          {
            _id: '0xEB78DfD268cEE4d50cFA3228b4d112aBa7C105BC',
            coinName: 'Crypto Jackpot  (CJP)',
            coinAddress: '0xEB78DfD268cEE4d50cFA3228b4d112aBa7C105BC',
            coinLogo:
              'https://i.ibb.co/xjrYngM/Crypto-Jackpot-removebg-preview.png',
            coinWebsite: 'https://crypto-jackpot.com/',
            auditFile: '',
            auditLogo: 'https://i.ibb.co/QnRJ1wP/coming-soon-modified.png',
            summary: 'Crypto Jackpot is the first decentralized global lottery. They aim to become the biggest cryptocurrency giveaway token on the BSC network. The $CJP tokenomics supply the jackpot pool with every transaction. Crypto Jackpot is a BEP-20 token on the Binance Smart Chain with a max supply of 2 billion tokens. The core use case is to reward holders through multiple giveaways that are built into the $CJP contract.'
          },
          {
            _id: '0x4492cA0AFF6D603e18Aea5075B49A5ff76b9Ea06',
            coinName: 'Farmageddon  (FG)',
            coinAddress: '0x4492cA0AFF6D603e18Aea5075B49A5ff76b9Ea06',
            coinLogo:
              'https://i.imgur.com/5AGI34Z.png',
            coinWebsite: 'https://farmageddon.farm',
            auditFile: 'https://8cbbe279-3c83-4cff-a3ee-23bb45499061.usrfiles.com/ugd/8cbbe2_311364b869d6495c9e1b4ae03c2d2618.pdf',
            auditLogo: 'https://i.ibb.co/6WP1kML/flylogo.png',
            summary: '$FG and $FRT tokens will be used to power a platform bringing the lucrative yet complicated process of yield farming to the masses. Farmageddon is simplifying the process of staking. After choosing the Farm you want to stake, you only need to enter the quantity of tokens you want staked - leave the rest to them. As your harvest starts growing, you will be able to compound your rewards back into the farm with one simple click! Not only are they simplifying the staking process, they are also bringing yield farms to one site. DonkSwap farms and PancakeSwap Farms are currently available on their platform.'
          },
          {
            _id: '0xd51237a6f3219d186f0c8d8dd957b1bcb3ce5d48',
            coinName: 'Fertilizer   (FRT)',
            coinAddress: '0xd51237a6f3219d186f0c8d8dd957b1bcb3ce5d48',
            coinLogo:
              'https://i.ibb.co/6NYCfDT/photo1633193176.jpg',
            coinWebsite: 'https://farmageddon.farm',
            auditFile: 'https://8cbbe279-3c83-4cff-a3ee-23bb45499061.usrfiles.com/ugd/8cbbe2_311364b869d6495c9e1b4ae03c2d2618.pdf',
            auditLogo: 'https://i.ibb.co/6WP1kML/flylogo.png',
            summary: '$FG and $FRT tokens will be used to power a platform bringing the lucrative yet complicated process of yield farming to the masses. Farmageddon is simplifying the process of staking. After choosing the Farm you want to stake, you only need to enter the quantity of tokens you want staked - leave the rest to them. As your harvest starts growing, you will be able to compound your rewards back into the farm with one simple click! Not only are they simplifying the staking process, they are also bringing yield farms to one site. DonkSwap farms and PancakeSwap Farms are currently available on their platform.'
          },
          {
            _id: '0x80dc7bd1328f5e48e8e22884169ba46f9279201b',
            coinName: 'Flappy Doge  (FLPD)',
            coinAddress: '0x80dc7bd1328f5e48e8e22884169ba46f9279201b',
            coinLogo:
              'https://i.ibb.co/Th8D0Xf/photo1642553910-removebg-preview.png',
            coinWebsite: 'https://flappydoge.org/',
            auditFile: 'https://hazecrypto.net/audit/flpd',
            auditLogo: 'https://i.ibb.co/bB5ByB3/Haze-Security-Audit-removebg-preview.png',
            summary: 'FlappyDoge is a play2earn company. Similar to companies like "Epic Games”, FlappyDoge will release multiple games through DAO integration so that the community is able to decide what is best for the company in terms of game selection. $FLPD will act as the main currency for each project, delivering value and utility to the token. FlappyDoge will also have an NFT Marketplace which will be integrated with web3. The goal is to allow users to purchase skins and trade them with other players. An additional use case of $FLPD is the launchpad feature which allows other projects to join the FlappyDoge ecosystem based on a community vote. Partner projects will pay a fee to join which adds funds to the treasury for future buy backs, burns as well as expanding the team.'
          },
          {
            _id: '0xfCaC1a3eDE7b55Cc51e3eBff2885a67FBfE01a1A',
            coinName: 'InfiniteOne  (IF1)',
            coinAddress: '0xfCaC1a3eDE7b55Cc51e3eBff2885a67FBfE01a1A',
            coinLogo:
              'https://i.ibb.co/SQ0xWRh/IF1-black-on-purp.jpg',
            coinWebsite: 'https://infiniteone.io/',
            auditFile: 'https://github.com/ScientificChickenSander/EggChainCertifiedAudits/blob/main/EggChainAudit-InfiniteOne-14092021.pdf',
            auditLogo: 'https://i.ibb.co/9W1CdQm/Egg-C-Audit-Logo.png',
            summary: 'InfiniteOne Token is the only token you truly need in your wallet. By holding IF1 you earn multiple rewards, from reflections to airdrops of other great tokens. The InfiniteOne Team thoroughly vets each project prior to airdropping the tokens to their loyal holders.  After passing the strenuous vetting process, InfiniteOne holders will acquire a wallet of tokens with the amount varying based upon how much IF1 they hold. Holders benefit by being able to learn about a new project they might not have heard of and partner projects benefit by increasing their holders.'
          },
          {
            _id: '0x56aa0237244c67b9a854b4efe8479cca0b105289',
            coinName: 'WalletNow  (WNOW)',
            coinAddress: '0x56aa0237244c67b9a854b4efe8479cca0b105289',
            coinLogo:
              'https://i.ibb.co/WKf2H4F/avatar-1245426702-0-removebg-preview.png',
            coinWebsite: 'https://walletnow.net/',
            auditFile: 'https://github.com/Watchtower-WTW/Public_Audits/blob/main/Wallet%20Now%20Smart%20Contract%20Security%20Audit.pdf',
            auditLogo: 'https://i.ibb.co/jHTbY4v/Watchtower.jpg',
            summary: 'WalletNow is an advanced crypto portfolio monitoring solution. It aggregates all your DeFi & CeFi investments in a searchable table and actively monitors it with an integrated Telegram Bot. With detailed LP information, impermanent loss and yields calculation, it offers tools to keep your wallets under your control.'
          },
          {
            _id: '0x1967ABfdc4ae7961C5a8A5395469222260C27c02',
            coinName: 'Watchtower  (WTW)',
            coinAddress: '0x1967ABfdc4ae7961C5a8A5395469222260C27c02',
            coinLogo:
              'https://i.ibb.co/jHTbY4v/Watchtower.jpg',
            coinWebsite: 'https://www.cryptowatchtower.io/',
            auditFile: '',
            auditLogo: 'https://i.ibb.co/QnRJ1wP/coming-soon-modified.png',
            summary: 'Watchtower was founded in 2021 to combat Scamming activity in the De-centralized Cryptocurrency exchange space. Watchtower was hired to audit the DonkSwap Token Smart Contract'
          },
        ])
      })
  }, [])

const closeModal = () => {
  modalBackgroundRef.current.classList.remove('active');
  donkSealModalRef.current.classList.remove('active');
}


  return (
    <>
      {/* @ts-ignore */}
      <style jsx global>{`
        .donkLogo {
          display: none !important;
        }
      `}</style>
      <img src="/donk-seal.png" style={{ zIndex: 0, width: 'min-content', marginBottom: 26, marginTop: '-31px' }} />
      <AppBody max >
        <CardBody >
          <AutoColumn gap="md">
            <div style={{ maxWidth: '100%'}} className="donkseal-whole-container">
              <MaterialTable
                components={{
                  Container: (props) => <Paper {...props} elevation={0} style={{width: '100%'}}/>,
                  Action: (props) => {
                    return (
                      <>
                        {!xs && props.data.coinName && (
                          <Button onClick={(event?: any) => props.action.onClick(event, props.data)} style={{marginRight: '10px', fontSize:'12px', width: '120px'}} className="partner-swap-button">Learn More</Button>
                        )}
                      </>
                    )
                  },
                }}
                columns={[
                  {
                    title: 'Name',
                    field: 'coinName',
                    render: (rD) => (
                      <div className="partner-title"
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'flex-start',
                        }}
                      >
                        {/*@ts-ignore */}
                        <img src={rD.coinLogo} style={{ width: 50, borderRadius: '50%' }} />

                        <strong className="ml-rem">
                          {/* @ts-ignore */}
                          <a href={rD?.coinWebsite}>
                            {/* @ts-ignore */}
                            {rD?.coinName}
                          </a>
                        </strong>

                      </div>

                    ),
                  },
                    // {
                    //   title: 'Price',
                    //   field: 'price',
                    //   type: 'numeric',
                    //   hidden: sm,
                    // },
                    // {
                    //   title: 'Circulating Supply',
                    //   field: 'csupply',
                    //   type: 'numeric',
                    //   render: (rowData) => <>{addComm(rowData.csupply)}</>,
                    //   hidden: matches,
                    // },


                  // {
                  //   title: 'Audit',
                  //   field: 'audit',
                  //   render: (rD) => (
                  //     <div className="audit-img"
                  //       style={{
                  //         display: 'flex',
                  //         flexDirection: 'row',
                  //         alignItems: 'center',
                  //         justifyContent: 'flex-start',
                  //       }}
                  //     >
                  //       {/* @ts-ignore */}
                  //       <a href={rD?.auditFile}>
                  //         {/* @ts-ignore */}
                  //         <img src={rD?.auditLogo} style={{ width: 50, borderRadius: '50%' }} />
                  //       </a>
                  //     </div>
                  //   ),
                  // },
                ]}

                //@ts-ignore
                data={Data}
                title="DonkSwap Seal Of Approval"
                options={{
                  headerStyle: {
                    fontStyle: 'bold',
                    fontFamily: 'Poppins',
                  },
                  actionsColumnIndex: -1,
                  search: !sm,
                }}
                actions={[
                  {
                    icon: 'Swap Now',
                    tooltip: 'Swap or Add Liquidity',
                    onClick: (event, data) => {
                      event.preventDefault()
                      // @ts-ignore
                      // window.location.href = `/#/swap?inputCurrency=${data?.coinAddress}`
                      modalBackgroundRef.current.classList.add('active');
                      donkSealModalRef.current.classList.add('active');
                      // @ts-ignore
                      setCoinName(coinNameRef.current = `${data?.coinName}`)
                      // @ts-ignore
                      setCoinAddress(coinAddressRef.current.href = `${data?.coinAddress}`)
                      // @ts-ignore
                      setCoinLogoPic(coinLogoRef.current = `${data?.coinLogo}`);
                      // @ts-ignore
                      setCoinWebsite(coinWebsiteRef.current = `${data?.coinWebsite}`);
                       // @ts-ignore
                      setCoinAudit(coinAuditRef.current = `${data?.auditFile}`);
                       // @ts-ignore
                      setCoinScan(coinScanRef.current = `https://bscscan.com/address/${data?.coinAddress}`);
                        // @ts-ignore
                      setTokenSummary(tokenSummaryRef.current = `${data?.summary}`);
                      
                    },
                  },
                ]}
              />
              <div onClick={closeModal} ref={modalBackgroundRef} className='modal-background'>
              </div>
              <div ref={donkSealModalRef} className='donkseal-pop-up-modal'>
                <div  onClick={closeModal}  id="close-modal" style={{fontSize: '22px'}}>&times;</div>
                  {/* @ts-ignore */}
                    <img ref={coinLogoRef} className="tokenlogo-profile-pic" src={coinLogoPic} alt="" />
                    {/* @ts-ignore */}
                      <h3 ref={coinNameRef}>{coinName}</h3>
                         {/* @ts-ignore */}
                          <p ref={coinAddressRef} style={{ fontSize:'12px'}}>{coinAddress}</p>
                      <div className='token-menu-div'>                       
                          {/* @ts-ignore */}
                          <a ref={coinWebsiteRef} href={coinwebsite} target='_blank'>
                            <p> Website </p>
                          </a>
                          |
                          {/* @ts-ignore */}
                          <a ref={coinAuditRef} href={coinaudit} target='_blank'>
                            <p> Audit </p>
                          </a>
                          |                                              
                          {/* @ts-ignore */}
                          <a ref={coinScanRef} href={coinscan} target='_blank'>
                            <p> BSC Scan </p>
                          </a>                                              
                        </div>
                  <h3>Summary of project:</h3>
                  {/* @ts-ignore */}
                  <p ref ={tokenSummaryRef}  style={{ fontSize:'12px',lineHeight: '1rem', marginBottom:'20px'}}>
                    {tokensummary} 
                  </p>
              </div>
            </div>
          </AutoColumn>
        </CardBody>
      </AppBody>
    </>
  )
}

// http://localhost:3000/#/swap?inputCurrency=0xcEE96f45B1B55c7f836dE13Ab04Bf4Cb6a1bbED2
