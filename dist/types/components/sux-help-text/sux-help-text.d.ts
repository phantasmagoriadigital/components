import { HelpTextSize, HelpTextVariant } from "./interfaces";
export declare class SuxHelpText {
  /**
   * text
   */
  text: string;
  /**
   * Variant
   */
  variant: HelpTextVariant;
  /**
   * size
   */
  size: HelpTextSize;
  /**
   * Icon
   */
  icon: boolean;
  /**
   * disabled
   */
  disabled: boolean;
  render(): any;
}
