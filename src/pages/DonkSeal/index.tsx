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

export default function DonkSeal() {
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
          },
          {
            _id: '0xfCaC1a3eDE7b55Cc51e3eBff2885a67FBfE01a1A',
            coinName: 'InfiniteOne  (IF1)',
            coinAddress: '0xfCaC1a3eDE7b55Cc51e3eBff2885a67FBfE01a1A',
            coinLogo:
              'https://hosting.renderforestsites.com/13950379/628732/media/2090f945c1e38fd1d23fc19cf794db6c.png',
            coinWebsite: 'https://infiniteone.io/',
            auditFile: 'https://github.com/ScientificChickenSander/EggChainCertifiedAudits/blob/main/EggChainAudit-InfiniteOne-14092021.pdf',
            auditLogo: 'https://i.ibb.co/9W1CdQm/Egg-C-Audit-Logo.png',
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
          },
          {
            _id: '0x7325B0881a0D4Bf297FEABBcafb56C9ED091A373',
            coinName: 'Bellatrix Token  (BLTR)',
            coinAddress: '0x7325B0881a0D4Bf297FEABBcafb56C9ED091A373',
            coinLogo:
              'https://i.ibb.co/y45pGc7/Bellatrix-Token.jpg',
            coinWebsite: 'https://bellatrix.money/',
            auditFile: '',
            auditLogo: 'https://i.ibb.co/QnRJ1wP/coming-soon-modified.png',
          },
          {
            _id: '0x5755E18D86c8a6d7a6E25296782cb84661E6c106',
            coinName: 'SideKick Finance  (SK)',
            coinAddress: '0x5755E18D86c8a6d7a6E25296782cb84661E6c106',
            coinLogo:
              'https://i.ibb.co/R0YymBZ/photo1623793528-removebg-preview.png',
            coinWebsite: 'https://sidekick.finance/',
            auditFile: 'https://docs.sidekick.finance/sidekick-finance/',
            auditLogo: 'https://i.ibb.co/QnRJ1wP/coming-soon-modified.png',
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
          },
        ])
      })
  }, [])

  return (
    <>
      {/* @ts-ignore */}
      <style jsx global>{`
        .donkLogo {
          display: none !important;
        }
      `}</style>
      <img src="/donk-seal.png" style={{ zIndex: 99, width: 'min-content', marginBottom: 26, marginTop: '-31px' }} />
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
                          <Button onClick={(event?: any) => props.action.onClick(event, props.data)} style={{marginRight: '10px'}} className="partner-swap-button">SWAP</Button>
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


                  {
                    title: 'Audit',
                    field: 'audit',
                    render: (rD) => (
                      <div className="audit-img"
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'flex-start',
                        }}
                      >
                        {/* @ts-ignore */}
                        <a href={rD?.auditFile}>
                          {/* @ts-ignore */}
                          <img src={rD?.auditLogo} style={{ width: 50, borderRadius: '50%' }} />
                        </a>
                      </div>
                    ),
                  },
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
                      window.location.href = `/#/swap?inputCurrency=${data?.coinAddress}`
                    },
                  },
                ]}
              />
            </div>
          </AutoColumn>
        </CardBody>
      </AppBody>
    </>
  )
}

// http://localhost:3000/#/swap?inputCurrency=0xcEE96f45B1B55c7f836dE13Ab04Bf4Cb6a1bbED2
