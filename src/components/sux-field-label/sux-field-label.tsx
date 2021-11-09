import { Component, Host, h, Prop } from '@stencil/core';
import { FieldLabelSize, FieldLabelPosition } from "./interfaces";

@Component({
  tag: 'sux-field-label',
  styleUrl: 'sux-field-label.scss',
  shadow: true,
})
export class SuxFieldLabel {
  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  /**
   * Label
   */
  @Prop() label: string;

  /**
   * Size
   */
  @Prop() size: FieldLabelSize = 's';

  /**
   * position
   */
  @Prop() position: FieldLabelPosition = 'top';

  /**
   * Required
   */
  @Prop() required: boolean = false;

  /**
   * Disabled
   */
  @Prop() disabled: boolean = false;

  render() {
    const { label, size, required, disabled, position } = this
    return (
      <Host position={position}>
        <div
          class={{
            'sux-field-label': true,
            'sux-field-label--sizeS': size === 's',
            'sux-field-label--sizeM': size === 'm',
            'sux-field-label--sizeL': size === 'l',
            'sux-field-label--sizeXL': size === 'xl',
            'sux-field-label--positionTop': position === 'top',
            'sux-field-label--positionSide': position === 'side',
            'sux-field-label--required': required,
            'sux-field-label--disabled': disabled,


          }}
        >
          <label>
            <slot>{label}</slot>
            <icon>*</icon>
          </label>
        </div>
      </Host>
    );
  }

}
