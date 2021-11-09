import { Component, Host, h, Element, Prop } from '@stencil/core';
import { LabelPosition } from './interfaces';

@Component({
  tag: 'sux-picker',
  styleUrl: 'sux-picker.scss',
  shadow: true,
})
export class SuxPicker {
  @Element() el: HTMLElement;

  //--------------------------------------------------------------------------
  //  Properties
  //--------------------------------------------------------------------------

  /**
   * label
   */
  @Prop() label: string;

  /**
   * Label position
   */
  @Prop() labelPosition: LabelPosition = 'top';

  /**
   * Placeholder
   */
  @Prop() placeholder: string;

  /**
   * Value
   */
  @Prop() value: string;

  /**
   * Width
   */
  @Prop() width: string;

  /**
   * quiet
   */
  @Prop() quiet: boolean = false;

  /**
   * Required
   */
  @Prop() required: boolean = false;

  /**
   * Error
   */
  @Prop() error: boolean = false;

  /**
   * Disabled
   */
  @Prop() disabled: boolean = false;

  /**
   * Read only
   */
  @Prop() readonly: boolean = false;

  /**
   * Help Text
   */
  @Prop() helpText: string;





  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
