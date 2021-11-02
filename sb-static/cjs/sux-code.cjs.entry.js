'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-78645c8d.js');
const propDefaults = require('./prop-defaults-dd24d61d.js');

const suxCodeCss = ":host{display:block}.sux-code{line-height:150%;font-family:\"IBM Plex Mono\", monospace}.sux-code--s{font-size:14px}.sux-code--m{font-size:16px}.sux-code--l{font-size:18px}.sux-code--xl{font-size:20px}";

let SuxCode = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //--------------------------------------------------------------------------
    /**
     * Size
     */
    this.size = propDefaults.CODE_SIZE;
  }
  render() {
    /** Content element with slot  */
    const contentEl = (index.h("span", { class: 'content' }, index.h("slot", null)));
    const { size } = this;
    return (index.h("code", { class: {
        'sux-code': true,
        'sux-code--s': size === "s",
        'sux-code--m': size === "m",
        'sux-code--l': size === "l",
        'sux-code--xl': size === "xl",
      } }, contentEl));
  }
};
SuxCode.style = suxCodeCss;

exports.sux_code = SuxCode;
