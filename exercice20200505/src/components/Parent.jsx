import React, { Component } from "react";
import Child from "./Child";

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = { showChild: true, counter: 0 };
    this.toggleChild = this.toggleChild.bind(this);
    this.countClick = this.countClick.bind(this);
  }
  toggleChild = () => {
    this.setState({
      showChild: !this.state.showChild,
    });
  };
  countClick = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  componentDidUpdate = () => {
    console.log("Parent is updating");
  };

  render() {
    let display;
    if (this.state.showChild) {
      display = <Child {...this.state} onClick={this.countClick} />;
    } else {
      display = "";
    }
    return (
      <div>
        <button onClick={this.toggleChild}>click me</button>
        {display}
      </div>
    );
  }
}

export default Parent;
