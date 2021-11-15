import { Component, Host, Element, h, Prop, State, Event } from '@stencil/core';
import { renderHiddenInput } from "../../utils/utils";
let id = 0;
export class SuxSwitch {
  constructor() {
    this.switchId = `sux-switch-${id++}`;
    //--------------------------------------------------------------------------
    // State
    //--------------------------------------------------------------------------
    this.hasLabelSlot = false;
    /**
     * Value of the switch
     */
    this.value = '';
    /**
     * Checked state of the switch
     */
    this.checked = false;
    /**
     * Disabled state of the switch
     */
    this.disabled = false;
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
    this.checked = target.checked;
    this.suxChange.emit(this.checked);
  }
  _onInput(e) {
    const target = e.target;
    this.value = target.value;
    this.suxInput.emit();
  }
  render() {
    const { switchId, checked, disabled, name, value, label } = this;
    renderHiddenInput(true, this.el, this.name, this.value ? this.value : 'on', this.disabled, this.checked);
    return (h(Host, { class: "sux-form-field" },
      h("div", { class: {
          'sux-switch': true,
          'sux-switch--checked': checked,
        } },
        h("input", { role: "switch", type: "checkbox", class: "sux-switch_input", name: name, id: switchId, disabled: disabled, checked: checked, value: value, 
          // aria-checked={`${checked}`}
          onChange: this._onChange, onInput: this._onInput, onBlur: () => this._onBlur() }),
        h("label", { class: "sux-switch_label", htmlFor: switchId }, label))));
  }
  static get is() { return "sux-switch"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["sux-switch.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["sux-switch.css"]
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
        "text": "Label for the switch"
      },
      "attribute": "label",
      "reflect": false
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
        "text": "Value of the switch"
      },
      "attribute": "value",
      "reflect": true,
      "defaultValue": "''"
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
        "text": "Checked state of the switch"
      },
      "attribute": "checked",
      "reflect": true,
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
        "text": "Disabled state of the switch"
      },
      "attribute": "disabled",
      "reflect": true,
      "defaultValue": "false"
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
        "text": "Name of the switch"
      },
      "attribute": "name",
      "reflect": false
    }
  }; }
  static get states() { return {
    "hasLabelSlot": {}
  }; }
  static get events() { return [{
      "method": "suxChange",
      "name": "suxchange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Fires when the value of the input changes"
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
        "text": "Fires when an alteration to the input's value is made"
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
        "text": "Fires when the element loses focus"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get elementRef() { return "el"; }
}
