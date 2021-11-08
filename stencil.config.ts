import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'substrate-ds',
  plugins: [
    sass({
      injectGlobalPaths: [
        './src/assets/tokens/base/_base.scss'
      ]
    })
    // sass()
  ],
  globalStyle: './src/assets/tokens/css/all/tokens.css',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    // {
    //   type: 'dist-custom-elements',
    // },
    {
      type: 'docs-readme',
    },
    {
      type: 'docs-json',
      file: './docs.json'
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
