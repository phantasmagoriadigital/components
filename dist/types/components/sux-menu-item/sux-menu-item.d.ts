import { EventEmitter } from '../../stencil-public-runtime';
export declare class SuxMenuItem {
  el: HTMLSuxMenuItemElement;
  /**
   * value
   */
  value: string;
  /**
   * active
   */
  active: boolean;
  /**
   * disabled
   */
  disabled: boolean;
  /**
   * selected
   */
  selected: boolean;
  /**
   * no wrap
   */
  noWrap: boolean;
  /**
   * tabindex
   */
  suxMenuItemClick: EventEmitter;
  /**
   * Fires when the value of the input changes
   */
  suxChange: EventEmitter;
  /**
   * Fires when an alteration to the input's value is made
   */
  suxInput: EventEmitter;
  /**
   * Fires when the element loses focus
   */
  suxBlur: EventEmitter;
  connectedCallback(): void;
  private _onClick;
  private _onInput;
  render(): any;
}
