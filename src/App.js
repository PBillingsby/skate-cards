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
      count: 0,
      computerCard: skaters[Math.floor(Math.random() * skaters.length)],
      submitted: false
    };
  }
  handleChange = event => {
    this.setState({
      count: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      submitted: true
    });
  };

  returnCardStack() {
    return <CardStack count={this.state.count} skaters={skaters} />;
  }

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
        {this.state.submitted && this.returnCardStack()}
      </div>
    );
  }
}

export default App;
