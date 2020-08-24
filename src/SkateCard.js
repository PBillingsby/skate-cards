import React from "react";

export default class SkateCard extends React.Component {
  constructor(props) {
    super(props);
  }
  handleClick(event) {
    debugger;
  }
  render() {
    return (
      <div
        className="card m-3 p-2 mx-auto"
        onClick={this.handleClick(this)}
        style={{ width: "15rem" }}
      >
        <h4>{this.props.skater.name}</h4>

        <img className="card-img-top mx-auto" src={this.props.skater.url} />
        <h5>Stance: {this.props.skater.stance}</h5>
        <h5>Flips: {this.props.skater.flips}</h5>
        <h5>Flips: {this.props.skater.spins}</h5>
        <h5>Grinds: {this.props.skater.grinds}</h5>
      </div>
    );
  }
}
