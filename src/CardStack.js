import React, { Component } from "react";
import SkateCard from "./SkateCard";
import skaters from "./skaterData";
export default class CardStack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      selectedSkaters: []
    };
  }
  randomNumber(num) {
    return Math.floor(Math.random() * num);
  }
  renderCards() {
    while (this.props.num > this.state.count) {
      this.state.selectedSkaters.push(
        skaters[Math.floor(Math.random() * skaters.length)]
      );
      this.setState({
        count: this.state.count + 1
      });
    }
  }
  render() {
    return (
      <div>
        {this.state.skaters.map(skater => {
          return <SkateCard skater={skater} />;
        })}
      </div>
    );
  }
}
