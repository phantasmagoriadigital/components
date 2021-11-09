import { EventEmitter } from '../../stencil-public-runtime';
export declare class SuxCheckbox {
  el: HTMLSuxCheckboxElement;
  checkboxId: string;
  private _inputEl?;
  /**
   * Label for the checkbox
   */
  label: string;
  /**
     * The checkbox name
     */
  name: string;
  /**
   * Checked value of checkbox
   */
  checked: boolean;
  /**
   * Indeterminate state of checkbox
   */
  indeterminate: boolean;
  /**
   * disable the checkbox
   */
  disabled: boolean;
  /**
   * Error
   */
  error: boolean;
  /**
   * Read only
   */
  readonly: boolean;
  /**
   * Value
   */
  value: string;
  /**
   * Help text
   */
  helpText: string;
  updateChecked(): void;
  updateIndeterminate(): void;
  /**
   * Fired when the value of the input changes
   */
  suxChange: EventEmitter;
  /**
   * Fired when an alteration to the input's value is committed by the user
   */
  suxInput: EventEmitter;
  /**
   * Fired when an element has lost focus
   */
  suxBlur: EventEmitter;
  constructor();
  connectedCallback(): void;
  componentDidLoad(): void;
  private _onClick;
  private _onInput;
  private _onBlur;
  render(): any;
}
