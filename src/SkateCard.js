import React, { Component } from "react";

export default class SkateCard extends Component {
  render() {
    return <h1>{this.props.skater.name}</h1>;
  }
}
