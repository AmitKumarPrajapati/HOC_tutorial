import React, { Component } from "react";
import UpdatedComponent from "./withUpdate";

class HoverCounter extends Component {
  render() {
    const { counter } = this.props;
    const { incrementCounter } = this.props;
    return <h3 onMouseOver={incrementCounter}>Hovered {counter} Times</h3>;
  }
}

export default UpdatedComponent(HoverCounter);
