import { Component, h, Prop } from '@stencil/core';
import { HeadingSize, HeadingVariant, HeadingWeight } from './interfaces';

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
  @Prop({ reflect: true }) size: HeadingSize = "m";

  /**
   * Heading variant
   */
  @Prop({ reflect: true }) variant: HeadingVariant = "serif";

  /**
   * Heading weight
   */
  @Prop({ reflect: true }) weight: HeadingWeight = "regular";

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
    const { size, variant, weight } = this
    return (
      <Tag
        class={{
          'sux-heading': true,
          'sux-heading--serif': variant === 'serif',
          'sux-heading--sans-serif': variant === 'sans-serif',
          'sux-heading--mono': variant === 'mono',
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
