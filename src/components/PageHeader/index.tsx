import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { Heading, IconButton, Text, Flex, useModal, TuneIcon, HistoryIcon } from '../../uikit'
import useI18n from 'hooks/useI18n'
import SettingsModal from './SettingsModal'
import RecentTransactionsModal from './RecentTransactionsModal'

interface PageHeaderProps {
  title: ReactNode
  description?: ReactNode
  children?: ReactNode
  swap?: boolean
}

const StyledPageHeader = styled.div`
border-bottom: 0.5px solid rgba(183, 183, 183, 0.416);
  padding: 24px;
`

const Details = styled.div`
  flex: 1;
`

const PageHeader = ({ title, description, children, swap = true }: PageHeaderProps) => {
  const TranslateString = useI18n()
  const [onPresentSettings] = useModal(<SettingsModal translateString={TranslateString} />)
  const [onPresentRecentTransactions] = useModal(<RecentTransactionsModal translateString={TranslateString} />)

  return (
    <StyledPageHeader>
      <Flex alignItems="center">
        <Details>
          <Heading mb="8px" style={{ color: 'rgb(183, 183, 183)' }}>{title}</Heading>
          {description && (
            <Text color="textSubtle" bold fontSize="12px" style={{ color: 'grey' }}>
              {description}
            </Text>
          )}
        </Details>
        {swap && (
          <IconButton
            variant="text"
            style={{ background: 'transparent' }}
            onClick={onPresentSettings}
            title={TranslateString(1200, 'Settings')}
          >
            <TuneIcon width="24px" color="currentColor" />
          </IconButton>
        )}
        {swap && (
          <IconButton
            style={{ background: 'transparent' }}
            variant="text"
            onClick={onPresentRecentTransactions}
            title={TranslateString(1202, 'Recent transactions')}
          >
            <HistoryIcon width="24px" color="currentColor" />
          </IconButton>
        )}
      </Flex>
      {children && <Text mt="16px">{children}</Text>}
    </StyledPageHeader>
  )
}

export default PageHeader
