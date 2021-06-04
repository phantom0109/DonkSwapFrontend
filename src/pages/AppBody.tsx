import React from 'react'
import styled from 'styled-components'
import { Card } from '../uikit'

interface interfaceMax {
  max?: boolean
}

export const BodyWrapper = styled(Card)<interfaceMax>`
  position: relative;
  max-width: ${(props) => (props.max ? '1200px' : '436px')};
  width: 100%;
  z-index: 5;
`

/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function AppBody({ children, max = false }: { children: React.ReactNode; max?: boolean }) {
  return <BodyWrapper max={max}>{children}</BodyWrapper>
}
