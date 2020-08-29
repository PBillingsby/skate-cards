import React from "react";

export default class SkateCard extends React.Component {
  handleClick() {
    debugger;
  }
  render() {
    const { skaters } = this.props.skaters;
    return (
      <div className="card m-3 p-2 mx-auto" style={{ width: "15rem" }}>
        {skaters.map(skater => (
          <>
            <h4>{skater.name}</h4>
            <img className="card-img-top mx-auto" src={skater.url} />
            <h5>Stance: {skater.stance}</h5>
            <h5>Flips: {skater.flips}</h5>
            <h5>Flips: {skater.spins}</h5>
            <h5>Grinds: {skater.grinds}</h5>
            <button onClick={() => this.handleClick(this)}>Use</button>
          </>
        ))}

        {}
      </div>
    );
  }
}
