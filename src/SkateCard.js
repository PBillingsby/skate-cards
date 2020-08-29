import React from "react";

export default class SkateCard extends React.Component {
  render() {
    return (
      <div
        className="card d-inline-flex p-4 mx-auto"
        style={{ width: "15rem" }}
      >
        <>
          <h4>{this.props.skater.name}</h4>
          <img className="card-img-top mx-auto" src={this.props.skater.url} />
          <div style={{ display: this.props.hidden }}>
            <h5>Stance: {this.props.skater.stance}</h5>
            <h5>Flips: {this.props.skater.flips}</h5>
            <h5>Flips: {this.props.skater.spins}</h5>
            <h5>Grinds: {this.props.skater.grinds}</h5>
            <button
              onClick={this.props.handleClick}
              value={this.props.skater.id}
            >
              Use Card
            </button>
          </div>
        </>
      </div>
    );
  }
}
