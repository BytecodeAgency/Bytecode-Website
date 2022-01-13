
import React from 'react'
import Button from './index'

const buttonStory = {
  title: 'Components/Button',
  parameters: {
    componentSubtitle:
      'Button component which can be used as button, anchor and React Router Link',
    docs: {
      storyDescription: `Use \`Button\` for both buttons and links.`,
    },
  },
  component: Button,
}

export default buttonStory

export const allButtons = () => (
  <>
    <Button>Primary (default)</Button>
  </>
)