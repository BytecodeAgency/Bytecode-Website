import React from 'react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../src'

// Reverse order of dependent decorators
export const decorators = [
  (Story) => (
    <>
      <GlobalStyles/>
      <Story/>
    </>
  ),
]

export const parameters = {
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
}
