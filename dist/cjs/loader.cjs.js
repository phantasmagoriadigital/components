'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c08b928e.js');

/*
 Stencil Client Patch Esm v2.9.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["sux-body_3.cjs",[[1,"sux-body",{"size":[513],"variant":[513]}],[1,"sux-button",{"label":[513],"name":[513],"type":[1025],"variant":[513],"size":[513],"quiet":[516],"disabled":[516],"iconStart":[516,"icon-start"],"iconEnd":[1,"icon-end"],"isLoading":[516,"is-loading"]}],[1,"sux-heading",{"size":[513],"variant":[513],"weight":[513],"tag":[513]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
