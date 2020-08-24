import React, { Component } from "react";
import SkateCard from "./SkateCard";
import skaters from "./skaterData";
export default class CardStack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      selectedSkaters: [],
      computerSkaters: []
    };
  }
  componentDidUpdate() {
    this.renderCards();
  }

  renderCards() {
    if (parseInt(this.props.num) > this.state.count) {
      this.state.selectedSkaters.push(
        skaters[Math.floor(Math.random() * skaters.length)]
      );
      this.state.computerSkaters.push(
        skaters[Math.floor(Math.random() * skaters.length)]
      );
      this.setState({
        count: this.state.count + 1
      });
    }
  }
  render() {
    return (
      <div className="card-show container pt-5">
        <div className="m-3 p-4 border border-black">
          <h3 className="text-info">Player</h3>
          {this.state.selectedSkaters.map(skater => {
            return <SkateCard skater={skater} />;
          })}
        </div>

        <div className="m-3 p-4 border border-black">
          <h3 className="text-info">Computer</h3>
          {this.state.computerSkaters.map(skater => {
            return <SkateCard skater={skater} />;
          })}
        </div>
      </div>
    );
  }
}
