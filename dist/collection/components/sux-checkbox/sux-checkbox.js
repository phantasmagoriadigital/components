import { Component, Host, h, Element, Prop, Watch, Event } from '@stencil/core';
import { renderHiddenInput } from "../../utils/utils";
let id = 0;
export class SuxCheckbox {
  constructor() {
    this.checkboxId = `sux-input-${++id}`;
    /**
       * The checkbox name
       */
    this.name = '';
    /**
     * Checked value of checkbox
     */
    this.checked = false;
    /**
     * Indeterminate state of checkbox
     */
    this.indeterminate = false;
    /**
     * disable the checkbox
     */
    this.disabled = false;
    /**
     * Error
     */
    this.error = false;
    /**
     * Read only
     */
    this.readonly = false;
    /**
     * Value
     */
    this.value = '';
    this._onBlur = () => {
      this.suxBlur.emit();
    };
  }
  //--------------------------------------------------------------------------
  // Watchers
  //--------------------------------------------------------------------------
  updateChecked() {
    if (this._inputEl) {
      this._inputEl.checked = this.checked;
    }
  }
  updateIndeterminate() {
    if (this._inputEl) {
      this._inputEl.indeterminate = this.indeterminate;
    }
  }
  connectedCallback() {
    this._onClick = this._onClick.bind(this);
    this._onInput = this._onInput.bind(this);
  }
  componentDidLoad() {
    if (this._inputEl && this.indeterminate) {
      // indeterminate property does not exist in HTML but is accessible via js
      this._inputEl.indeterminate = true;
    }
  }
  _onClick(e) {
    const target = e.target;
    if (this.indeterminate) {
      this.indeterminate = false;
    }
    this.checked = target.checked;
    this.suxChange.emit();
  }
  _onInput(e) {
    const target = e.target;
    this.value = target.value;
    this.suxInput.emit();
  }
  render() {
    const { checkboxId, checked, disabled, helpText, name, value, indeterminate, error } = this;
    if (!this.indeterminate) {
      renderHiddenInput(true, this.el, this.name, this.value ? this.value : 'on', this.disabled, this.checked);
    }
    return (h(Host, null,
      h("div", { class: "sux-form-field" },
        h("div", { class: {
            'sux-checkbox': true,
            'sux-checkbox--indeterminate': indeterminate,
            'sux-checkbox--has-text': helpText !== undefined,
            'sux-checkbox--error': error
          } },
          h("input", { type: "checkbox", name: name, id: checkboxId, disabled: disabled, checked: checked, 
            //Allows storybook's indetermiante control to take effect.
            indeterminate: indeterminate, value: value, onChange: this._onClick, onInput: this._onInput, onBlur: () => this._onBlur(), ref: (el) => (this._inputEl = el) }),
          h("label", { htmlFor: checkboxId },
            this.label,
            h("span", { class: {
                hidden: !!this.label,
              } },
              h("slot", null)))))));
  }
  static get is() { return "sux-checkbox"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["sux-checkbox.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["sux-checkbox.css"]
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
        "text": "Label for the checkbox"
      },
      "attribute": "label",
      "reflect": false
    },
    "name": {
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
        "text": "The checkbox name"
      },
      "attribute": "name",
      "reflect": false,
      "defaultValue": "''"
    },
    "checked": {
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
        "text": "Checked value of checkbox"
      },
      "attribute": "checked",
      "reflect": false,
      "defaultValue": "false"
    },
    "indeterminate": {
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
        "text": "Indeterminate state of checkbox"
      },
      "attribute": "indeterminate",
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
        "text": "disable the checkbox"
      },
      "attribute": "disabled",
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
    "value": {
      "type": "string",
      "mutable": true,
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
      "reflect": false,
      "defaultValue": "''"
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
        "text": "Fired when the value of the input changes"
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
  static get watchers() { return [{
      "propName": "checked",
      "methodName": "updateChecked"
    }, {
      "propName": "indeterminate",
      "methodName": "updateIndeterminate"
    }]; }
}
