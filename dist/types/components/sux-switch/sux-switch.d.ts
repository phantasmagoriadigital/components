import { EventEmitter } from '../../stencil-public-runtime';
export declare class SuxSwitch {
  switchId: string;
  el: HTMLSuxSwitchElement;
  hasLabelSlot: boolean;
  /**
   * Label for the switch
   */
  label: string;
  /**
   * Value of the switch
   */
  value: string;
  /**
   * Checked state of the switch
   */
  checked: boolean;
  /**
   * Disabled state of the switch
   */
  disabled: boolean;
  /**
   * Name of the switch
   */
  name: string;
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
  private _onChange;
  private _onInput;
  private _onBlur;
  render(): any;
}
