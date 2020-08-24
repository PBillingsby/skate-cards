import React, { Component } from "react";
import SkateCard from "./SkateCard";
export default class CardStack extends Component {
  getCards = e => {
    debugger;
  };
  render() {
    return <button onChange={this.getCards}>{this.props.num}</button>;
  }
}

const skaters = [
  { name: "Tony Hawk", stance: "Goofy" },
  { name: "Tony Hawk", stance: "Goofy" },
  { name: "Tony Hawk", stance: "Goofy" },
  { name: "Tony Hawk", stance: "Goofy" }
];
