import breakpoints, { layout } from './defaults/breakpoints'
import { typography } from './defaults/typography'

const tokens = {
    // Brand
  colorBrand1: '#DFE4E1',
  colorBrand2: '#295D59',
  colorBrand3: '#093632',
  colorBrand4: '#B791C4',

  // Sub-colors
  colorInfo: '#0B71A1',
  colorInfoLight: '#D3F3FD',
  colorWarning: '#FFBC2C',
  colorWarningLight: '#FCF8DA',
  colorError: '#F02B41',
  colorErrorLight: '#FFDDE2',
  colorSuccess: '#39870C',
  colorSuccessLight: '#DCE8D1',
}

const theme = {
    name: 'light',
    tokens,
    breakpoints,
    layout,
    typography,
}
  
export default theme
