import { Component, Prop, h } from '@stencil/core';
import { DetailSize, DetailVariant, DetailWeight } from './interfaces';
import { DETAIL_SIZE, DETAIL_VARIANT, DETAIL_WEIGHT } from "../defaults/prop-defaults";


@Component({
  tag: 'sux-detail',
  styleUrl: 'sux-detail.scss',
  shadow: true,
})
export class SuxDetail {
  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  /**
   * Size
   */
  @Prop({ reflect: true }) size: DetailSize = DETAIL_SIZE;

  /**
   * Variant
   */
  @Prop({ reflect: true }) variant: DetailVariant = DETAIL_VARIANT;

  /**
   * Variant
   */
  @Prop({ reflect: true }) weight: DetailWeight = DETAIL_WEIGHT;


  render() {
    /** Content element with slot  */
    const contentEl = (
      <span class={'content'}>
        <slot />
      </span>
    );
    const { size, variant, weight } = this
    return (
      <p
        class={{
          'sux-detail': true,
          'sux-detail--serif': variant === 'serif',
          'sux-detail--sans-serif': variant === 'sans-serif',
          'sux-detail--mono': variant === 'mono',
          'sux-detail--s': size === "s",
          'sux-detail--m': size === "m",
          'sux-detail--l': size === "l",
          'sux-detail--xl': size === "xl",
          'sux-detail--light': weight === "light",
          'sux-detail--regular': weight === "regular",
        }}
      >
        {contentEl}
      </p>
    );
  }

}
