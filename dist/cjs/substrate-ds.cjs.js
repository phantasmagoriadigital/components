'use strict';

const index = require('./index-78645c8d.js');

/*
 Stencil Client Patch Browser v2.9.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('substrate-ds.cjs.js', document.baseURI).href));
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["sux-body_7.cjs",[[1,"sux-body",{"size":[513],"classification":[513]}],[1,"sux-button",{"label":[513],"name":[513],"type":[1025],"variant":[513],"size":[513],"quiet":[516],"disabled":[516],"iconStart":[516,"icon-start"],"iconEnd":[4,"icon-end"],"isLoading":[516,"is-loading"]}],[1,"sux-detail",{"size":[513],"classification":[513],"weight":[513]}],[1,"sux-field-label",{"label":[1],"size":[1],"position":[1],"required":[4],"disabled":[4]}],[1,"sux-heading",{"size":[513],"classification":[513],"weight":[513],"tag":[513]}],[1,"sux-help-text",{"text":[1],"variant":[1],"size":[1],"icon":[4],"disabled":[4]}],[1,"sux-tag",{"label":[1],"size":[1],"variant":[1]}]]],["sux-code.cjs",[[1,"sux-code",{"size":[513]}]]]], options);
});
