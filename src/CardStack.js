import React, { Component } from "react";
import SkateCard from "./SkateCard";
export default class CardStack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skaters: []
    };
  }
  componentDidMount() {
    for (let i = 0; i < parseInt(this.props.count); i++) {
      this.state.skaters.push(
        this.props.skaters[
          Math.floor(Math.random() * this.props.skaters.length)
        ]
      );
    }
  }
  render() {
    // USE ARROW FUNCTION TO BIND OR ILL LOSE INSTANCE (undefined)
    return (
      <div className="card-show container pt-5">
        <div className="card-grid m-3 p-4 border border-black">
          <div>
            {this.state.skaters.map(skater => {
              return <SkateCard skater={skater} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}
