import { r as registerInstance, h, g as getElement } from './index-d0ea01d6.js';

const BODY_SIZE = "m";

const suxBodyCss = ":host{display:block}.sux-body{line-height:150%}.sux-body--serif{font-family:\"IBM Plex Serif\", serif}.sux-body--sans-serif{font-family:\"IBM Plex Sans\", sans-serif}.sux-body--mono{font-family:\"IBM Plex Mono\", monospace}.sux-body--xs{font-size:12px}.sux-body--s{font-size:14px}.sux-body--m{font-size:16px}.sux-body--l{font-size:18px}.sux-body--xl{font-size:20px}.sux-body--xxl{font-size:22px}.sux-body--xxxl{font-size:24px}";

let SuxBody = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
     * Variant
     */
    this.variant = "serif";
  }
  render() {
    /** Content element with slot  */
    const contentEl = (h("span", { class: 'content' }, h("slot", null)));
    const { size, variant } = this;
    return (h("p", { class: {
        'sux-body': true,
        'sux-body--serif': variant === 'serif',
        'sux-body--sans-serif': variant === 'sans-serif',
        'sux-body--mono': variant === 'mono',
        'sux-body--xs': size === "xs",
        'sux-body--s': size === "s",
        'sux-body--m': size === "m",
        'sux-body--l': size === "l",
        'sux-body--xl': size === "xl",
        'sux-body--xxl': size === "xxl",
        'sux-body--xxxl': size === "xxxl",
      } }, contentEl));
  }
};
SuxBody.style = suxBodyCss;

const suxButtonCss = ":host{display:block}.sux-button{position:relative;display:inline-flex;align-items:center;justify-content:center;border-radius:4px;border-width:1px;border-style:solid;background-color:transparent;font-family:\"IBM Plex Serif\", serif;font-weight:700}.sux-button:disabled{cursor:not-allowed;pointer-events:none;color:#bbbbbb;background-color:#ebebeb;border-color:#ebebeb}.sux-button:focus{outline:2px solid #343e97;outline-offset:2px}.sux-button:hover:not([disabled]){cursor:pointer}.sux-button--quiet{border:none !important}.sux-button--sizeS{font-size:14px;padding-left:16px;padding-right:16px;padding-top:8px;padding-bottom:8px}.sux-button--sizeM{font-size:16px;padding-left:16px;padding-right:16px;padding-top:12px;padding-bottom:12px}.sux-button--sizeL{font-size:18px;padding-left:16px;padding-right:16px;padding-top:16px;padding-bottom:16px}.sux-button--sizeXL{font-size:20px;padding-left:16px;padding-right:16px;padding-top:20px;padding-bottom:20px}.sux-button--cta{background-color:#0052cc;color:#ffffff;border-color:#0052cc}.sux-button--cta:hover{background-color:#003d99;color:#ffffff}.sux-button--primary{color:#747474;border-color:#747474}.sux-button--primary:hover{background-color:#747474;color:#505050}.sux-button--secondary{color:#bbbbbb;border-color:#bbbbbb}.sux-button--secondary:hover{background-color:#bbbbbb;color:#747474}.sux-button--negative{color:#ff6246;border-color:#ff6246}.sux-button--negative:hover{background-color:#ff6246;color:#d9533c}";

let SuxButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    const contentEl = (h("span", { class: 'content' }, h("slot", null)));
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
      }, disabled: disabled }, this.isLoading ? loaderEl : null, this.iconStart ? iconStartEl : null, contentEl, this.iconEnd ? iconEndEl : null));
  }
  get el() { return getElement(this); }
};
SuxButton.style = suxButtonCss;

const suxHeadingCss = ":host{display:block}.sux-heading{line-height:130%}.sux-heading--serif{font-family:\"IBM Plex Serif\", serif}.sux-heading--sans-serif{font-family:\"IBM Plex Sans\", sans-serif}.sux-heading--mono{font-family:\"IBM Plex Mono\", monospace}.sux-heading--xs{font-size:24px}.sux-heading--s{font-size:28px}.sux-heading--m{font-size:32px}.sux-heading--l{font-size:42px}.sux-heading--xl{font-size:48px}.sux-heading--xxl{font-size:64px}.sux-heading--light{font-weight:300}.sux-heading--regular{font-weight:400}.sux-heading--semibold{font-weight:600}.sux-heading--bold{font-weight:700}";

let SuxHeading = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    const contentEl = (h("span", { class: 'content' }, h("slot", null)));
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
};
SuxHeading.style = suxHeadingCss;

export { SuxBody as sux_body, SuxButton as sux_button, SuxHeading as sux_heading };
