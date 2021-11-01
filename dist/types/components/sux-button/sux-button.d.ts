import { ButtonVariant, ButtonSize } from "./interfaces";
export declare class SuxButton {
  el: HTMLSuxButtonElement;
  /** Applies to the aria-label attribute on the button or hyperlink */
  label: string;
  /** The name attribute to apply to the button  */
  name?: string;
  /** The type attribute to apply to the button  */
  type?: string;
  /** specify the appearance style of the button, defaults to solid.  */
  variant: ButtonVariant;
  /** specify the size of the button, defaults to m */
  size: ButtonSize;
  /** Is quiet makes the button appear with least prominence.  */
  quiet: boolean;
  /** is the button disabled  */
  disabled?: boolean;
  /** optionally pass an icon to display at the start of a button - accepts ui icon names  */
  iconStart?: boolean;
  /** optionally pass an icon to display at the end of a button - accepts ui icon names  */
  iconEnd?: 'icon-close' | 'icon-open' | 'icon-info';
  /** optionally add a sux-loader component to the button, disabling interaction.  */
  isLoading?: boolean;
  render(): any;
}
