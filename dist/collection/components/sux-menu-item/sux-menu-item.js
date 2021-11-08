import { Component, Host, h, Element, Prop, Event } from '@stencil/core';
export class SuxMenuItem {
  // --------------------------------------------------------------------------
  // Methods
  // --------------------------------------------------------------------------
  connectedCallback() {
    this._onClick = this._onClick.bind(this);
    this._onInput = this._onInput.bind(this);
  }
  _onClick(e) {
    const target = e.target;
    this.selected = target.checked;
    this.suxChange.emit(this.selected);
  }
  _onInput(e) {
    const target = e.target;
    this.value = target.value;
    this.suxInput.emit();
  }
  // private _onBlur = () => {
  //   this.suxBlur.emit()
  // }
  render() {
    return (h(Host, null,
      h("slot", null)));
  }
  static get is() { return "sux-menu-item"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["sux-menu-item.css"]
  }; }
  static get styleUrls() { return {
    "$": ["sux-menu-item.css"]
  }; }
  static get properties() { return {
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
        "text": "value"
      },
      "attribute": "value",
      "reflect": false
    },
    "active": {
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
        "text": "active"
      },
      "attribute": "active",
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
        "text": "disabled"
      },
      "attribute": "disabled",
      "reflect": false
    },
    "selected": {
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
        "text": "selected"
      },
      "attribute": "selected",
      "reflect": false
    },
    "noWrap": {
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
        "text": "no wrap"
      },
      "attribute": "no-wrap",
      "reflect": false
    }
  }; }
  static get events() { return [{
      "method": "suxMenuItemClick",
      "name": "suxclick",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "tabindex"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
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
