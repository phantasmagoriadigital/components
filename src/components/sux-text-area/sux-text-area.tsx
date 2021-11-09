import { Component, Host, h, Element, Prop, Event, EventEmitter } from '@stencil/core';
import { TextAreaSize } from './innterfaces';
let id = 0

@Component({
  tag: 'sux-text-area',
  styleUrl: 'sux-text-area.scss',
  shadow: true,
})
export class SuxTextArea {
  //--------------------------------------------------------------------------
  // Element
  //--------------------------------------------------------------------------

  @Element() el!: HTMLElement;
  inputId = `sux-input-${++id}`

  //--------------------------------------------------------------------------
  // Properties
  //--------------------------------------------------------------------------


  /**
   * Placeholder text
   */
  @Prop() placeholder: string;

  /**
   * value of the input
   */
  @Prop() value: string;

  /**
   * size of the input
   */
  @Prop() size: TextAreaSize = 'm';

  /**
   * width of the input
   */
  @Prop() width: string;

  /**
   * disabled input
   */
  @Prop() disabled: boolean = false;

  /**
   * read only
   */
  @Prop() readonly: boolean = false;

  /**
   * valid icon
   */
  @Prop() validIcon: boolean = false;


  /**
   * Help text
   */
  @Prop() helpText: string;

  /**
   * Label text
   */
  @Prop() label: string;

  /**
   * Label position
   */
  @Prop() labelPosition: 'top' | 'side' = 'top';

  /**
   * Required
   */
  @Prop() required: boolean = false;

  /**
   * Error message
   */
  @Prop() errorText: string;

  /**
   * Error
   */
  @Prop() error: boolean = false;

  //--------------------------------------------------------------------------
  //
  // Events
  //
  //--------------------------------------------------------------------------
  /**

  /**
     * Fired when the value of the input changes
     */
  @Event({ eventName: 'suxchange' }) suxChange!: EventEmitter

  /**
   * Fired when an alteration to the input's value is committed by the user
   */
  @Event({ eventName: 'suxinput' }) suxInput!: EventEmitter

  /**
   * Fired when an element has lost focus
   */
  @Event({ eventName: 'suxblur' }) suxBlur!: EventEmitter

  connectedCallback() {
    this._onChange = this._onChange.bind(this)
    this._onInput = this._onInput.bind(this)
  }

  private _onChange(e: Event) {
    const target = e.target as HTMLInputElement
    this.value = target.value
    this.suxChange.emit()
  }

  private _onInput(e: Event) {
    const target = e.target as HTMLInputElement
    this.value = target.value
    this.suxInput.emit()
  }

  private _onBlur = () => {
    this.suxBlur.emit()
  }

  render() {
    const {
      disabled,
      error,
      errorText,
      helpText,
      label,
      labelPosition,
      _onChange,
      _onInput,
      _onBlur,
      placeholder,
      required,
      value,
      size,
    } = this
    return (
      <Host>
        <div class="sux-form-field" part="form-field">
          <sux-field-label size={size} position={labelPosition} required={required}>{label}</sux-field-label>
          {/* <icon
            class={{
              'sux-text-area-icon--error': error,
            }}
          >!</icon> */}
          <textarea
            disabled={disabled}
            placeholder={placeholder}
            required={required}
            value={value}
            class={{
              'sux-text-area': true,
              'sux-text-area--disabled': disabled,
              'sux-text-area--sizeS': size === 's',
              'sux-text-area--sizeM': size === 'm',
              'sux-text-area--sizeL': size === 'l',
              'sux-text-area--sizeXL': size === 'xl',
              'sux-text-area--error': error,
            }}
            id={this.inputId}
            onChange={_onChange}
            onInput={_onInput}
            onBlur={() => _onBlur()}
          ></textarea>
        </div>
        <sux-help-text size={size}>{helpText}</sux-help-text>
        <sux-help-text size={size} variant="negative">{errorText}</sux-help-text>
      </Host >
    );
  }

}
