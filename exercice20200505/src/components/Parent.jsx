import React, { Component } from "react";
import Child from "./Child";

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = { showChild: true };
    this.hideChild = this.hideChild.bind(this);
    this.componentDidUpdate = this.componentDidUpdate.bind(this);
  }
  hideChild = () => {
    this.setState({ showChild: false });
  };
  componentDidUpdate = () => {
    console.log("Parent is updating");
  };
  render() {
    let display;
    if (this.state.showChild) {
      display = <Child />;
    } else {
      display = "";
    }
    return (
      <div>
        <button onClick={this.hideChild}>click me</button>
        {display}
      </div>
    );
  }
}

export default Parent;
