import { Component, Prop, h, Element, Event, EventEmitter } from '@stencil/core';
import { RadioSize } from './interfaces';
let id = 0;
@Component({
  tag: 'sux-radio',
  styleUrl: 'sux-radio.scss',
  shadow: true,
})
export class SuxRadio {
  // private _inputEl?: HTMLInputElement
  radioId = `sux-radio-${id++}`;
  private radioGroup: HTMLSuxRadioGroupElement | null = null
  //--------------------------------------------------------------------------
  // Element
  //--------------------------------------------------------------------------
  @Element() el!: HTMLSuxRadioElement;

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------
  /**
   * Name of the radio
   */
  @Prop() name = '';

  /**
   * Value of the radio
   */
  @Prop() value: string = '';

  /**
   * size of the radio button
   */
  @Prop() size: RadioSize = 'medium';

  /**
   * disabled state
   */
  @Prop() disabled: boolean = false;

  /**
   * label for the radio button
   */
  @Prop() label?: string

  //--------------------------------------------------------------------------
  //
  //  State
  //
  //--------------------------------------------------------------------------
  /**
   * Checked state
   */
  @Prop({ reflect: true, mutable: true }) checked: boolean = false

  //--------------------------------------------------------------------------
  //
  // Events
  //
  //--------------------------------------------------------------------------


  /**
   * Fired when an element has lost focus
   */
  @Event({ eventName: 'suxchange' }) suxChange!: EventEmitter
  /**
   * Fired when an element has lost focus
   */
  @Event({ eventName: 'suxblur' }) suxBlur!: EventEmitter

  connectedCallback() {
    this._onChange = this._onChange.bind(this)
    this.radioGroup = this.el.closest('sux-radio-group')
    this.syncFromGroup = this.syncFromGroup.bind(this)
    if (this.radioGroup) {
      this.syncFromGroup()
      this.radioGroup.addEventListener('suxchange', this.syncFromGroup)
    }
  }

  disconnectedCallback() {
    if (this.radioGroup) {
      this.radioGroup.removeEventListener('suxchange', this.syncFromGroup)
    }
  }

  /**
   * Sets checked property when the parent Radio Group value changes.
   */
  syncFromGroup() {
    if (this.radioGroup && this.radioGroup.value) {
      this.checked = this.radioGroup.value === this.value
    }
  }

  private _onChange(e: Event): void {
    const target = e.target as HTMLInputElement
    this.checked = target.checked
  }

  private _onBlur = () => {
    this.suxBlur.emit()
  }
  // /**
  //  * Watch for changes in the checked state 
  //  */
  // // @Watch('checked')
  // // updateChecked() {
  // //   if (this._inputEl) {
  // //     this._inputEl.checked = this.checked
  // //   }
  // // }

  render() {
    const {
      label,
      radioId,
      checked,
      disabled,
      name,
      value,
      _onChange,
      _onBlur,
    } = this
    return (

      <div class="sux-form-field">
        <div class="sux-radio">
          <input
            type="radio"
            name={name}
            id={radioId}
            disabled={disabled}
            checked={checked}
            value={value}
            onChange={_onChange}
            onBlur={() => _onBlur()}
          />
          <label htmlFor={radioId}>
            <slot>{label}</slot>
          </label>
        </div>
      </div>
      // </div>
    );
  }
}


