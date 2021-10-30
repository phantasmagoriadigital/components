import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'substrate-rnd',
  plugins: [
    sass({
      injectGlobalPaths: [
        'src/assets/tokens/base/base'
      ]
    })
    // sass()
  ],
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
