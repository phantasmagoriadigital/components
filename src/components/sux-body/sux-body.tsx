import { Component, h, Prop } from '@stencil/core';
import { BodySize, BodyVariant } from './interfaces';
import { BODY_SIZE } from "../defaults/prop-defaults";

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
   * Variant
   */
  @Prop({ reflect: true }) variant: BodyVariant = "serif";

  render() {
    /** Content element with slot  */
    const contentEl = (
      <span class={'content'}>
        <slot />
      </span>
    );
    const { size, variant } = this
    return (
      <p
        class={{
          'sux-body': true,
          'sux-body--serif': variant === 'serif',
          'sux-body--sans-serif': variant === 'sans-serif',
          'sux-body--mono': variant === 'mono',
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
