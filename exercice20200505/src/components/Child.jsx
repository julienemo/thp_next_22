import React, { Component } from "react";

class Child extends Component {
  componentDidMount = () => {
    console.log("Child is mounting");
  };

  componentWillUnmount = () => {
    console.log("Child is UNmounting");
  };
  render() {
    return (
      <>
        <p className="yellow">I'm the child</p>
        <button className="btn btn-outline-info" onClick={this.props.onClick}>
          {this.props.counter}
        </button>
      </>
    );
  }
}

export default Child;
