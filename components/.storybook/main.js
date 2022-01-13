module.exports = {
  stories: [
    '../src/components/**/*.stories.tsx',
  ],
  addons: [
    'storybook-addon-styled-component-theme/dist/preset',
    '@storybook/preset-create-react-app',
    '@storybook/addon-docs',
    '@storybook/addon-links',
    '@storybook/addon-viewport/register',
  ],
}
