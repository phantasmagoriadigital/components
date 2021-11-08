import { EventEmitter } from '../../stencil-public-runtime';
import { RadioSize } from './interfaces';
export declare class SuxRadio {
  radioId: string;
  private radioGroup;
  el: HTMLSuxRadioElement;
  /**
   * Name of the radio
   */
  name: string;
  /**
   * Value of the radio
   */
  value: string;
  /**
   * size of the radio button
   */
  size: RadioSize;
  /**
   * disabled state
   */
  disabled: boolean;
  /**
   * label for the radio button
   */
  label?: string;
  /**
   * Checked state
   */
  checked: boolean;
  /**
   * Fired when an element has lost focus
   */
  suxChange: EventEmitter;
  /**
   * Fired when an element has lost focus
   */
  suxBlur: EventEmitter;
  connectedCallback(): void;
  disconnectedCallback(): void;
  /**
   * Sets checked property when the parent Radio Group value changes.
   */
  syncFromGroup(): void;
  private _onChange;
  private _onBlur;
  render(): any;
}
