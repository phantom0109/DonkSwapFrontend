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
