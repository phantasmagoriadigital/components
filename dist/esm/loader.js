import { p as promiseResolve, b as bootstrapLazy } from './index-069adbd6.js';

/*
 Stencil Client Patch Esm v2.9.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["sux-code",[[1,"sux-code",{"size":[513]}]]],["sux-icon",[[1,"sux-icon",{"size":[1],"icon":[1]}]]],["sux-menu-item",[[1,"sux-menu-item",{"value":[1],"active":[4],"disabled":[4],"selected":[4],"noWrap":[4,"no-wrap"]}]]],["sux-picker",[[1,"sux-picker",{"label":[1],"labelPosition":[1,"label-position"],"placeholder":[1],"value":[1],"width":[1],"quiet":[4],"required":[4],"error":[4],"disabled":[4],"readonly":[4],"helpText":[1,"help-text"]}]]],["sux-body_13",[[1,"sux-text-area",{"placeholder":[1],"value":[1],"size":[1],"width":[1],"disabled":[4],"readonly":[4],"validIcon":[4,"valid-icon"],"helpText":[1,"help-text"],"label":[1],"labelPosition":[1,"label-position"],"required":[4],"errorText":[1,"error-text"],"error":[4]}],[1,"sux-text-field",{"placeholder":[1],"value":[1],"size":[1],"width":[1],"disabled":[4],"readonly":[4],"validIcon":[4,"valid-icon"],"type":[1],"helpText":[1,"help-text"],"label":[1],"labelPosition":[1,"label-position"],"required":[4],"errorText":[1,"error-text"],"error":[4]}],[1,"sux-body",{"size":[513],"classification":[513]}],[1,"sux-button",{"label":[513],"name":[513],"type":[1025],"variant":[513],"size":[513],"quiet":[516],"disabled":[516],"iconStart":[516,"icon-start"],"iconEnd":[4,"icon-end"],"isLoading":[516,"is-loading"]}],[1,"sux-checkbox",{"label":[1],"name":[1],"checked":[4],"indeterminate":[4],"disabled":[4],"error":[4],"readonly":[4],"value":[1025],"helpText":[1,"help-text"]}],[1,"sux-detail",{"size":[513],"classification":[513],"weight":[513]}],[1,"sux-heading",{"size":[513],"classification":[513],"weight":[513],"tag":[513]}],[1,"sux-radio",{"name":[1],"value":[1],"size":[1],"disabled":[4],"label":[1],"checked":[1540]}],[1,"sux-radio-group",{"label":[1],"invalid":[4],"name":[1],"value":[1544],"helpText":[1,"help-text"],"errorText":[1,"error-text"],"hasLabelSlot":[32]}],[1,"sux-switch",{"label":[1],"value":[1537],"checked":[1540],"disabled":[516],"name":[1],"hasLabelSlot":[32]}],[1,"sux-tag",{"label":[1],"size":[1],"variant":[1],"state":[1]}],[1,"sux-field-label",{"label":[1],"size":[1],"position":[1],"required":[4],"disabled":[4]}],[1,"sux-help-text",{"text":[1],"variant":[1],"size":[1],"icon":[4],"disabled":[4]}]]]], options);
  });
};

export { defineCustomElements };
