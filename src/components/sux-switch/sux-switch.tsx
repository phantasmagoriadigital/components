import { Component, Host, h, Element, Prop, State, Event, EventEmitter, Watch } from '@stencil/core';
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
  // @Element () el!: HTMLSuxSwitchElement

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

  @Watch('label')


  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
