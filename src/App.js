import React, { Component } from "react";
import "./App.css";
import CardStack from "./CardStack";
import { render } from "@testing-library/react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardCount: 0
    };
  }
  dealCards = e => {
    e.preventDefault();
    this.setState({
      cardCount: e.target.num.value
    });
  };
  render() {
    return (
      <div className="App">
        <p>Pick an amount of cards to play:</p>
        <form onSubmit={this.dealCards}>
          <input name="num" type="number" max="10" />
          <input type="submit" value="Deal!" />
        </form>
        <CardStack num={this.state.cardCount} />
      </div>
    );
  }
}

export default App;
