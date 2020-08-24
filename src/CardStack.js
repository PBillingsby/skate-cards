import React, { Component } from "react";

export default class CardStack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardNumber: this.props.num
    };
    console.log(this.props);
  }
  render() {
    return <>Phil</>;
  }
}
