import { create } from '@storybook/theming';

export default create({
  base: 'light',
  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  brandTitle: 'Motion UI Library',
  brandUrl: 'https://m-lib.art',
  brandImage: 'https://i.ibb.co/FsgMXNw/m-lib.png',
  brandTarget: '_self',

  //
  colorPrimary: '#fff',
  colorSecondary: '#fff',

  // UI
  appBg: '#025064',
  appContentBg: '#ffffff',
  appBorderColor: '#585C6D',
  appBorderRadius: 4,

  // Text colors
  textColor: '#10162F',
  textInverseColor: '#ffffff',

  // Toolbar default and active colors
  barTextColor: '#9E9E9E',
  barSelectedColor: '#585C6D',
  barBg: '#ffffff',

  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#10162F',
  inputTextColor: '#10162F',
  inputBorderRadius: 2,
});