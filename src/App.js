import React, { Component } from "react";
import "./App.css";
import CardStack from "./CardStack";
import { render } from "@testing-library/react";
import skaters from "./skaterData";
// import { thisExpression } from "@babel/types";
// import { Card } from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSkaters: [],
      computerCard: skaters[Math.floor(Math.random() * skaters.length)],
      submitted: false
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    debugger;
    this.setState({
      submitted: true
    });
  };

  render() {
    return (
      <div className="App">
        <p>Pick an amount of cards to play:</p>
        <form onSubmit={this.handleSubmit}>
          <input
            name="num"
            type="number"
            min="1"
            max="5"
            onChange={this.handleChange}
          />
          <input type="submit" value="Deal!" />
        </form>
      </div>
    );
  }
}

export default App;
