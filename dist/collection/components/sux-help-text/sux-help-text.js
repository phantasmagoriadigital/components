import { Component, Host, h, Prop } from '@stencil/core';
export class SuxHelpText {
  constructor() {
    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //--------------------------------------------------------------------------
    /**
     * text
     */
    this.text = '';
    /**
     * Variant
     */
    this.variant = 'neutral';
    /**
     * size
     */
    this.size = 's';
    /**
     * Icon
     */
    this.icon = false;
    /**
     * disabled
     */
    this.disabled = false;
  }
  render() {
    const { variant, size, icon, disabled, text } = this;
    return (h(Host, null,
      h("div", { class: {
          'sux-help-text': true,
          'sux-help-text--neutral': variant === 'neutral',
          'sux-help-text--negative': variant === 'negative',
          'sux-help-text--sizeS': size === 's',
          'sux-help-text--sizeM': size === 'm',
          'sux-help-text--sizeL': size === 'l',
          'sux-help-text--sizeXL': size === 'xl',
          'sux-help-text--icon': icon,
          'sux-help-text--disabled': disabled
        } },
        h("icon", null, "!"),
        h("slot", null, text))));
  }
  static get is() { return "sux-help-text"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["sux-help-text.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["sux-help-text.css"]
  }; }
  static get properties() { return {
    "text": {
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
        "text": "text"
      },
      "attribute": "text",
      "reflect": false,
      "defaultValue": "''"
    },
    "variant": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "HelpTextVariant",
        "resolved": "\"negative\" | \"neutral\"",
        "references": {
          "HelpTextVariant": {
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
      "defaultValue": "'neutral'"
    },
    "size": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "HelpTextSize",
        "resolved": "\"l\" | \"m\" | \"s\" | \"xl\"",
        "references": {
          "HelpTextSize": {
            "location": "import",
            "path": "./interfaces"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "size"
      },
      "attribute": "size",
      "reflect": false,
      "defaultValue": "'s'"
    },
    "icon": {
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
        "text": "Icon"
      },
      "attribute": "icon",
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
        "text": "disabled"
      },
      "attribute": "disabled",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
}
