import React, { Component } from "react";
import "./App.css";
import CardStack from "./CardStack";
import { render } from "@testing-library/react";
import skaters from "./skaterData";
import { thisExpression } from "@babel/types";
// import { Card } from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: "",
      computerCard: skaters[Math.floor(Math.random() * skaters.length)],
      userCards: []
    };
  }
  dealCards = e => {
    e.preventDefault();
    this.setState({
      count: e.target.num.value
    });
  };
  render() {
    return (
      <div className="App">
        <p>Pick an amount of cards to play:</p>
        <form onSubmit={this.dealCards}>
          <input name="num" type="number" min="1" max="5" />
          <input type="submit" value="Deal!" />
        </form>
        <CardStack cardCount={this.state.count} />
      </div>
    );
  }
}

export default App;
