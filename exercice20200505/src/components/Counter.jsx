import React, { Component } from "react";
import Number from "./Number";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { currentDisplay: 0 };
    this.incrementDisplay = this.incrementDisplay.bind(this);
    this.decrementDisplay = this.decrementDisplay.bind(this);
  }

  incrementDisplay = () => {
    this.setState({ currentDisplay: this.state.currentDisplay + 1 });
  };

  decrementDisplay = () => {
    this.setState({ currentDisplay: this.state.currentDisplay - 1 });
  };

  render() {
    return (
      <div className="counter box">
        <div>
          <Number display={this.state.currentDisplay} />
        </div>
        <div>
          <button
            onClick={this.incrementDisplay}
            className="btn btn-outline-success"
          >
            +
          </button>
          <button
            onClick={this.decrementDisplay}
            className="btn btn-outline-danger"
          >
            -
          </button>
        </div>
      </div>
    );
  }
}
export default Counter;
