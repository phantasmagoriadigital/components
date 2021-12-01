
import { Component, Prop, Host, State, h } from '@stencil/core';

@Component({
  tag: 'sux-rating',
  styleUrl: 'sux-rating.scss',
  shadow: true
})
export class suxRatingComponent {
  @Prop() maxValue: number = 5;
  @Prop() value: number = 0;
  @Prop({ reflect: false }) size: "small" | "medium" | "large" = "medium";


  @State() starList: Array<object> = [];

  componentWillLoad() {
    this.createStarList(this.value);
  }

  setValue(newValue) {
    this.value = newValue;
    this.createStarList(this.value);
  }

  createStarList(value) {
    let starList = [];

    for (let i = 1; i <= this.maxValue; i++) {
      if (i <= value) {
        starList.push(<span class="sux-rating sux-rating--selected" onMouseOver={() => this.createStarList(i)} onMouseOut={() => this.createStarList(this.value)} onClick={() => this.setValue(i)}>&#x2605;</span>);
      } else {
        starList.push(<span class="sux-rating sux-rating--unselected" onMouseOver={() => this.createStarList(i)} onMouseOut={() => this.createStarList(this.value)} onClick={() => this.setValue(i)} >&#x2606;</span>);
      }
    }

    this.starList = starList;
  }

  render() {
    return (
      <Host>
        <div
          class={{

            'sux-rating--small': this.size === "small",
            'sux-rating--medium': this.size === "medium",
            'sux-rating--large': this.size === "large",
          }}
        >
          {this.starList}
        </div>
      </Host>
    );
  }
}