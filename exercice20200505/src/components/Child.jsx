import React, { Component } from "react";

class Child extends Component {
  componentDidMount = () => {
    console.log("Child is mounting");
  };

  componentWillUnmount = () => {
    console.log("Child is UNmounting");
  };
  render() {
    return <p className="yellow">i'm the child</p>;
  }
}

export default Child;
