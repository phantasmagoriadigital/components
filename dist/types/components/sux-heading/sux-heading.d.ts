import { HeadingSize, HeadingClassification, HeadingWeight } from './interfaces';
export declare class SuxHeading {
  /**
   * Heading  size
   */
  size: HeadingSize;
  /**
   * Heading classification
   */
  classification: HeadingClassification;
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
