export declare const hasShadowDom: (el: HTMLElement) => boolean;
export declare const findItemLabel: (componentEl: HTMLElement) => HTMLLabelElement | null;
export declare const renderHiddenInput: (always: boolean, container: HTMLElement, name: string, value: string | undefined | null, disabled: boolean) => void;
/**
* This method is used for Ionic's input components that use Shadow DOM. In
* order to properly label the inputs to work with screen readers, we need
* to get the text content of the label outside of the shadow root and pass
* it to the input inside of the shadow root.
*
* Referencing label elements by id from outside of the component is
* impossible due to the shadow boundary, read more here:
* https://developer.salesforce.com/blogs/2020/01/accessibility-for-web-components.html
*
* @param componentEl The shadow element that needs the aria label
* @param inputId The unique identifier for the input
*/
export declare const getAriaLabel: (componentEl: HTMLElement, inputId: string) => {
  label: Element | null;
  labelId: string;
  labelText: string | null | undefined;
};
