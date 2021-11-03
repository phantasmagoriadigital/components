import { attachShadow, h, Host, proxyCustomElement } from '@stencil/core/internal/client';
export { setAssetPath, setPlatformOptions } from '@stencil/core/internal/client';

const HEADING_SIZE = "m";
const HEADING_CLASSIFICATION = "serif";
const HEADING_WEIGHT = "regular";
const BODY_SIZE = "m";
const BODY_CLASSIFICATION = "serif";
const DETAIL_SIZE = "m";
const DETAIL_CLASSIFICATION = "sans-serif";
const DETAIL_WEIGHT = "regular";
const CODE_SIZE = "m";
const TAG_SIZE = "m";
const TAG_VARIANT = "info";

const suxBodyCss = ":host{display:block}.sux-body{line-height:150%}.sux-body em{font-weight:italic}.sux-body strong{font-style:700}.sux-body--serif{font-family:\"IBM Plex Serif\", serif}.sux-body--sans-serif{font-family:\"IBM Plex Sans\", sans-serif}.sux-body--mono{font-family:\"IBM Plex Mono\", monospace}.sux-body--xs{font-size:12px}.sux-body--s{font-size:14px}.sux-body--m{font-size:16px}.sux-body--l{font-size:18px}.sux-body--xl{font-size:20px}.sux-body--xxl{font-size:22px}.sux-body--xxxl{font-size:24px}";

let SuxBody$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //--------------------------------------------------------------------------
    /**
     * Size
     */
    this.size = BODY_SIZE;
    /**
     * Classification
     */
    this.classification = BODY_CLASSIFICATION;
  }
  render() {
    /** Content element with slot  */
    const contentEl = (h("span", { class: 'content' }, h("slot", null)));
    const { size, classification } = this;
    return (h("p", { class: {
        'sux-body': true,
        'sux-body--serif': classification === 'serif',
        'sux-body--sans-serif': classification === 'sans-serif',
        'sux-body--mono': classification === 'mono',
        'sux-body--xs': size === "xs",
        'sux-body--s': size === "s",
        'sux-body--m': size === "m",
        'sux-body--l': size === "l",
        'sux-body--xl': size === "xl",
        'sux-body--xxl': size === "xxl",
        'sux-body--xxxl': size === "xxxl",
      } }, contentEl));
  }
  static get style() { return suxBodyCss; }
};

const suxButtonCss = ":host{display:block}.sux-button{position:relative;display:inline-flex;align-items:center;justify-content:center;border-radius:4px;border-width:1px;border-style:solid;background-color:transparent;font-family:\"IBM Plex Serif\", serif;font-weight:700}.sux-button:disabled{cursor:not-allowed;pointer-events:none;color:#bbbbbb;background-color:#ebebeb;border-color:#ebebeb}.sux-button:focus{outline:2px solid #343e97;outline-offset:2px}.sux-button:hover:not([disabled]){cursor:pointer}.sux-button--quiet{border:none !important}.sux-button--sizeS{font-size:14px;padding-left:16px;padding-right:16px;padding-top:8px;padding-bottom:8px}.sux-button--sizeM{font-size:16px;padding-left:16px;padding-right:16px;padding-top:12px;padding-bottom:12px}.sux-button--sizeL{font-size:18px;padding-left:16px;padding-right:16px;padding-top:16px;padding-bottom:16px}.sux-button--sizeXL{font-size:20px;padding-left:16px;padding-right:16px;padding-top:20px;padding-bottom:20px}.sux-button--cta{background-color:#0052cc;color:#ffffff;border-color:#0052cc}.sux-button--cta:hover{background-color:#003d99;color:#ffffff}.sux-button--primary{color:#747474;border-color:#747474}.sux-button--primary:hover{background-color:#747474;color:#505050}.sux-button--secondary{color:#bbbbbb;border-color:#bbbbbb}.sux-button--secondary:hover{background-color:#bbbbbb;color:#747474}.sux-button--negative{color:#ff6246;border-color:#ff6246}.sux-button--negative:hover{background-color:#ff6246;color:#d9533c}";

let SuxButton$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
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
    /** optionally pass an icon to display at the end of a button - accepts ui icon names  */
    this.iconEnd = false;
    /** optionally add a sux-loader component to the button, disabling interaction.  */
    this.isLoading = false;
  }
  render() {
    // const dir = getElementDir(this.el);
    const Tag = 'button';
    /** Loader component  */
    const loaderEl = (h("div", { class: 'loader' }, "\u267B\uFE0F\u00A0"));
    /** Icon Start (left side)  */
    const iconStartEl = (h("div", { class: 'iconStart' }, "\uD83D\uDEA7\u00A0\u00A0"));
    /** Content element with slot  */
    const contentEl = (h("span", { class: 'content' }, h("slot", null)));
    /** Icon End (right side) */
    const iconEndEl = (h("div", { class: 'iconEnd' }, "\u00A0\u00A0\uD83D\uDEA7"));
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
      }, disabled: disabled }, this.isLoading ? loaderEl : null, this.iconStart ? iconStartEl : null, contentEl, this.iconEnd ? iconEndEl : null));
  }
  get el() { return this; }
  static get style() { return suxButtonCss; }
};

const suxCodeCss = ":host{display:block}.sux-code{line-height:150%;font-family:\"IBM Plex Mono\", monospace}.sux-code--s{font-size:14px}.sux-code--m{font-size:16px}.sux-code--l{font-size:18px}.sux-code--xl{font-size:20px}";

let SuxCode$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //--------------------------------------------------------------------------
    /**
     * Size
     */
    this.size = CODE_SIZE;
  }
  render() {
    /** Content element with slot  */
    const contentEl = (h("span", { class: 'content' }, h("slot", null)));
    const { size } = this;
    return (h("code", { class: {
        'sux-code': true,
        'sux-code--s': size === "s",
        'sux-code--m': size === "m",
        'sux-code--l': size === "l",
        'sux-code--xl': size === "xl",
      } }, contentEl));
  }
  static get style() { return suxCodeCss; }
};

const suxDetailCss = ":host{display:block}.sux-detail{line-height:130%}.sux-detail--serif{font-family:\"IBM Plex Serif\", serif}.sux-detail--sans-serif{font-family:\"IBM Plex Sans\", sans-serif}.sux-detail--mono{font-family:\"IBM Plex Mono\", monospace}.sux-detail--s{font-size:10px}.sux-detail--m{font-size:12px}.sux-detail--l{font-size:14px}.sux-detail--xl{font-size:16px}.sux-detail--light{font-weight:300}.sux-detail--regular{font-weight:400}";

let SuxDetail$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //--------------------------------------------------------------------------
    /**
     * Size
     */
    this.size = DETAIL_SIZE;
    /**
     * Classification
     */
    this.classification = DETAIL_CLASSIFICATION;
    /**
     * Weight
     */
    this.weight = DETAIL_WEIGHT;
  }
  render() {
    /** Content element with slot  */
    const contentEl = (h("span", { class: 'content' }, h("slot", null)));
    const { size, classification, weight } = this;
    return (h("p", { class: {
        'sux-detail': true,
        'sux-detail--serif': classification === 'serif',
        'sux-detail--sans-serif': classification === 'sans-serif',
        'sux-detail--mono': classification === 'mono',
        'sux-detail--s': size === "s",
        'sux-detail--m': size === "m",
        'sux-detail--l': size === "l",
        'sux-detail--xl': size === "xl",
        'sux-detail--light': weight === "light",
        'sux-detail--regular': weight === "regular",
      } }, contentEl));
  }
  static get style() { return suxDetailCss; }
};

const suxFieldLabelCss = ":host{display:block}:host([position=side]){display:inline-block}.sux-field-label{font-family:\"IBM Plex Sans\", sans-serif;color:#323232;margin-bottom:6px}.sux-field-label--sizeS{font-size:12px}.sux-field-label--sizeM{font-size:12px}.sux-field-label--sizeL{font-size:14px}.sux-field-label--sizeXL{font-size:16px}.sux-field-label--required icon{display:inline-block !important}.sux-field-label icon{display:none}.sux-field-label--disabled{color:#bbbbbb;cursor:none}";

let SuxFieldLabel$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
    /**
     * Size
     */
    this.size = 's';
    /**
     * position
     */
    this.position = 'top';
    /**
     * Required
     */
    this.required = false;
    /**
     * Disabled
     */
    this.disabled = false;
  }
  render() {
    const { label, size, required, disabled, position } = this;
    return (h(Host, null, h("div", { class: {
        'sux-field-label': true,
        'sux-field-label--sizeS': size === 's',
        'sux-field-label--sizeM': size === 'm',
        'sux-field-label--sizeL': size === 'l',
        'sux-field-label--sizeXL': size === 'xl',
        'sux-field-label--positionTop': position === 'top',
        'sux-field-label--positionSide': position === 'side',
        'sux-field-label--required': required,
        'sux-field-label--disabled': disabled,
      } }, h("label", null, h("slot", null, label), h("icon", null, "*")))));
  }
  static get style() { return suxFieldLabelCss; }
};

const suxHeadingCss = ":host{display:block}.sux-heading{line-height:130%}.sux-heading--serif{font-family:\"IBM Plex Serif\", serif}.sux-heading--sans-serif{font-family:\"IBM Plex Sans\", sans-serif}.sux-heading--mono{font-family:\"IBM Plex Mono\", monospace}.sux-heading--xs{font-size:24px}.sux-heading--s{font-size:28px}.sux-heading--m{font-size:32px}.sux-heading--l{font-size:42px}.sux-heading--xl{font-size:48px}.sux-heading--xxl{font-size:64px}.sux-heading--light{font-weight:300}.sux-heading--regular{font-weight:400}.sux-heading--semibold{font-weight:600}.sux-heading--bold{font-weight:700}";

let SuxHeading$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //--------------------------------------------------------------------------
    /**
     * Heading  size
     */
    this.size = HEADING_SIZE;
    /**
     * Heading classification
     */
    this.classification = HEADING_CLASSIFICATION;
    /**
     * Heading weight
     */
    this.weight = HEADING_WEIGHT;
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
    const contentEl = (h("span", { class: 'content' }, h("slot", null)));
    const { size, classification, weight } = this;
    return (h(Tag, { class: {
        'sux-heading': true,
        'sux-heading--serif': classification === 'serif',
        'sux-heading--sans-serif': classification === 'sans-serif',
        'sux-heading--mono': classification === 'mono',
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
  static get style() { return suxHeadingCss; }
};

const suxHelpTextCss = ":host{display:block}.sux-help-text{font-family:\"IBM Plex Sans\", sans-serif}.sux-help-text--neutral{color:#505050}.sux-help-text--negative{color:#ff5630}.sux-help-text--sizeS{font-size:12px}.sux-help-text--sizeM{font-size:12px}.sux-help-text--sizeL{font-size:14px}.sux-help-text--sizeXL{font-size:16px}.sux-help-text--disabled{color:#bbbbbb}.sux-help-text--icon icon{display:inline-block !important}.sux-help-text icon{display:none}";

let SuxHelpText$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
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
    return (h(Host, null, h("div", { class: {
        'sux-help-text': true,
        'sux-help-text--neutral': variant === 'neutral',
        'sux-help-text--negative': variant === 'negative',
        'sux-help-text--sizeS': size === 's',
        'sux-help-text--sizeM': size === 'm',
        'sux-help-text--sizeL': size === 'l',
        'sux-help-text--sizeXL': size === 'xl',
        'sux-help-text--icon': icon,
        'sux-help-text--disabled': disabled
      } }, h("icon", null, "!"), h("slot", null, text))));
  }
  static get style() { return suxHelpTextCss; }
};

const suxTagCss = ":host{display:block}.sux-tag{display:inline-flex;font-family:\"IBM Plex Sans\", sans-serif;font-weight:400;color:#ffffff;border-radius:2px}.sux-tag--info{background-color:#0052cc}.sux-tag--warning{background-color:#eea000}.sux-tag--error{background-color:#ff5630}.sux-tag--success{background-color:#36b37e}.sux-tag--neutral{background-color:#000000}.sux-tag--sizeS{font-size:12px;padding-top:6px;padding-right:12px;padding-bottom:6px;padding-left:12px}.sux-tag--sizeM{font-size:14px;padding-top:8px;padding-right:16px;padding-bottom:8px;padding-left:16px}.sux-tag--sizeL{font-size:16px;padding-top:8px;padding-right:16px;padding-bottom:8px;padding-left:16px}.sux-tag--sizeXL{font-size:18px;padding-top:8px;padding-right:16px;padding-bottom:8px;padding-left:16px}";

let SuxTag$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
    /**
     * Size
     */
    this.size = TAG_SIZE;
    /**
     * Variant
     */
    this.variant = TAG_VARIANT;
  }
  render() {
    const { label, size, variant } = this;
    return (h(Host, null, h("div", { class: {
        'sux-tag': true,
        'sux-tag--info': variant == 'info',
        'sux-tag--success': variant == 'success',
        'sux-tag--warning': variant == 'warning',
        'sux-tag--error': variant == 'error',
        'sux-tag--neutral': variant == 'neutral',
        'sux-tag--sizeS': size == 's',
        'sux-tag--sizeM': size == 'm',
        'sux-tag--sizeL': size == 'l',
        'sux-tag--sizeXL': size == 'xl'
      } }, h("slot", null, label))));
  }
  static get style() { return suxTagCss; }
};

const SuxBody = /*@__PURE__*/proxyCustomElement(SuxBody$1, [1,"sux-body",{"size":[513],"classification":[513]}]);
const SuxButton = /*@__PURE__*/proxyCustomElement(SuxButton$1, [1,"sux-button",{"label":[513],"name":[513],"type":[1025],"variant":[513],"size":[513],"quiet":[516],"disabled":[516],"iconStart":[516,"icon-start"],"iconEnd":[4,"icon-end"],"isLoading":[516,"is-loading"]}]);
const SuxCode = /*@__PURE__*/proxyCustomElement(SuxCode$1, [1,"sux-code",{"size":[513]}]);
const SuxDetail = /*@__PURE__*/proxyCustomElement(SuxDetail$1, [1,"sux-detail",{"size":[513],"classification":[513],"weight":[513]}]);
const SuxFieldLabel = /*@__PURE__*/proxyCustomElement(SuxFieldLabel$1, [1,"sux-field-label",{"label":[1],"size":[1],"position":[1],"required":[4],"disabled":[4]}]);
const SuxHeading = /*@__PURE__*/proxyCustomElement(SuxHeading$1, [1,"sux-heading",{"size":[513],"classification":[513],"weight":[513],"tag":[513]}]);
const SuxHelpText = /*@__PURE__*/proxyCustomElement(SuxHelpText$1, [1,"sux-help-text",{"text":[1],"variant":[1],"size":[1],"icon":[4],"disabled":[4]}]);
const SuxTag = /*@__PURE__*/proxyCustomElement(SuxTag$1, [1,"sux-tag",{"label":[1],"size":[1],"variant":[1]}]);
const defineCustomElements = (opts) => {
  if (typeof customElements !== 'undefined') {
    [
      SuxBody,
  SuxButton,
  SuxCode,
  SuxDetail,
  SuxFieldLabel,
  SuxHeading,
  SuxHelpText,
  SuxTag
    ].forEach(cmp => {
      if (!customElements.get(cmp.is)) {
        customElements.define(cmp.is, cmp, opts);
      }
    });
  }
};

export { SuxBody, SuxButton, SuxCode, SuxDetail, SuxFieldLabel, SuxHeading, SuxHelpText, SuxTag, defineCustomElements };
