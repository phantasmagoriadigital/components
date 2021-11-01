import { p as promiseResolve, b as bootstrapLazy } from './index-d0ea01d6.js';

/*
 Stencil Client Patch Browser v2.9.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["sux-body_3",[[1,"sux-body",{"size":[513],"variant":[513]}],[1,"sux-button",{"label":[513],"name":[513],"type":[1025],"variant":[513],"size":[513],"quiet":[516],"disabled":[516],"iconStart":[516,"icon-start"],"iconEnd":[1,"icon-end"],"isLoading":[516,"is-loading"]}],[1,"sux-heading",{"size":[513],"variant":[513],"weight":[513],"tag":[513]}]]]], options);
});
