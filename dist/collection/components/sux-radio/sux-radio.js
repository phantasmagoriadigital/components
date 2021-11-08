import { Component, Prop, h, Element, Event } from '@stencil/core';
let id = 0;
export class SuxRadio {
  constructor() {
    // private _inputEl?: HTMLInputElement
    this.radioId = `sux-radio-${id++}`;
    this.radioGroup = null;
    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //--------------------------------------------------------------------------
    /**
     * Name of the radio
     */
    this.name = '';
    /**
     * Value of the radio
     */
    this.value = '';
    /**
     * size of the radio button
     */
    this.size = 'medium';
    /**
     * disabled state
     */
    this.disabled = false;
    //--------------------------------------------------------------------------
    //
    //  State
    //
    //--------------------------------------------------------------------------
    /**
     * Checked state
     */
    this.checked = false;
    this._onBlur = () => {
      this.suxBlur.emit();
    };
  }
  connectedCallback() {
    this._onChange = this._onChange.bind(this);
    this.radioGroup = this.el.closest('sux-radio-group');
    this.syncFromGroup = this.syncFromGroup.bind(this);
    if (this.radioGroup) {
      this.syncFromGroup();
      this.radioGroup.addEventListener('suxchange', this.syncFromGroup);
    }
  }
  disconnectedCallback() {
    if (this.radioGroup) {
      this.radioGroup.removeEventListener('suxchange', this.syncFromGroup);
    }
  }
  /**
   * Sets checked property when the parent Radio Group value changes.
   */
  syncFromGroup() {
    if (this.radioGroup && this.radioGroup.value) {
      this.checked = this.radioGroup.value === this.value;
    }
  }
  _onChange(e) {
    const target = e.target;
    this.checked = target.checked;
  }
  // /**
  //  * Watch for changes in the checked state 
  //  */
  // // @Watch('checked')
  // // updateChecked() {
  // //   if (this._inputEl) {
  // //     this._inputEl.checked = this.checked
  // //   }
  // // }
  render() {
    const { label, radioId, checked, disabled, name, value, _onChange, _onBlur, } = this;
    return (h("div", { class: "sux-form-field" },
      h("div", { class: "sux-radio" },
        h("input", { type: "radio", name: name, id: radioId, disabled: disabled, checked: checked, value: value, onChange: _onChange, onBlur: () => _onBlur() }),
        h("label", { htmlFor: radioId },
          h("slot", null, label))))
    // </div>
    );
  }
  static get is() { return "sux-radio"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["sux-radio.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["sux-radio.css"]
  }; }
  static get properties() { return {
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
        "text": "Name of the radio"
      },
      "attribute": "name",
      "reflect": false,
      "defaultValue": "''"
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
        "text": "Value of the radio"
      },
      "attribute": "value",
      "reflect": false,
      "defaultValue": "''"
    },
    "size": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "RadioSize",
        "resolved": "\"large\" | \"medium\" | \"small\"",
        "references": {
          "RadioSize": {
            "location": "import",
            "path": "./interfaces"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "size of the radio button"
      },
      "attribute": "size",
      "reflect": false,
      "defaultValue": "'medium'"
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
        "text": "disabled state"
      },
      "attribute": "disabled",
      "reflect": false,
      "defaultValue": "false"
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
      "optional": true,
      "docs": {
        "tags": [],
        "text": "label for the radio button"
      },
      "attribute": "label",
      "reflect": false
    },
    "checked": {
      "type": "boolean",
      "mutable": true,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Checked state"
      },
      "attribute": "checked",
      "reflect": true,
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
        "text": "Fired when an element has lost focus"
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
