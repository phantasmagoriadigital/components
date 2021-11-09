import { Component, h, Prop } from '@stencil/core';
import { IconSize } from './interfaces';

@Component({
  tag: 'sux-icon',
  styleUrl: 'sux-icon.scss',
  shadow: true,
})
export class SuxIcon {

  svg: string = ''
  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------
  /**
   * Size
   */
  @Prop() size: IconSize = "m"

  /**
   * Name of the icon
   */
  @Prop() icon: string

  render() {
    return (
      <icon>
        This is an  icon
      </icon>
    );
  }

}
