import { Component, Host, h, Prop } from '@stencil/core';
import { HelpTextSize, HelpTextVariant } from "./interfaces";
@Component({
  tag: 'sux-help-text',
  styleUrl: 'sux-help-text.scss',
  shadow: true,
})
export class SuxHelpText {
  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------
  /**
   * text
   */
  @Prop() text: string = '';

  /**
   * Variant
   */
  @Prop() variant: HelpTextVariant = 'neutral';

  /**
   * size
   */
  @Prop() size: HelpTextSize = 's';

  /**
   * Icon
   */
  @Prop() icon: boolean = false;

  /**
   * disabled
   */
  @Prop() disabled: boolean = false;

  render() {
    const { variant, size, icon, disabled, text } = this
    return (
      <Host>
        <div
          class={{
            'sux-help-text': true,
            'sux-help-text--neutral': variant === 'neutral',
            'sux-help-text--negative': variant === 'negative',
            'sux-help-text--sizeS': size === 's',
            'sux-help-text--sizeM': size === 'm',
            'sux-help-text--sizeL': size === 'l',
            'sux-help-text--sizeXL': size === 'xl',
            'sux-help-text--icon': icon,
            'sux-help-text--disabled': disabled

          }}
        >
          <icon>!</icon>
          <slot>{text}</slot>
        </div>
      </Host>
    );
  }

}
