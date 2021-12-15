import styled, { DefaultTheme } from 'styled-components'
import { space } from 'styled-system'
import { CardProps } from './types'

interface StyledCardProps extends CardProps {
  theme: DefaultTheme
}

/**
 * Priority: Warning --> Success --> Active
 */
const getBoxShadow = ({ isActive, isSuccess, isWarning, theme }: StyledCardProps) => {
  if (isWarning) {
    return theme.card.boxShadowWarning
  }

  if (isSuccess) {
    return theme.card.boxShadowSuccess
  }

  if (isActive) {
    return theme.card.boxShadowActive
  }
  //! change later
  return '0 0 #0000,0 0 #0000,0px 50px 250px -47px #27b0e64a'
}

const StyledCard = styled.div<StyledCardProps>`
  // background-color: white;
  /* border: 1px solid #141414; */
  border-radius: 10px;
  border-image-source: linear-gradient(-30deg, #21897e 0%, #3ba99c 25%, #69d1c5 50%, #7ebce6 75%, #8980f5 100%);
  border-image-slice: 10%;
  color: ${({ theme, isDisabled }) => theme.colors[isDisabled ? 'textDisabled' : 'text']};
  overflow: hidden;
  position: relative;

  ${space}
`

StyledCard.defaultProps = {
  isActive: false,
  isSuccess: false,
  isWarning: false,
  isDisabled: false,
}

export default StyledCard
