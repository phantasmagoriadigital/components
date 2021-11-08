import { EventEmitter } from '../../stencil-public-runtime';
import { TextFieldSize, TextFieldType } from './interfaces';
export declare class SuxTextField {
  el: HTMLElement;
  inputId: string;
  /**
   * Placeholder text
   */
  placeholder: string;
  /**
   * value of the input
   */
  value: string;
  /**
   * size of the input
   */
  size: TextFieldSize;
  /**
   * width of the input
   */
  width: string;
  /**
   * disabled input
   */
  disabled: boolean;
  /**
   * read only
   */
  readonly: boolean;
  /**
   * valid icon
   */
  validIcon: boolean;
  /**
   * Input type
   */
  type: TextFieldType;
  /**
   * Help text
   */
  helpText: string;
  /**
   * Label text
   */
  label: string;
  /**
   * Label position
   */
  labelPosition: 'top' | 'side';
  /**
   * Required
   */
  required: boolean;
  /**
   * Error message
   */
  errorText: string;
  /**
   * Error
   */
  error: boolean;
  /**

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
  connectedCallback(): void;
  private _onChange;
  private _onInput;
  private _onBlur;
  render(): any;
}
