import { LabelPosition } from './interfaces';
export declare class SuxPicker {
  el: HTMLElement;
  /**
   * label
   */
  label: string;
  /**
   * Label position
   */
  labelPosition: LabelPosition;
  /**
   * Placeholder
   */
  placeholder: string;
  /**
   * Value
   */
  value: string;
  /**
   * Width
   */
  width: string;
  /**
   * quiet
   */
  quiet: boolean;
  /**
   * Required
   */
  required: boolean;
  /**
   * Error
   */
  error: boolean;
  /**
   * Disabled
   */
  disabled: boolean;
  /**
   * Read only
   */
  readonly: boolean;
  /**
   * Help Text
   */
  helpText: string;
  render(): any;
}
