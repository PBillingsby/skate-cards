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
      computerCard: skaters[Math.floor(Math.random() * skaters.length)]
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

  handleClick = e => {
    let skaterName = e.target.parentNode.querySelector("h4").innerText;
    let skate = this.state.userSkaters.filter(
      skater => (skater.name = skaterName)
    );
    console.log(skate);
    // FIX TO FILTER ARRAY AND SHOW RESULT
  };

  render() {
    return (
      <div className="App container">
        <p>Pick an amount of cards to play:</p>
        <form onSubmit={event => this.handleSubmit(event)}>
          <input name="num" type="number" min="1" max="5" />
          <input type="submit" value="Deal!" />
        </form>
        <div className="card-grid">
          <div>
            <h4 className="text-center">Your Card's</h4>
            {this.state.userSkaters.map(skater => (
              <SkateCard
                key={this.state.userSkaters.indexOf(skater)}
                handleClick={() => this.handleClick(this)}
                skater={skater}
              />
            ))}
          </div>

          <div className="d-none">
            <h4 className="text-center">Computer Card</h4>
            <SkateCard key={"computerCard"} skater={this.state.computerCard} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
