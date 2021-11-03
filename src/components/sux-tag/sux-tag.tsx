import { Component, Host, h, Prop } from '@stencil/core';
import { TagSize, TagVariant } from "./interfaces";
// import
import { TAG_SIZE, TAG_VARIANT } from "../defaults/prop-defaults";

@Component({
  tag: 'sux-tag',
  styleUrl: 'sux-tag.scss',
  shadow: true,
})
export class SuxTag {
  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------
  /**
   * label for the tag
   */
  @Prop() label: string;

  /**
   * Size
   */
  @Prop() size: TagSize = TAG_SIZE;

  /**
   * Variant
   */
  @Prop() variant: TagVariant = TAG_VARIANT;


  render() {
    const { label, size, variant } = this
    return (
      <Host>
        <div
          class={{
            'sux-tag': true,
            'sux-tag--info': variant == 'info',
            'sux-tag--success': variant == 'success',
            'sux-tag--warning': variant == 'warning',
            'sux-tag--error': variant == 'error',
            'sux-tag--neutral': variant == 'neutral',
            'sux-tag--sizeS': size == 's',
            'sux-tag--sizeM': size == 'm',
            'sux-tag--sizeL': size == 'l',
            'sux-tag--sizeXL': size == 'xl'
          }}
        >
          <slot>{label}</slot>
        </div>
      </Host>
    );
  }

}
