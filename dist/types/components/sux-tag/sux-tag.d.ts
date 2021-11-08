import { TagSize, TagVariant, TagState } from "./interfaces";
export declare class SuxTag {
  /**
   * label for the tag
   */
  label: string;
  /**
   * Size
   */
  size: TagSize;
  /**
   * Variant
   */
  variant: TagVariant;
  /**
   * State
   */
  state: TagState;
  render(): any;
}
