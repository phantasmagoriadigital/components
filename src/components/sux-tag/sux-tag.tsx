import { Component, Host, h, Prop } from '@stencil/core';
import { TagSize, TagVariant, TagState } from "./interfaces";
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

  /**
   * State
   */
  @Prop() state: TagState = 'info';


  render() {
    const { label, size, variant, state } = this
    return (
      <Host>
        <div
          class={{
            'sux-tag': true,
            '--info': state == 'info',
            '--success': state == 'success',
            '--warning': state == 'warning',
            '--error': state == 'error',
            '--neutral': state == 'neutral',
            'sux-tag--solid': variant == 'solid',
            'sux-tag--inverted': variant == 'inverted',
            'sux-tag--outlined': variant == 'outlined',
            'sux-tag--borderless': variant == 'borderless',

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
