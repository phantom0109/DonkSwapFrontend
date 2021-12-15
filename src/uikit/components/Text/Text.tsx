import styled, { DefaultTheme } from 'styled-components'
import { space, typography } from 'styled-system'
import getThemeValue from '../../util/getThemeValue'
import { TextProps } from './types'

interface ThemedProps extends TextProps {
  theme: DefaultTheme
}

const getColor = ({ color, theme }: ThemedProps) => {
  return getThemeValue(`colors.${color}`, color)(theme)
}

const getFontSize = ({ fontSize, small }: TextProps) => {
  return small ? '14px' : fontSize || '16px'
}

const Text = styled.div<TextProps>`
  color: rgb(214, 214, 214);
  font-size: ${getFontSize};
  font-family: 'Poppins', monospace;
  font-weight: 500;
  line-height: 1.5;
  ${({ textTransform }) => textTransform && `text-transform: ${textTransform};`}
  ${space}
  ${typography}
`

Text.defaultProps = {
  color: 'text',
  small: false,
}

export default Text
