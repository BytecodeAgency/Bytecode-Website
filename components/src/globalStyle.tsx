import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export default createGlobalStyle`
  ${normalize}
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  a[disabled] {
    pointer-events: none;
  }

  a {
    text-decoration: none;
    color: unset;
  }

  ul {
      list-style-type: none;
      margin-block-start: 0;
      margin-block-end: 0;
      margin-inline-start: 0;
      margin-inline-end: 0;
      padding-inline-start: 0;    
  }
`