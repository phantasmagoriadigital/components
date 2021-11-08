import { Component, Host, h, Element, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'sux-menu-item',
  styleUrl: 'sux-menu-item.css',
  shadow: true,
})
export class SuxMenuItem {

  // --------------------------------------------------------------------------
  // Element
  // --------------------------------------------------------------------------
  @Element() el!: HTMLSuxMenuItemElement;

  // --------------------------------------------------------------------------
  // Properties
  // --------------------------------------------------------------------------

  /**
   * value
   */
  @Prop() value: string;

  /**
   * active
   */
  @Prop() active: boolean;

  /**
   * disabled
   */
  @Prop() disabled: boolean;

  /**
   * selected
   */
  @Prop() selected: boolean;

  /**
   * no wrap
   */
  @Prop() noWrap: boolean;

  /**
   * tabindex
   */
  // @Prop() tabindex: number;

  // --------------------------------------------------------------------------
  // Events
  // --------------------------------------------------------------------------

  @Event({ eventName: 'suxclick' }) suxMenuItemClick: EventEmitter;

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


  // --------------------------------------------------------------------------
  // Methods
  // --------------------------------------------------------------------------

  connectedCallback() {
    this._onClick = this._onClick.bind(this)
    this._onInput = this._onInput.bind(this)
  }

  private _onClick(e: Event): void {
    const target = e.target as HTMLInputElement
    this.selected = target.checked
    this.suxChange.emit(this.selected)
  }

  private _onInput(e: Event) {
    const target = e.target as HTMLInputElement
    this.value = target.value
    this.suxInput.emit()
  }

  // private _onBlur = () => {
  //   this.suxBlur.emit()
  // }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
