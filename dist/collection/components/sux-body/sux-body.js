import { Component, h, Prop } from '@stencil/core';
import { BODY_SIZE } from "../defaults/prop-defaults";
export class SuxBody {
  constructor() {
    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //--------------------------------------------------------------------------
    /**
     * Size
     */
    this.size = BODY_SIZE;
    /**
     * Variant
     */
    this.variant = "serif";
  }
  render() {
    /** Content element with slot  */
    const contentEl = (h("span", { class: 'content' },
      h("slot", null)));
    const { size, variant } = this;
    return (h("p", { class: {
        'sux-body': true,
        'sux-body--serif': variant === 'serif',
        'sux-body--sans-serif': variant === 'sans-serif',
        'sux-body--mono': variant === 'mono',
        'sux-body--xs': size === "xs",
        'sux-body--s': size === "s",
        'sux-body--m': size === "m",
        'sux-body--l': size === "l",
        'sux-body--xl': size === "xl",
        'sux-body--xxl': size === "xxl",
        'sux-body--xxxl': size === "xxxl",
      } }, contentEl));
  }
  static get is() { return "sux-body"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["sux-body.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["sux-body.css"]
  }; }
  static get properties() { return {
    "size": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "BodySize",
        "resolved": "\"l\" | \"m\" | \"s\" | \"xl\" | \"xs\" | \"xxl\" | \"xxxl\"",
        "references": {
          "BodySize": {
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
      "defaultValue": "BODY_SIZE"
    },
    "variant": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "BodyVariant",
        "resolved": "\"mono\" | \"sans-serif\" | \"serif\"",
        "references": {
          "BodyVariant": {
            "location": "import",
            "path": "./interfaces"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Variant"
      },
      "attribute": "variant",
      "reflect": true,
      "defaultValue": "\"serif\""
    }
  }; }
}
