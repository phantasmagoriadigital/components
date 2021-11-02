import { Component, Prop, h } from '@stencil/core';
import { DETAIL_SIZE, DETAIL_CLASSIFICATION, DETAIL_WEIGHT } from "../defaults/prop-defaults";
export class SuxDetail {
  constructor() {
    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //--------------------------------------------------------------------------
    /**
     * Size
     */
    this.size = DETAIL_SIZE;
    /**
     * Classification
     */
    this.classification = DETAIL_CLASSIFICATION;
    /**
     * Weight
     */
    this.weight = DETAIL_WEIGHT;
  }
  render() {
    /** Content element with slot  */
    const contentEl = (h("span", { class: 'content' },
      h("slot", null)));
    const { size, classification, weight } = this;
    return (h("p", { class: {
        'sux-detail': true,
        'sux-detail--serif': classification === 'serif',
        'sux-detail--sans-serif': classification === 'sans-serif',
        'sux-detail--mono': classification === 'mono',
        'sux-detail--s': size === "s",
        'sux-detail--m': size === "m",
        'sux-detail--l': size === "l",
        'sux-detail--xl': size === "xl",
        'sux-detail--light': weight === "light",
        'sux-detail--regular': weight === "regular",
      } }, contentEl));
  }
  static get is() { return "sux-detail"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["sux-detail.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["sux-detail.css"]
  }; }
  static get properties() { return {
    "size": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "DetailSize",
        "resolved": "\"l\" | \"m\" | \"s\" | \"xl\"",
        "references": {
          "DetailSize": {
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
      "defaultValue": "DETAIL_SIZE"
    },
    "classification": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "DetailClassification",
        "resolved": "\"mono\" | \"sans-serif\" | \"serif\"",
        "references": {
          "DetailClassification": {
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
      "defaultValue": "DETAIL_CLASSIFICATION"
    },
    "weight": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "DetailWeight",
        "resolved": "\"light\" | \"regular\"",
        "references": {
          "DetailWeight": {
            "location": "import",
            "path": "./interfaces"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Weight"
      },
      "attribute": "weight",
      "reflect": true,
      "defaultValue": "DETAIL_WEIGHT"
    }
  }; }
}
