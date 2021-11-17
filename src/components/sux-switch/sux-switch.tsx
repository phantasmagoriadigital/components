import { Component, Host, Element, h, Prop, State, Event, EventEmitter } from '@stencil/core';
import { renderHiddenInput } from "../../utils/utils";
let id = 0;

@Component({
  tag: 'sux-switch',
  styleUrl: 'sux-switch.scss',
  shadow: true,
})
export class SuxSwitch {
  switchId = `sux-switch-${id++}`;
  //--------------------------------------------------------------------------
  // Element
  //--------------------------------------------------------------------------
  @Element() el!: HTMLSuxSwitchElement

  //--------------------------------------------------------------------------
  // State
  //--------------------------------------------------------------------------
  @State() hasLabelSlot = false;

  //--------------------------------------------------------------------------
  // Properties
  //--------------------------------------------------------------------------

  /**
   * Label for the switch
   */
  @Prop() label: string;

  /**
   * Value of the switch
   */
  @Prop({ reflect: true, mutable: true }) value: string = '';

  /**
   * Checked state of the switch
   */
  @Prop({ reflect: true, mutable: true }) checked: boolean = false;

  /**
   * Disabled state of the switch
   */
  @Prop({ reflect: true }) disabled: boolean = false;

  /**
   * Name of the switch
   */
  @Prop() name: string;

  //--------------------------------------------------------------------------
  // Events
  //--------------------------------------------------------------------------
  /**
   * Fires when the value of the input changes
   */
  @Event({ eventName: 'suxchange' }) suxChange: EventEmitter;

  /**
   * Fires when an alteration to the input's value is made
   */
  @Event({ eventName: 'suxinput' }) suxInput: EventEmitter;

  /**
   * Fires when the element loses focus
   */
  @Event({ eventName: 'suxblur' }) suxBlur: EventEmitter;

  connectedCallback() {
    this._onChange = this._onChange.bind(this)
    this._onInput = this._onInput.bind(this)
  }

  private _onChange(e: Event): void {
    const target = e.target as HTMLInputElement
    this.checked = target.checked
    this.suxChange.emit(this.checked)
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
    const { switchId, checked, disabled, name, value, label } = this
    renderHiddenInput(
      true,
      this.el,
      this.name,
      this.value ? this.value : 'on',
      this.disabled,
      this.checked
    )
    return (
      <Host
        class="sux-form-field"
      >
        <div
          class={{
            'sux-switch': true,
            'sux-switch--checked': checked,
          }}
        >
          <input
            role="switch"
            type="checkbox"
            class="sux-switch_input"
            name={name}
            id={switchId}
            disabled={disabled}
            checked={checked}
            value={value}
            // aria-checked={`${checked}`}
            onChange={this._onChange}
            onInput={this._onInput}
            onBlur={() => this._onBlur()}
          />
          <label class="sux-switch_label" htmlFor={switchId}>{label}</label>
        </div>

      </Host>

    );
  }

}
