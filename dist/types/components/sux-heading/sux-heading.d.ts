import { HeadingSize, HeadingVariant, HeadingWeight } from './interfaces';
export declare class SuxHeading {
  /**
   * Heading  size
   */
  size: HeadingSize;
  /**
   * Heading variant
   */
  variant: HeadingVariant;
  /**
   * Heading weight
   */
  weight: HeadingWeight;
  /**
   * Overwrite Tag
   */
  tag?: string;
  /**
   * Text decorators
   */
  render(): any;
}
