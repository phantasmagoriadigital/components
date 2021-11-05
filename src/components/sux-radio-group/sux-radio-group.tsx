import { Component, Host, h, Element, Prop, Event, EventEmitter, Watch, State } from '@stencil/core';
import { hasSlot, renderHiddenInput } from '../../utils/utils'

@Component({
  tag: 'sux-radio-group',
  styleUrl: 'sux-radio-group.scss',
  shadow: true,
})
export class SuxRadioGroup {

  //--------------------------------------------------------------------------
  // Element
  //--------------------------------------------------------------------------
  @Element() el: HTMLSuxRadioGroupElement;
  @State() hasLabelSlot = false

  /**
     * The label of the radio group. For HTML content, use the `label` slot instead.
     */
  @Prop() label?: string

  /**
   * Presentational only. Renders the Radio Group as invalid.
   */
  @Prop() invalid: boolean = false

  /**
   * The name of the radio group - submitted with form data. Must match the name of the radios in the group.
   */
  @Prop() name: string = ''

  /**
   * The value of the current selected radio in the group. Changing this will also mark that radio as checked in the UI.
   */
  @Prop({ mutable: true, reflect: true }) value?: any | null

  /**
   * The help or explanation text
   */
  @Prop({ attribute: 'help-text' }) helpText?: string

  /**
   * The validation error text
   */
  @Prop({ attribute: 'error-text' }) errorText?: string

  /**
   * Fired when the value of the input changes - [HTMLElement/input_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)
   */
  @Event({ eventName: 'suxchange' }) suxChange!: EventEmitter<any>

  @Watch('value')
  emitChange() {
    this.suxChange.emit(this.value)
  }

  @Watch('label')
  handleLabelChange() {
    this._handleSlotChange()
  }

  connectedCallback() {
    this.handleClick = this.handleClick.bind(this)
    this._handleSlotChange = this._handleSlotChange.bind(this)
  }

  disconnectedCallback() {
    this.el!.shadowRoot!.removeEventListener(
      'slotchange',
      this._handleSlotChange
    )
  }

  componentWillLoad() {
    const radios = Array.from(
      this.el.querySelectorAll('sux-radio')
    ) as HTMLSuxRadioElement[]

    if (radios.length > 1 && !this.value) {
      this.value = radios[0].getAttribute('value')
    }

    this._handleSlotChange()
  }

  get hasLabel() {
    return this.label ? true : this.hasLabelSlot
  }

  handleClick(e: MouseEvent) {
    const selectedRadio =
      e.target && (e.target as HTMLElement).closest('sux-radio')
    if (selectedRadio && !selectedRadio.disabled) {
      const oldValue = this.value
      const newValue = selectedRadio.value
      if (newValue !== oldValue) {
        this.value = newValue
      }
    }
  }

  selectedRadioIsDisabled(): boolean {
    const radio = this.el.querySelector(
      `sux-radio[value="${this.value}"]`
    ) as HTMLSuxRadioElement
    return radio && radio.disabled
  }

  private _handleSlotChange() {
    this.hasLabelSlot = hasSlot(this.el, 'label')
  }

  render() {
    if (this.value) {
      renderHiddenInput(
        true,
        this.el,
        this.name,
        this.value,
        this.selectedRadioIsDisabled()
      )
    }
    return (
      <Host onClick={this.handleClick}>
        <div class="sux-form-field" part="form-field">
          <div
            class={{
              'sux-label': true,
              hidden: !this.hasLabel,
            }}
            part="label"
          >
            <slot
              onSlotchange={this._handleSlotChange}
              name="label"
            >
              {this.label}
            </slot>
          </div>
          <div
            class={{
              'sux-radio-group': true,
              'sux-radio-group--invalid': this.invalid,
            }}
            role="radiogroup"
            part="radiogroup"
          >
            <slot></slot>
          </div>
        </div>
        {/* <FormFieldMessage
                   errorText={this.errorText}
                   helpText={this.helpText}
               ></FormFieldMessage> */}
      </Host>
    )
  }
}
