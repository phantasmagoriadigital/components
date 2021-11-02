import { r as registerInstance, h } from './index-799abf1e.js';
import { C as CODE_SIZE } from './prop-defaults-0228e040.js';

const suxCodeCss = ":host{display:block}.sux-code{line-height:150%;font-family:\"IBM Plex Mono\", monospace}.sux-code--s{font-size:14px}.sux-code--m{font-size:16px}.sux-code--l{font-size:18px}.sux-code--xl{font-size:20px}";

let SuxCode = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //--------------------------------------------------------------------------
    /**
     * Size
     */
    this.size = CODE_SIZE;
  }
  render() {
    /** Content element with slot  */
    const contentEl = (h("span", { class: 'content' }, h("slot", null)));
    const { size } = this;
    return (h("code", { class: {
        'sux-code': true,
        'sux-code--s': size === "s",
        'sux-code--m': size === "m",
        'sux-code--l': size === "l",
        'sux-code--xl': size === "xl",
      } }, contentEl));
  }
};
SuxCode.style = suxCodeCss;

export { SuxCode as sux_code };
