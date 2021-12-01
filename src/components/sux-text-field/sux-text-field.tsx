import { Component, Prop, Host, h, Element, EventEmitter, Event } from '@stencil/core';
import { TextFieldSize, TextFieldType } from './interfaces';

let id = 0;

@Component({
  tag: 'sux-text-field',
  styleUrl: 'sux-text-field.scss',
  shadow: true,
})
export class SuxTextField {
  @Element() el: HTMLElement;
  inputId = `sux-input-${++id}`
  //--------------------------------------------------------------------------
  //
  //  Properties
  //
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
  @Prop() size: TextFieldSize = 'm';

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
   * Input type
   */
  @Prop() type: TextFieldType = 'text';

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
      type,
      value,
      size,
    } = this
    return (
      <Host>
        <div class={{
        'sux-form-field': true,
        '--position-top': labelPosition === 'top',
        '--position-side': labelPosition === 'side',
        }} part="form-field">
          <sux-field-label size={size} position={labelPosition} required={required}>{label}</sux-field-label>
          <div class={{
            'sux-input': true,
          }}>
          <input
            disabled={disabled}
            placeholder={placeholder}
            required={required}
            value={value}
            class={{
              'sux-text-field': true,
              'sux-text-field--disabled': disabled,
              'sux-text-field--search': type === 'search',
              'sux-text-field--sizeS': size === 's',
              'sux-text-field--sizeM': size === 'm',
              'sux-text-field--sizeL': size === 'l',
              'sux-text-field--sizeXL': size === 'xl',
              'sux-text-field--error': error,
            }}
            id={this.inputId}
            onChange={_onChange}
            onInput={_onInput}
            onBlur={() => _onBlur()}
          ></input>
        <sux-help-text size={size}>{helpText}</sux-help-text>
        <sux-help-text size={size} variant="negative">{errorText}</sux-help-text>
        </div>
        </div>
      </Host >
    );
  }

}
