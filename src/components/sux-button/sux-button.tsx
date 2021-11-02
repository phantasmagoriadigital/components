import { Component, h, Prop, Element } from '@stencil/core';
import { ButtonVariant, ButtonSize } from "./interfaces";

@Component({
  tag: 'sux-button',
  styleUrl: 'sux-button.scss',
  shadow: true,
})
export class SuxButton {
  //--------------------------------------------------------------------------
  //
  //  Element
  //
  //--------------------------------------------------------------------------

  @Element() el: HTMLSuxButtonElement;


  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------
  /** Applies to the aria-label attribute on the button or hyperlink */
  @Prop({ reflect: true }) label: string = 'Button label';

  /** The name attribute to apply to the button  */
  @Prop({ reflect: true }) name?: string = 'button-';

  /** The type attribute to apply to the button  */
  @Prop({ mutable: true }) type?: string;

  /** specify the appearance style of the button, defaults to solid.  */
  @Prop({ reflect: true }) variant: ButtonVariant = "cta";

  /** specify the size of the button, defaults to m */
  @Prop({ reflect: true }) size: ButtonSize = "m";

  /** Is quiet makes the button appear with least prominence.  */
  @Prop({ reflect: true }) quiet: boolean = false;

  /** is the button disabled  */
  @Prop({ reflect: true }) disabled?: boolean = false;

  /** optionally pass an icon to display at the start of a button - accepts ui icon names  */
  @Prop({ reflect: true }) iconStart?: boolean = false;

  /** optionally pass an icon to display at the end of a button - accepts ui icon names  */
  @Prop({ reflect: false }) iconEnd?: boolean = false;

  /** optionally add a sux-loader component to the button, disabling interaction.  */
  @Prop({ reflect: true }) isLoading?: boolean = false;


  render() {
    // const dir = getElementDir(this.el);
    const Tag = 'button';

    /** Loader component  */
    const loaderEl = (
      <div class={'loader'}>
         ♻️&nbsp;
      </div>
    );

    /** Icon Start (left side)  */
    const iconStartEl = (
      <div class={'iconStart'}>
         🚧&nbsp;&nbsp;
      </div>
    );

    /** Content element with slot  */
    const contentEl = (
      <span class={'content'}>
        <slot />
      </span>
    );

    /** Icon End (right side) */
    const iconEndEl = (
      <div class={'iconEnd'}>
         &nbsp;&nbsp;🚧
      </div>
    );
    const { size, variant, disabled, quiet } = this
    return (
      <Tag
        class={{
          'sux-button': true,
          'sux-button--cta': variant === 'cta',
          'sux-button--primary': variant === 'primary',
          'sux-button--secondary': variant === 'secondary',
          'sux-button--negative': variant === 'negative',
          'sux-button--sizeS': size === 's',
          'sux-button--sizeM': size === 'm',
          'sux-button--sizeL': size === 'l',
          'sux-button--sizeXL': size === 'xl',
          'sux-button--quiet': quiet,

        }}
        disabled={disabled}
      >
        {this.isLoading ? loaderEl : null}
        {this.iconStart ? iconStartEl : null}
        {contentEl}
        {this.iconEnd ? iconEndEl : null}
      </Tag>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Private State/Props
  //
  //--------------------------------------------------------------------------

  /** determine if there is slotted content */
  // @State() private hasContent = false;
}
