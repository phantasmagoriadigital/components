import { Component, h, Prop } from '@stencil/core';
import { BodySize, BodyClassification } from './interfaces';
import { BODY_SIZE, BODY_CLASSIFICATION } from "../defaults/prop-defaults";

@Component({
  tag: 'sux-body',
  styleUrl: 'sux-body.scss',
  shadow: true,
})
export class SuxBody {
  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  /**
   * Size
   */
  @Prop({ reflect: true }) size: BodySize = BODY_SIZE;

  /**
   * Classification
   */
  @Prop({ reflect: true }) classification: BodyClassification = BODY_CLASSIFICATION;

  render() {
    /** Content element with slot  */
    const contentEl = (
      <span class={'content'}>
        <slot />
      </span>
    );
    const { size, classification } = this
    return (
      <p
        class={{
          'sux-body': true,
          'sux-body--serif': classification === 'serif',
          'sux-body--sans-serif': classification === 'sans-serif',
          'sux-body--mono': classification === 'mono',
          'sux-body--xs': size === "xs",
          'sux-body--s': size === "s",
          'sux-body--m': size === "m",
          'sux-body--l': size === "l",
          'sux-body--xl': size === "xl",
          'sux-body--xxl': size === "xxl",
          'sux-body--xxxl': size === "xxxl",

        }}
      >
        {contentEl}
      </p>
    );
  }

}
