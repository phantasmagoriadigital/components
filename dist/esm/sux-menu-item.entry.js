import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-069adbd6.js';

const suxMenuItemCss = ":host{display:block}";

let SuxMenuItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.suxMenuItemClick = createEvent(this, "suxclick", 7);
    this.suxChange = createEvent(this, "suxchange", 7);
    this.suxInput = createEvent(this, "suxinput", 7);
    this.suxBlur = createEvent(this, "suxblur", 7);
  }
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
    return (h(Host, null, h("slot", null)));
  }
  get el() { return getElement(this); }
};
SuxMenuItem.style = suxMenuItemCss;

export { SuxMenuItem as sux_menu_item };
