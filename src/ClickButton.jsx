import React from "react";
import UpdatedComponent from "./withUpdate";

class ClickButton extends React.Component {
  render() {
    const { counter } = this.props;
    const { incrementCounter } = this.props;
    return (
      <button onClick={incrementCounter}>Clicked Button {counter}Times</button>
    );
  }
}

export default UpdatedComponent(ClickButton);
