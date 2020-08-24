import React, { Component } from "react";

export default class SkateCard extends Component {
  render() {
    return (
      <div className="card m-3 p-2 mx-auto" style={{ width: "15rem" }}>
        <h1>{this.props.skater.name}</h1>

        <img
          className="card-img-top mx-auto"
          // style={{ width: "15rem" }}
          src={this.props.skater.url}
        />
        <h5>Stance: {this.props.skater.stance}</h5>
        <h5>Flips: {this.props.skater.flips}</h5>
        <h5>Flips: {this.props.skater.spins}</h5>
        <h5>Grinds: {this.props.skater.grinds}</h5>
      </div>
    );
  }
}
