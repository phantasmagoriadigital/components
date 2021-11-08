import { Component, h, Prop } from '@stencil/core';
export class SuxIcon {
  constructor() {
    this.svg = '';
    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //--------------------------------------------------------------------------
    /**
     * Size
     */
    this.size = "m";
  }
  render() {
    return (h("icon", null, "This is an  icon"));
  }
  static get is() { return "sux-icon"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["sux-icon.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["sux-icon.css"]
  }; }
  static get properties() { return {
    "size": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "IconSize",
        "resolved": "\"l\" | \"m\" | \"s\" | \"xl\"",
        "references": {
          "IconSize": {
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
      "reflect": false,
      "defaultValue": "\"m\""
    },
    "icon": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Name of the icon"
      },
      "attribute": "icon",
      "reflect": false
    }
  }; }
}
