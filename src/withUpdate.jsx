import React from "react";

const UpdatedComponent = OriginalComponent => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        counter: 0
      };
    }

    incrementCounter = () => {
      this.setState(prevState => {
        return { counter: prevState.counter + 1 };
      });
    };

    render() {
      const { counter } = this.state;
      const incrementCounter = this.incrementCounter;
      return (
        <OriginalComponent
          counter={counter}
          incrementCounter={incrementCounter}
        />
      );
    }
  }
  return NewComponent;
};

export default UpdatedComponent;
