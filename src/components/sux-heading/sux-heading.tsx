import { Component, h, Prop } from '@stencil/core';
import { HeadingSize, HeadingClassification, HeadingWeight } from './interfaces';
import { HEADING_SIZE, HEADING_CLASSIFICATION, HEADING_WEIGHT } from "../defaults/prop-defaults";

@Component({
  tag: 'sux-heading',
  styleUrl: 'sux-heading.scss',
  shadow: true,
})
export class SuxHeading {

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------
  /**
   * Heading  size
   */
  @Prop({ reflect: true }) size: HeadingSize = HEADING_SIZE;

  /**
   * Heading classification
   */
  @Prop({ reflect: true }) classification: HeadingClassification = HEADING_CLASSIFICATION;

  /**
   * Heading weight
   */
  @Prop({ reflect: true }) weight: HeadingWeight = HEADING_WEIGHT;

  /**
   * Overwrite Tag
   */
  @Prop({ reflect: true }) tag?: string = null;

  /**
   * Text decorators
   */



  render() {

    const sizeToTag = {
      'xxl': 'h1',
      'xl': 'h2',
      'l': 'h3',
      'm': 'h4',
      's': 'h5',
      'xs': 'h6',
    }
    // const dir = getElementDir(this.el);
    const Tag = this.tag === null ? sizeToTag[this.size] : this.tag;

    /** Content element with slot  */
    const contentEl = (
      <span class={'content'}>
        <slot />
      </span>
    );
    const { size, classification, weight } = this
    return (
      <Tag
        class={{
          'sux-heading': true,
          'sux-heading--serif': classification === 'serif',
          'sux-heading--sans-serif': classification === 'sans-serif',
          'sux-heading--mono': classification === 'mono',
          'sux-heading--xs': size === "xs",
          'sux-heading--s': size === "s",
          'sux-heading--m': size === "m",
          'sux-heading--l': size === "l",
          'sux-heading--xl': size === "xl",
          'sux-heading--xxl': size === "xxl",
          'sux-heading--light': weight === "light",
          'sux-heading--regular': weight === "regular",
          'sux-heading--semibold': weight === "semibold",
          'sux-heading--bold': weight === "bold",
        }}
      >
        {contentEl}
      </Tag>
    );
  }

}
