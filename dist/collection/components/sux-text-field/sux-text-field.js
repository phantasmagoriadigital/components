import { Component, Prop, Host, h, Element, Event } from '@stencil/core';
let id = 0;
export class SuxTextField {
  constructor() {
    this.inputId = `sux-input-${++id}`;
    /**
     * size of the input
     */
    this.size = 'm';
    /**
     * disabled input
     */
    this.disabled = false;
    /**
     * read only
     */
    this.readonly = false;
    /**
     * valid icon
     */
    this.validIcon = false;
    /**
     * Input type
     */
    this.type = 'text';
    /**
     * Label position
     */
    this.labelPosition = 'top';
    /**
     * Required
     */
    this.required = false;
    /**
     * Error
     */
    this.error = false;
    this._onBlur = () => {
      this.suxBlur.emit();
    };
  }
  connectedCallback() {
    this._onChange = this._onChange.bind(this);
    this._onInput = this._onInput.bind(this);
  }
  _onChange(e) {
    const target = e.target;
    this.value = target.value;
    this.suxChange.emit();
  }
  _onInput(e) {
    const target = e.target;
    this.value = target.value;
    this.suxInput.emit();
  }
  render() {
    const { disabled, error, errorText, helpText, label, labelPosition, _onChange, _onInput, _onBlur, placeholder, required, type, value, size, } = this;
    return (h(Host, null,
      h("div", { class: {
          'sux-form-field': true,
          '--position-top': labelPosition === 'top',
          '--position-side': labelPosition === 'side',
        }, part: "form-field" },
        h("sux-field-label", { size: size, position: labelPosition, required: required }, label),
        h("div", { class: {
            'sux-input': true,
          } },
          h("input", { disabled: disabled, placeholder: placeholder, required: required, value: value, class: {
              'sux-text-field': true,
              'sux-text-field--disabled': disabled,
              'sux-text-field--search': type === 'search',
              'sux-text-field--sizeS': size === 's',
              'sux-text-field--sizeM': size === 'm',
              'sux-text-field--sizeL': size === 'l',
              'sux-text-field--sizeXL': size === 'xl',
              'sux-text-field--error': error,
            }, id: this.inputId, onChange: _onChange, onInput: _onInput, onBlur: () => _onBlur() }),
          h("sux-help-text", { size: size }, helpText),
          h("sux-help-text", { size: size, variant: "negative" }, errorText)))));
  }
  static get is() { return "sux-text-field"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["sux-text-field.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["sux-text-field.css"]
  }; }
  static get properties() { return {
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
        "text": "Placeholder text"
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
        "text": "value of the input"
      },
      "attribute": "value",
      "reflect": false
    },
    "size": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "TextFieldSize",
        "resolved": "\"l\" | \"m\" | \"s\" | \"xl\"",
        "references": {
          "TextFieldSize": {
            "location": "import",
            "path": "./interfaces"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "size of the input"
      },
      "attribute": "size",
      "reflect": false,
      "defaultValue": "'m'"
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
        "text": "width of the input"
      },
      "attribute": "width",
      "reflect": false
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
        "text": "disabled input"
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
        "text": "read only"
      },
      "attribute": "readonly",
      "reflect": false,
      "defaultValue": "false"
    },
    "validIcon": {
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
        "text": "valid icon"
      },
      "attribute": "valid-icon",
      "reflect": false,
      "defaultValue": "false"
    },
    "type": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "TextFieldType",
        "resolved": "\"email\" | \"number\" | \"password\" | \"search\" | \"tel\" | \"text\" | \"url\"",
        "references": {
          "TextFieldType": {
            "location": "import",
            "path": "./interfaces"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Input type"
      },
      "attribute": "type",
      "reflect": false,
      "defaultValue": "'text'"
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
        "text": "Help text"
      },
      "attribute": "help-text",
      "reflect": false
    },
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
        "text": "Label text"
      },
      "attribute": "label",
      "reflect": false
    },
    "labelPosition": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'top' | 'side'",
        "resolved": "\"side\" | \"top\"",
        "references": {}
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
    "errorText": {
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
        "text": "Error message"
      },
      "attribute": "error-text",
      "reflect": false
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
    }
  }; }
  static get events() { return [{
      "method": "suxChange",
      "name": "suxchange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "/**\n    Fired when the value of the input changes"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "suxInput",
      "name": "suxinput",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Fired when an alteration to the input's value is committed by the user"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "suxBlur",
      "name": "suxblur",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Fired when an element has lost focus"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get elementRef() { return "el"; }
}
