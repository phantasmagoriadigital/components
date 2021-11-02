import { Component, Prop, h } from '@stencil/core';
import { CODE_SIZE } from "../defaults/prop-defaults";
export class SuxCode {
  constructor() {
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
    const contentEl = (h("span", { class: 'content' },
      h("slot", null)));
    const { size } = this;
    return (h("code", { class: {
        'sux-code': true,
        'sux-code--s': size === "s",
        'sux-code--m': size === "m",
        'sux-code--l': size === "l",
        'sux-code--xl': size === "xl",
      } }, contentEl));
  }
  static get is() { return "sux-code"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["sux-code.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["sux-code.css"]
  }; }
  static get properties() { return {
    "size": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "CodeSize",
        "resolved": "\"l\" | \"m\" | \"s\" | \"xl\"",
        "references": {
          "CodeSize": {
            "location": "import",
            "path": "./interfaces"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Size"
      },
      "attribute": "size",
      "reflect": true,
      "defaultValue": "CODE_SIZE"
    }
  }; }
}
