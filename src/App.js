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

  render() {
    return (
      <div className="App">
        <p>Pick an amount of cards to play:</p>
        <form onSubmit={event => this.handleSubmit(event)}>
          <input name="num" type="number" min="1" max="5" />
          <input type="submit" value="Deal!" />
        </form>
        {this.state.userSkaters.map(skater => (
          <SkateCard skater={skater} />
        ))}
      </div>
    );
  }
}

export default App;
