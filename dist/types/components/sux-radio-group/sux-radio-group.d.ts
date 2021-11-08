import { EventEmitter } from '../../stencil-public-runtime';
export declare class SuxRadioGroup {
  el: HTMLSuxRadioGroupElement;
  hasLabelSlot: boolean;
  /**
     * The label of the radio group. For HTML content, use the `label` slot instead.
     */
  label?: string;
  /**
   * Presentational only. Renders the Radio Group as invalid.
   */
  invalid: boolean;
  /**
   * The name of the radio group - submitted with form data. Must match the name of the radios in the group.
   */
  name: string;
  /**
   * The value of the current selected radio in the group. Changing this will also mark that radio as checked in the UI.
   */
  value?: any | null;
  /**
   * The help or explanation text
   */
  helpText?: string;
  /**
   * The validation error text
   */
  errorText?: string;
  /**
   * Fired when the value of the input changes - [HTMLElement/input_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)
   */
  suxChange: EventEmitter<any>;
  emitChange(): void;
  handleLabelChange(): void;
  connectedCallback(): void;
  disconnectedCallback(): void;
  componentWillLoad(): void;
  get hasLabel(): boolean;
  handleClick(e: MouseEvent): void;
  selectedRadioIsDisabled(): boolean;
  private _handleSlotChange;
  render(): any;
}
