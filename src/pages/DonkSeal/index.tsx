import React from 'react'
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
  const xs = useMediaQuery(theme.breakpoints.down(396))
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
            auditFile: 'https://donkswap.com/flypaperaudit.pdf',
            auditLogo: 'https://donkswap.com/images/flylogo.png',
          },
          {
            _id: '0x4492cA0AFF6D603e18Aea5075B49A5ff76b9Ea06',
            coinName: 'Farmageddon  (FG)',
            coinAddress: '0x4492cA0AFF6D603e18Aea5075B49A5ff76b9Ea06',
            coinLogo:
              'https://i.imgur.com/5AGI34Z.png',
            coinWebsite: 'https://farmageddon.farm',
            auditFile: '',
            auditLogo: '',
          },
          {
            _id: '0xd51237a6f3219d186f0c8d8dd957b1bcb3ce5d48',
            coinName: 'Fertilizer   (FRT)',
            coinAddress: '0xd51237a6f3219d186f0c8d8dd957b1bcb3ce5d48',
            coinLogo:
              'https://i.ibb.co/6NYCfDT/photo1633193176.jpg',
            coinWebsite: 'https://farmageddon.farm',
            auditFile: '',
            auditLogo: '',
          },
           {
            _id: '0xfCaC1a3eDE7b55Cc51e3eBff2885a67FBfE01a1A',
            coinName: 'InfiniteOne  (IF1)',
            coinAddress: '0xfCaC1a3eDE7b55Cc51e3eBff2885a67FBfE01a1A',
            coinLogo:
              'https://hosting.renderforestsites.com/13950379/628732/media/2090f945c1e38fd1d23fc19cf794db6c.png',
            coinWebsite: 'https://infiniteone.io/',
            auditFile: '',
            auditLogo: '',
           },
           {
            _id: '0x33837Ad88d3488020F140996dcBD44E7eebe8fD4',
            coinName: 'Pecunia  (PEC)',
            coinAddress: '0x33837Ad88d3488020F140996dcBD44E7eebe8fD4',
            coinLogo:
              'https://i.ibb.co/hVJ3CGD/Pecunia.jpg',
            coinWebsite: 'https://www.pecuniacrypto.com/',
            auditFile: '',
            auditLogo: '',
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
      <AppBody max>
        <CardBody>
          <AutoColumn gap="md">
            <div style={{ maxWidth: '100%' }}>
              <MaterialTable
                components={{
                  Container: (props) => <Paper {...props} elevation={0} />,
                  Action: (props) => {
                    return (
                      <>
                        {!xs && props.data.coinName && (
                          <Button onClick={(event?: any) => props.action.onClick(event, props.data)}>SWAP</Button>
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
                      <div
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
                  //   {
                  //     title: 'Price',
                  //     field: 'price',
                  //     type: 'numeric',
                  //     hidden: sm,
                  //   },
                  //   {
                  //     title: 'Circulating Supply',
                  //     field: 'csupply',
                  //     type: 'numeric',
                  //     render: (rowData) => <>{addComm(rowData.csupply)}</>,
                  //     hidden: matches,
                  //   },
               
               
                  {
                    title: 'Audit',
                    field: 'audit',
                    render: (rD) => (
                      <div
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
