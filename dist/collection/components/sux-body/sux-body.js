import { Component, h, Prop } from '@stencil/core';
import { BODY_SIZE, BODY_CLASSIFICATION } from "../defaults/prop-defaults";
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
     * Classification
     */
    this.classification = BODY_CLASSIFICATION;
  }
  render() {
    /** Content element with slot  */
    const contentEl = (h("span", { class: 'content' },
      h("slot", null)));
    const { size, classification } = this;
    return (h("p", { class: {
        'sux-body': true,
        'sux-body--serif': classification === 'serif',
        'sux-body--sans-serif': classification === 'sans-serif',
        'sux-body--mono': classification === 'mono',
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
    "classification": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "BodyClassification",
        "resolved": "\"mono\" | \"sans-serif\" | \"serif\"",
        "references": {
          "BodyClassification": {
            "location": "import",
            "path": "./interfaces"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Classification"
      },
      "attribute": "classification",
      "reflect": true,
      "defaultValue": "BODY_CLASSIFICATION"
    }
  }; }
}
