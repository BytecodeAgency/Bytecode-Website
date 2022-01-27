import { GlobalStyles } from '../src'

export const decorators = [
  (Story) => (
    <>
      <GlobalStyles/>
      <Story/>
    </>
  )
]
