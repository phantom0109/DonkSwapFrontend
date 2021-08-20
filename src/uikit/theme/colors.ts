import { Colors } from './types'

export const baseColors = {
  failure: '#f04',
  primary: '#f9f8fa',
  primaryBright: '#2C82F9',
  primaryDark: '#0477EA',
  secondary: '#1673FF',
  success: '#6AC130',
  warning: '#FCD114',
}

export const brandColors = {
  binance: 'yellow',
}

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: '#12BEE5',
  background: '#1e003e12',
  backgroundDisabled: '#0a0e31',
  backgroundAlt: '#000',
  contrast: '#FFFFFF',
  dropdown: '#1E1D20',
  invertedContrast: '#fff',
  input: '#ffffff14',
  inputSecondary: '#01A3C4',
  primaryDark: '#d4cfda',
  tertiary: '#d4cfda',
  text: '#000',
  textDisabled: '#616371',
  textSubtle: '#000',
  borderColor: '#ffffff2b',
  gradients: {
    bubblegum: 'linear-gradient(139.73deg, #007096 0%, #1B50D6 100%)',
    cardHeader: 'linear-gradient(166.77deg, #008487 0%, #007E87 100%)',
    blue: 'linear-gradient(180deg, #1FA83F 0%, #40B22E 100%)',
    violet: 'linear-gradient(180deg, #D86F00 0%, #B26801 100%)',
  },
}

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: '#12BEE5',
  background: '#1e003e12',
  backgroundDisabled: '#0a0e31',
  backgroundAlt: '#fff',
  contrast: '#FFFFFF',
  dropdown: '#1E1D20',
  invertedContrast: '#fff',
  input: '#ffffff14',
  inputSecondary: '#01A3C4',
  primaryDark: '#d4cfda',
  tertiary: '#d4cfda',
  text: '#000',
  textDisabled: '#616371',
  textSubtle: '#000',
  borderColor: '#ffffff2b',
  gradients: {
    bubblegum: 'linear-gradient(139.73deg, #007096 0%, #1B50D6 100%)',
    cardHeader: 'linear-gradient(166.77deg, #008487 0%, #007E87 100%)',
    blue: 'linear-gradient(180deg, #1FA83F 0%, #40B22E 100%)',
    violet: 'linear-gradient(180deg, #D86F00 0%, #B26801 100%)',
  },
}
