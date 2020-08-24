import React, { Component } from "react";
import SkateCard from "./SkateCard";
import skaters from "./skaterData";
export default class CardStack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      selectedSkaters: [],
      computerCard: ""
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
      this.setState({
        count: this.state.count + 1
      });
    }
  }
  render() {
    return (
      <div className="card-show container pt-5">
        <div className="card-grid m-3 p-4 border border-black">
          {this.state.selectedSkaters.map(skater => {
            return <SkateCard skater={skater} />;
          })}
        </div>
        <div className="d-none card-grid m-3 p-4 border border-black">
          <div>
            <SkateCard
              computerCard={skaters[Math.floor(Math.random() * skaters.length)]}
            />
          </div>
        </div>
      </div>
    );
  }
}
