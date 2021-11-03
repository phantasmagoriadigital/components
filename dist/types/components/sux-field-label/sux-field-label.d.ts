import { FieldLabelSize, FieldLabelPosition } from "./interfaces";
export declare class SuxFieldLabel {
  /**
   * Label
   */
  label: string;
  /**
   * Size
   */
  size: FieldLabelSize;
  /**
   * position
   */
  position: FieldLabelPosition;
  /**
   * Required
   */
  required: boolean;
  /**
   * Disabled
   */
  disabled: boolean;
  render(): any;
}
