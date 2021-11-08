import { Component, Host, h, Prop } from '@stencil/core';
export class SuxFieldLabel {
  constructor() {
    /**
     * Size
     */
    this.size = 's';
    /**
     * position
     */
    this.position = 'top';
    /**
     * Required
     */
    this.required = false;
    /**
     * Disabled
     */
    this.disabled = false;
  }
  render() {
    const { label, size, required, disabled, position } = this;
    return (h(Host, { position: position },
      h("div", { class: {
          'sux-field-label': true,
          'sux-field-label--sizeS': size === 's',
          'sux-field-label--sizeM': size === 'm',
          'sux-field-label--sizeL': size === 'l',
          'sux-field-label--sizeXL': size === 'xl',
          'sux-field-label--positionTop': position === 'top',
          'sux-field-label--positionSide': position === 'side',
          'sux-field-label--required': required,
          'sux-field-label--disabled': disabled,
        } },
        h("label", null,
          h("slot", null, label),
          h("icon", null, "*")))));
  }
  static get is() { return "sux-field-label"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["sux-field-label.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["sux-field-label.css"]
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
        "text": "Label"
      },
      "attribute": "label",
      "reflect": false
    },
    "size": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "FieldLabelSize",
        "resolved": "\"l\" | \"m\" | \"s\" | \"xl\"",
        "references": {
          "FieldLabelSize": {
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
      "defaultValue": "'s'"
    },
    "position": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "FieldLabelPosition",
        "resolved": "\"side\" | \"top\"",
        "references": {
          "FieldLabelPosition": {
            "location": "import",
            "path": "./interfaces"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "position"
      },
      "attribute": "position",
      "reflect": false,
      "defaultValue": "'top'"
    },
    "required": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Required"
      },
      "attribute": "required",
      "reflect": false,
      "defaultValue": "false"
    },
    "disabled": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Disabled"
      },
      "attribute": "disabled",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
}
