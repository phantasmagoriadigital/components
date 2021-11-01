import { Component, h, Prop, Element } from '@stencil/core';
export class SuxButton {
  constructor() {
    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //--------------------------------------------------------------------------
    /** Applies to the aria-label attribute on the button or hyperlink */
    this.label = 'Button label';
    /** The name attribute to apply to the button  */
    this.name = 'button-';
    /** specify the appearance style of the button, defaults to solid.  */
    this.variant = "cta";
    /** specify the size of the button, defaults to m */
    this.size = "m";
    /** Is quiet makes the button appear with least prominence.  */
    this.quiet = false;
    /** is the button disabled  */
    this.disabled = false;
    /** optionally pass an icon to display at the start of a button - accepts ui icon names  */
    this.iconStart = false;
    /** optionally add a sux-loader component to the button, disabling interaction.  */
    this.isLoading = false;
  }
  // render() {
  //   return (
  //     <Host>
  //       <slot></slot>
  //     </Host>
  //   );
  // }
  render() {
    // const dir = getElementDir(this.el);
    const Tag = 'button';
    /** Loader component  */
    const loaderEl = (h("div", { class: 'loader' }, "loader"));
    /** Icon Start (left side)  */
    const iconStartEl = (h("div", { class: 'iconStart' }, "iconStart"));
    /** Content element with slot  */
    const contentEl = (h("span", { class: 'content' },
      h("slot", null)));
    /** Icon End (right side) */
    const iconEndEl = (h("div", { class: 'iconStart' }, "iconEnd"));
    const { size, variant, disabled, quiet } = this;
    return (h(Tag, { class: {
        'sux-button': true,
        'sux-button--cta': variant === 'cta',
        'sux-button--primary': variant === 'primary',
        'sux-button--secondary': variant === 'secondary',
        'sux-button--negative': variant === 'negative',
        'sux-button--sizeS': size === 's',
        'sux-button--sizeM': size === 'm',
        'sux-button--sizeL': size === 'l',
        'sux-button--sizeXL': size === 'xl',
        'sux-button--quiet': quiet,
      }, disabled: disabled },
      this.isLoading ? loaderEl : null,
      this.iconStart ? iconStartEl : null,
      contentEl,
      this.iconEnd ? iconEndEl : null));
  }
  static get is() { return "sux-button"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["sux-button.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["sux-button.css"]
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
        "text": "Applies to the aria-label attribute on the button or hyperlink"
      },
      "attribute": "label",
      "reflect": true,
      "defaultValue": "'Button label'"
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
      "optional": true,
      "docs": {
        "tags": [],
        "text": "The name attribute to apply to the button"
      },
      "attribute": "name",
      "reflect": true,
      "defaultValue": "'button-'"
    },
    "type": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "The type attribute to apply to the button"
      },
      "attribute": "type",
      "reflect": false
    },
    "variant": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "ButtonVariant",
        "resolved": "\"cta\" | \"negative\" | \"primary\" | \"secondary\"",
        "references": {
          "ButtonVariant": {
            "location": "import",
            "path": "./interfaces"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "specify the appearance style of the button, defaults to solid."
      },
      "attribute": "variant",
      "reflect": true,
      "defaultValue": "\"cta\""
    },
    "size": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "ButtonSize",
        "resolved": "\"l\" | \"m\" | \"s\" | \"xl\"",
        "references": {
          "ButtonSize": {
            "location": "import",
            "path": "./interfaces"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "specify the size of the button, defaults to m"
      },
      "attribute": "size",
      "reflect": true,
      "defaultValue": "\"m\""
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
        "text": "Is quiet makes the button appear with least prominence."
      },
      "attribute": "quiet",
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
      "optional": true,
      "docs": {
        "tags": [],
        "text": "is the button disabled"
      },
      "attribute": "disabled",
      "reflect": true,
      "defaultValue": "false"
    },
    "iconStart": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "optionally pass an icon to display at the start of a button - accepts ui icon names"
      },
      "attribute": "icon-start",
      "reflect": true,
      "defaultValue": "false"
    },
    "iconEnd": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'icon-close' | 'icon-open' | 'icon-info'",
        "resolved": "\"icon-close\" | \"icon-info\" | \"icon-open\"",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "optionally pass an icon to display at the end of a button - accepts ui icon names"
      },
      "attribute": "icon-end",
      "reflect": false
    },
    "isLoading": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "optionally add a sux-loader component to the button, disabling interaction."
      },
      "attribute": "is-loading",
      "reflect": true,
      "defaultValue": "false"
    }
  }; }
  static get elementRef() { return "el"; }
}
