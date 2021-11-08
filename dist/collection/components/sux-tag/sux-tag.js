import { Component, Host, h, Prop } from '@stencil/core';
// import
import { TAG_SIZE, TAG_VARIANT } from "../defaults/prop-defaults";
export class SuxTag {
  constructor() {
    /**
     * Size
     */
    this.size = TAG_SIZE;
    /**
     * Variant
     */
    this.variant = TAG_VARIANT;
    /**
     * State
     */
    this.state = 'info';
  }
  render() {
    const { label, size, variant, state } = this;
    return (h(Host, null,
      h("div", { class: {
          'sux-tag': true,
          '--info': state == 'info',
          '--success': state == 'success',
          '--warning': state == 'warning',
          '--error': state == 'error',
          '--neutral': state == 'neutral',
          'sux-tag--solid': variant == 'solid',
          'sux-tag--inverted': variant == 'inverted',
          'sux-tag--outlined': variant == 'outlined',
          'sux-tag--borderless': variant == 'borderless',
          'sux-tag--sizeS': size == 's',
          'sux-tag--sizeM': size == 'm',
          'sux-tag--sizeL': size == 'l',
          'sux-tag--sizeXL': size == 'xl'
        } },
        h("slot", null, label))));
  }
  static get is() { return "sux-tag"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["sux-tag.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["sux-tag.css"]
  }; }
  static get properties() { return {
    "label": {
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
        "text": "label for the tag"
      },
      "attribute": "label",
      "reflect": false
    },
    "size": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "TagSize",
        "resolved": "\"l\" | \"m\" | \"s\" | \"xl\"",
        "references": {
          "TagSize": {
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
      "defaultValue": "TAG_SIZE"
    },
    "variant": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "TagVariant",
        "resolved": "\"borderless\" | \"inverted\" | \"outlined\" | \"solid\"",
        "references": {
          "TagVariant": {
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
      "reflect": false,
      "defaultValue": "TAG_VARIANT"
    },
    "state": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "TagState",
        "resolved": "\"error\" | \"info\" | \"neutral\" | \"success\" | \"warning\"",
        "references": {
          "TagState": {
            "location": "import",
            "path": "./interfaces"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "State"
      },
      "attribute": "state",
      "reflect": false,
      "defaultValue": "'info'"
    }
  }; }
}
