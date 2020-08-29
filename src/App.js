import React, { Component } from "react";
import "./App.css";
import { render } from "@testing-library/react";
import skaters from "./skaterData";
import SkateCard from "./SkateCard";
// import { thisExpression } from "@babel/types";
// import { Card } from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSkaters: [],
      computerCard: skaters[Math.floor(Math.random() * skaters.length)],
      result: "",
      hidden: "none"
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    let skateArr = [];
    for (let i = 0; i < parseInt(event.target.num.value); i++) {
      skateArr.push(skaters[Math.floor(Math.random() * skaters.length)]);
    }
    this.setState({
      userSkaters: skateArr
    });
  };

  handleClick = event => {
    let selectedSkater = skaters.find(
      skater => skater.id === parseInt(event.target.value)
    );
    this.decideWinner(selectedSkater);
    // FIX TO FILTER ARRAY AND SHOW RESULT
  };

  decideWinner = skater => {
    const userAverage =
      skater.spins + skater.grinds + skater.flips + skater.air;
    const computerAverage =
      this.state.computerCard.spins +
      this.state.computerCard.grinds +
      this.state.computerCard.flips +
      this.state.computerCard.air;
    if (userAverage > computerAverage) {
      this.setState({
        result: `YOU WIN BY ${userAverage - computerAverage} POINTS`,
        computerCard: skaters[Math.floor(Math.random() * skaters.length)]
      });
    } else {
      this.setState({
        result: "YOU LOSE"
      });
      this.removeSkater(skater);
    }
  };

  removeSkater = () => {
    debugger;
  };

  render() {
    return (
      <div className="App container">
        <p>Pick an amount of cards to play:</p>
        <form onSubmit={event => this.handleSubmit(event)}>
          <input name="num" type="number" min="1" max="5" />
          <input type="submit" value="Deal!" />
        </form>
        <h1 style={{ color: "red" }}>{this.state.result}</h1>
        <div className="card-grid">
          <div>
            <h4 className="text-center">Your Card's</h4>
            {this.state.userSkaters.map(skater => (
              <SkateCard
                key={this.state.userSkaters.indexOf(skater)}
                handleClick={this.handleClick}
                skater={skater}
              />
            ))}
          </div>

          <div>
            <h4 className="text-center">Computer Card</h4>
            <SkateCard
              key={"computerCard"}
              hidden={this.state.hidden}
              skater={this.state.computerCard}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
