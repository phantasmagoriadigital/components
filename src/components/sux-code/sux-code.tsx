import { Component, Prop, h } from '@stencil/core';
import { CodeSize } from './interfaces';
import { CODE_SIZE } from "../defaults/prop-defaults";

@Component({
  tag: 'sux-code',
  styleUrl: 'sux-code.scss',
  shadow: true,
})
export class SuxCode {
  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  /**
   * Size
   */
  @Prop({ reflect: true }) size: CodeSize = CODE_SIZE;

  render() {
    /** Content element with slot  */
    const contentEl = (
      <span class={'content'}>
        <slot />
      </span>
    );
    const { size } = this
    return (
      <code
        class={{
          'sux-code': true,
          'sux-code--s': size === "s",
          'sux-code--m': size === "m",
          'sux-code--l': size === "l",
          'sux-code--xl': size === "xl",

        }}
      >
        {contentEl}
      </code>
    );
  }

}
