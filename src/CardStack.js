import React, { Component } from "react";
import SkateCard from "./SkateCard";
export default class CardStack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    // USE ARROW FUNCTION TO BIND OR ILL LOSE INSTANCE (undefined)
    return (
      <div className="card-show container pt-5">
        <div className="card-grid m-3 p-4 border border-black"></div>
        <div className="d-none card-grid m-3 p-4 border border-black">
          <div></div>
        </div>
      </div>
    );
  }
}
