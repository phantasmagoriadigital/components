import { Component, Host, h, Element, Prop, Event, Watch, State } from '@stencil/core';
import { hasSlot, renderHiddenInput } from '../../utils/utils';
export class SuxRadioGroup {
  constructor() {
    this.hasLabelSlot = false;
    /**
     * Presentational only. Renders the Radio Group as invalid.
     */
    this.invalid = false;
    /**
     * The name of the radio group - submitted with form data. Must match the name of the radios in the group.
     */
    this.name = '';
  }
  emitChange() {
    this.suxChange.emit(this.value);
  }
  handleLabelChange() {
    this._handleSlotChange();
  }
  connectedCallback() {
    this.handleClick = this.handleClick.bind(this);
    this._handleSlotChange = this._handleSlotChange.bind(this);
  }
  disconnectedCallback() {
    this.el.shadowRoot.removeEventListener('slotchange', this._handleSlotChange);
  }
  componentWillLoad() {
    const radios = Array.from(this.el.querySelectorAll('sux-radio'));
    if (radios.length > 1 && !this.value) {
      this.value = radios[0].getAttribute('value');
    }
    this._handleSlotChange();
  }
  get hasLabel() {
    return this.label ? true : this.hasLabelSlot;
  }
  handleClick(e) {
    const selectedRadio = e.target && e.target.closest('sux-radio');
    if (selectedRadio && !selectedRadio.disabled) {
      const oldValue = this.value;
      const newValue = selectedRadio.value;
      if (newValue !== oldValue) {
        this.value = newValue;
      }
    }
  }
  selectedRadioIsDisabled() {
    const radio = this.el.querySelector(`sux-radio[value="${this.value}"]`);
    return radio && radio.disabled;
  }
  _handleSlotChange() {
    this.hasLabelSlot = hasSlot(this.el, 'label');
  }
  render() {
    if (this.value) {
      renderHiddenInput(true, this.el, this.name, this.value, this.selectedRadioIsDisabled());
    }
    return (h(Host, { onClick: this.handleClick },
      h("div", { class: "sux-form-field", part: "form-field" },
        h("div", { class: {
            'sux-label': true,
            hidden: !this.hasLabel,
          }, part: "label" },
          h("slot", { onSlotchange: this._handleSlotChange, name: "label" }, this.label)),
        h("div", { class: {
            'sux-radio-group': true,
            'sux-radio-group--invalid': this.invalid,
          }, role: "radiogroup", part: "radiogroup" },
          h("slot", null)))));
  }
  static get is() { return "sux-radio-group"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["sux-radio-group.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["sux-radio-group.css"]
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
      "optional": true,
      "docs": {
        "tags": [],
        "text": "The label of the radio group. For HTML content, use the `label` slot instead."
      },
      "attribute": "label",
      "reflect": false
    },
    "invalid": {
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
        "text": "Presentational only. Renders the Radio Group as invalid."
      },
      "attribute": "invalid",
      "reflect": false,
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
        "text": "The name of the radio group - submitted with form data. Must match the name of the radios in the group."
      },
      "attribute": "name",
      "reflect": false,
      "defaultValue": "''"
    },
    "value": {
      "type": "any",
      "mutable": true,
      "complexType": {
        "original": "any | null",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "The value of the current selected radio in the group. Changing this will also mark that radio as checked in the UI."
      },
      "attribute": "value",
      "reflect": true
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
      "optional": true,
      "docs": {
        "tags": [],
        "text": "The help or explanation text"
      },
      "attribute": "help-text",
      "reflect": false
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
      "optional": true,
      "docs": {
        "tags": [],
        "text": "The validation error text"
      },
      "attribute": "error-text",
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
        "text": "Fired when the value of the input changes - [HTMLElement/input_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "value",
      "methodName": "emitChange"
    }, {
      "propName": "label",
      "methodName": "handleLabelChange"
    }]; }
}
