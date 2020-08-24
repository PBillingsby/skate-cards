import React, { Component } from "react";

export default class SkateCard extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.skater.name}</h1>
        <h5>{this.props.skater.stance}</h5>
        <h5>Flips: {this.props.skater.flips}</h5>
      </div>
    );
  }
}
