// import { addDecorator } from '@storybook/web-components'
import {
  extractArgTypes,
  extractComponentDescription,
  setStencilDocJson,
} from '@pxtrn/storybook-addon-docs-stencil';

import docJson from '../docs.json';
if (docJson) setStencilDocJson(docJson);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    expanded: false
  },
  docs: {
    extractArgTypes,
    extractComponentDescription,
  },
  hideNoControlsWarning: true,
  docs: {
    extractArgTypes,
    extractComponentDescription,
  },
  backgrounds: {
    default: 'light'
  },
}