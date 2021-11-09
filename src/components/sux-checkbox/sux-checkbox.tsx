import { Component, Host, h, Element, Prop, Watch, Event, EventEmitter } from '@stencil/core';
import { renderHiddenInput } from "../../utils/utils";
let id = 0;

@Component({
  tag: 'sux-checkbox',
  styleUrl: 'sux-checkbox.scss',
  shadow: true,
})
export class SuxCheckbox {
  //--------------------------------------------------------------------------
  // Element
  //--------------------------------------------------------------------------
  @Element() el: HTMLSuxCheckboxElement;
  checkboxId = `sux-input-${++id}`
  private _inputEl?: HTMLInputElement

  //--------------------------------------------------------------------------
  // Properties
  //--------------------------------------------------------------------------
  /**
   * Label for the checkbox
   */
  @Prop() label: string;

  /**
     * The checkbox name
     */
  @Prop() name = ''

  /**
   * Checked value of checkbox
   */
  @Prop() checked: boolean = false;

  /**
   * Indeterminate state of checkbox
   */
  @Prop() indeterminate: boolean = false;

  /**
   * disable the checkbox
   */
  @Prop() disabled: boolean = false;

  /**
   * Error
   */
  @Prop() error: boolean = false;

  /**
   * Read only
   */
  @Prop() readonly: boolean = false;

  /**
   * Value
   */
  @Prop({ mutable: true }) value: string = '';

  /**
   * Help text
   */
  @Prop() helpText: string;

  //--------------------------------------------------------------------------
  // Watchers
  //--------------------------------------------------------------------------

  @Watch('checked')
  updateChecked() {
    if (this._inputEl) {
      this._inputEl.checked = this.checked
    }
  }

  @Watch('indeterminate')
  updateIndeterminate() {
    if (this._inputEl) {
      this._inputEl.indeterminate = this.indeterminate
    }
  }

  //--------------------------------------------------------------------------
  // Events
  //--------------------------------------------------------------------------

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

  constructor() { }

  connectedCallback() {
    this._onClick = this._onClick.bind(this)
    this._onInput = this._onInput.bind(this)
  }

  componentDidLoad() {
    if (this._inputEl && this.indeterminate) {
      // indeterminate property does not exist in HTML but is accessible via js
      this._inputEl.indeterminate = true
    }
  }

  private _onClick(e: Event): void {
    const target = e.target as HTMLInputElement
    if (this.indeterminate) {
      this.indeterminate = false
    }
    this.checked = target.checked
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
      checkboxId,
      checked,
      disabled,
      helpText,
      name,
      value,
      indeterminate,
      error
    } = this
    if (!this.indeterminate) {
      renderHiddenInput(
        true,
        this.el,
        this.name,
        this.value ? this.value : 'on',
        this.disabled,
        this.checked
      )
    }
    return (
      <Host>
        <div class="sux-form-field">
          <div
            class={{
              'sux-checkbox': true,
              'sux-checkbox--indeterminate': indeterminate,
              'sux-checkbox--has-text': helpText !== undefined,
              'sux-checkbox--error': error
            }}
          >
            <input
              type="checkbox"
              name={name}
              id={checkboxId}
              disabled={disabled}
              checked={checked}
              //Allows storybook's indetermiante control to take effect.
              indeterminate={indeterminate}
              value={value}
              onChange={this._onClick}
              onInput={this._onInput}
              onBlur={() => this._onBlur()}
              ref={(el) => (this._inputEl = el)}
            />
            <label htmlFor={checkboxId}>
              {this.label}
              <span
                class={{
                  hidden: !!this.label,
                }}
              >
                <slot></slot>
              </span>
            </label>
          </div>
        </div>
      </Host>
    );
  }

}
