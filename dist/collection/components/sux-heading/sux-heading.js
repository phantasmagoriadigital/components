import { Component, h, Prop } from '@stencil/core';
export class SuxHeading {
  constructor() {
    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //--------------------------------------------------------------------------
    /**
     * Heading  size
     */
    this.size = "m";
    /**
     * Heading variant
     */
    this.variant = "serif";
    /**
     * Heading weight
     */
    this.weight = "regular";
    /**
     * Overwrite Tag
     */
    this.tag = null;
  }
  /**
   * Text decorators
   */
  render() {
    const sizeToTag = {
      'xxl': 'h1',
      'xl': 'h2',
      'l': 'h3',
      'm': 'h4',
      's': 'h5',
      'xs': 'h6',
    };
    // const dir = getElementDir(this.el);
    const Tag = this.tag === null ? sizeToTag[this.size] : this.tag;
    /** Content element with slot  */
    const contentEl = (h("span", { class: 'content' },
      h("slot", null)));
    const { size, variant, weight } = this;
    return (h(Tag, { class: {
        'sux-heading': true,
        'sux-heading--serif': variant === 'serif',
        'sux-heading--sans-serif': variant === 'sans-serif',
        'sux-heading--mono': variant === 'mono',
        'sux-heading--xs': size === "xs",
        'sux-heading--s': size === "s",
        'sux-heading--m': size === "m",
        'sux-heading--l': size === "l",
        'sux-heading--xl': size === "xl",
        'sux-heading--xxl': size === "xxl",
        'sux-heading--light': weight === "light",
        'sux-heading--regular': weight === "regular",
        'sux-heading--semibold': weight === "semibold",
        'sux-heading--bold': weight === "bold",
      } }, contentEl));
  }
  static get is() { return "sux-heading"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["sux-heading.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["sux-heading.css"]
  }; }
  static get properties() { return {
    "size": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "HeadingSize",
        "resolved": "\"l\" | \"m\" | \"s\" | \"xl\" | \"xs\" | \"xxl\"",
        "references": {
          "HeadingSize": {
            "location": "import",
            "path": "./interfaces"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Heading  size"
      },
      "attribute": "size",
      "reflect": true,
      "defaultValue": "\"m\""
    },
    "variant": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "HeadingVariant",
        "resolved": "\"mono\" | \"sans-serif\" | \"serif\"",
        "references": {
          "HeadingVariant": {
            "location": "import",
            "path": "./interfaces"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Heading variant"
      },
      "attribute": "variant",
      "reflect": true,
      "defaultValue": "\"serif\""
    },
    "weight": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "HeadingWeight",
        "resolved": "\"bold\" | \"light\" | \"regular\" | \"semibold\"",
        "references": {
          "HeadingWeight": {
            "location": "import",
            "path": "./interfaces"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Heading weight"
      },
      "attribute": "weight",
      "reflect": true,
      "defaultValue": "\"regular\""
    },
    "tag": {
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
        "text": "Overwrite Tag"
      },
      "attribute": "tag",
      "reflect": true,
      "defaultValue": "null"
    }
  }; }
}
