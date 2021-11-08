'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-81a89fea.js');

const suxMenuItemCss = ":host{display:block}";

let SuxMenuItem = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.suxMenuItemClick = index.createEvent(this, "suxclick", 7);
    this.suxChange = index.createEvent(this, "suxchange", 7);
    this.suxInput = index.createEvent(this, "suxinput", 7);
    this.suxBlur = index.createEvent(this, "suxblur", 7);
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
    return (index.h(index.Host, null, index.h("slot", null)));
  }
  get el() { return index.getElement(this); }
};
SuxMenuItem.style = suxMenuItemCss;

exports.sux_menu_item = SuxMenuItem;
