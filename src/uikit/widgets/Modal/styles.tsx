import React from 'react'
import styled from 'styled-components'
import Flex from '../../components/Box/Flex'
import { Box } from '../../components/Box'
import { ArrowBackIcon, CloseIcon } from '../../components/Svg'
import { IconButton } from '../../components/Button'
import { ModalProps } from './types'

export const ModalHeader = styled.div<{ background?: string }>`
  align-items: center;
  background: ${({ background }) => background || 'transparent'};
  border-bottom: 0.5px solid ${({ theme }) => theme.colors.borderColor};
  display: flex;
  padding: 12px 24px;
`

export const ModalTitle = styled(Flex)`
  align-items: center;
  flex: 1;
`

export const ModalBody = styled(Flex)`
  flex-direction: column;
`

export const ModalCloseButton: React.FC<{ onDismiss: ModalProps['onDismiss'] }> = ({ onDismiss }) => {
  return (
    <IconButton variant="text" onClick={onDismiss} aria-label="Close the dialog" id="close-btn"> 
      <CloseIcon color="primary" />
    </IconButton>
  )
}

export const ModalBackButton: React.FC<{ onBack: ModalProps['onBack'] }> = ({ onBack }) => {
  return (
    <IconButton variant="text" onClick={onBack} area-label="go back" mr="8px">
      <ArrowBackIcon color="invert" />
    </IconButton>
  )
}

export const ModalContainer = styled(Box)<{ minWidth: string }>`
  background-color: #212529f6;
  border: none;
  border-radius: 10px;
  width: 100%;
  z-index: ${({ theme }) => theme.zIndices.modal};

  ${({ theme }) => theme.mediaQueries.xs} {
    width: auto;
    min-width: ${({ minWidth }) => minWidth};
    max-width: 100%;
  }
`
