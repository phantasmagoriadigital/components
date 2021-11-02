import { Component, Prop, h } from '@stencil/core';
import { DetailSize, DetailClassification, DetailWeight } from './interfaces';
import { DETAIL_SIZE, DETAIL_CLASSIFICATION, DETAIL_WEIGHT } from "../defaults/prop-defaults";


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
   * Classification
   */
  @Prop({ reflect: true }) classification: DetailClassification = DETAIL_CLASSIFICATION;

  /**
   * Weight
   */
  @Prop({ reflect: true }) weight: DetailWeight = DETAIL_WEIGHT;


  render() {
    /** Content element with slot  */
    const contentEl = (
      <span class={'content'}>
        <slot />
      </span>
    );
    const { size, classification, weight } = this
    return (
      <p
        class={{
          'sux-detail': true,
          'sux-detail--serif': classification === 'serif',
          'sux-detail--sans-serif': classification === 'sans-serif',
          'sux-detail--mono': classification === 'mono',
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
