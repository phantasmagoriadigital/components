import { Component, Host, h, Element, Prop } from '@stencil/core';
export class SuxPicker {
  constructor() {
    /**
     * Label position
     */
    this.labelPosition = 'top';
    /**
     * quiet
     */
    this.quiet = false;
    /**
     * Required
     */
    this.required = false;
    /**
     * Error
     */
    this.error = false;
    /**
     * Disabled
     */
    this.disabled = false;
    /**
     * Read only
     */
    this.readonly = false;
  }
  render() {
    return (h(Host, null,
      h("slot", null)));
  }
  static get is() { return "sux-picker"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["sux-picker.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["sux-picker.css"]
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
        "text": "label"
      },
      "attribute": "label",
      "reflect": false
    },
    "labelPosition": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "LabelPosition",
        "resolved": "\"side\" | \"top\"",
        "references": {
          "LabelPosition": {
            "location": "import",
            "path": "./interfaces"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Label position"
      },
      "attribute": "label-position",
      "reflect": false,
      "defaultValue": "'top'"
    },
    "placeholder": {
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
        "text": "Placeholder"
      },
      "attribute": "placeholder",
      "reflect": false
    },
    "value": {
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
        "text": "Value"
      },
      "attribute": "value",
      "reflect": false
    },
    "width": {
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
        "text": "Width"
      },
      "attribute": "width",
      "reflect": false
    },
    "quiet": {
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
        "text": "quiet"
      },
      "attribute": "quiet",
      "reflect": false,
      "defaultValue": "false"
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
    "error": {
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
        "text": "Error"
      },
      "attribute": "error",
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
    },
    "readonly": {
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
        "text": "Read only"
      },
      "attribute": "readonly",
      "reflect": false,
      "defaultValue": "false"
    },
    "helpText": {
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
        "text": "Help Text"
      },
      "attribute": "help-text",
      "reflect": false
    }
  }; }
  static get elementRef() { return "el"; }
}
