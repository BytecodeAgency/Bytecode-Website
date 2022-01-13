import React from 'react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { withThemesProvider } from 'storybook-addon-styled-component-theme'
import { ThemeProvider } from 'styled-components'
import { darkTheme, defaultTheme } from '../src/themes'
import { GlobalStyles } from '../src'

const themes = [defaultTheme, darkTheme]

// Reverse order of dependent decorators
export const decorators = [
  (Story) => (
    <>
      <GlobalStyles/>
      <Story/>
    </>
  ),
  withThemesProvider(themes, ThemeProvider),
]

export const parameters = {
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
}
