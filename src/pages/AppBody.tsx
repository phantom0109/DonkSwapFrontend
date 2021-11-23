import React from 'react'
import styled from 'styled-components'
import { Card } from '../uikit'

interface interfaceMax {
  max?: boolean
  mt?: string
  ht?: string
}

export const BodyWrapper = styled(Card)<interfaceMax>`
  position: relative;
  max-width: ${(props) => (props.max ? '1200px' : '436px')};
  width: 100%;
  z-index: 5;
  margin-top: ${props => props.mt ? props.mt : 0};
  height: ${props => props.ht ? props.ht : '100%'};
`

/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function AppBody({ children, max = false, mt = '', ht ='100%' }: { children: React.ReactNode; max?: boolean, mt?: string, ht?: string}) {
  return <BodyWrapper max={max} mt={mt} ht={ht}>{children}</BodyWrapper>
}
