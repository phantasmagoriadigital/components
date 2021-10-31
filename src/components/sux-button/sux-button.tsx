import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'sux-button',
  styleUrl: 'sux-button.scss',
  shadow: true,
})
export class SuxButton {

  /** optionally pass an icon to display at the start of a button - accepts ui icon names  */
  @Prop({ reflect: true }) iconStart?: boolean = false;

  /** optionally pass an icon to display at the end of a button - accepts ui icon names  */
  @Prop({ reflect: false }) iconEnd?: 'icon-close' | 'icon-open' | 'icon-info';

  /** optionally add a sux-loader component to the button, disabling interaction.  */
  @Prop({ reflect: true }) isLoading?: boolean = false;

  /** The name attribute to apply to the button  */
  @Prop() name?: string = 'button-';

  /** The type attribute to apply to the button  */
  @Prop({ mutable: true }) type?: string;

  /** is the button disabled  */
  @Prop({ reflect: true }) disabled?: boolean = false;

  // render() {
  //   return (
  //     <Host>
  //       <slot></slot>
  //     </Host>
  //   );
  // }

  render() {
    // const dir = getElementDir(this.el);
    const Tag = 'div';

    /** Loader component  */
    const loaderEl = (
      <div class={'loader'}>
        loader
      </div>
    );

    /** Icon Start (left side)  */
    const iconStartEl = (
      <div class={'iconStart'}>
        iconStart
      </div>
    );

    /** Content element with slot  */
    const contentEl = (
      <span class={'content'}>
        contentEl: <slot />
      </span>
    );

    /** Icon End (right side) */
    const iconEndEl = (
      <div class={'iconStart'}>
        iconEnd
      </div>
    );

    return (
      <Tag
        class={
          this.disabled ? 'disabled' : null
        }
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
