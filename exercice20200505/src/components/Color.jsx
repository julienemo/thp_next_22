import React, { Component } from "react";

class Color extends Component {
  constructor(props) {
    super(props);
    this.state = { lastColor: "red" };
    this.changeLastColor = this.changeLastColor.bind(this);
  }
  changeLastColor = (e) => {
    let newColor = e.target.className.split(" ")[1];
    this.setState({ lastColor: newColor });
  };
  render() {
    let { lastColor } = this.state;
    return (
      <>
        <p>Last clicked color is {lastColor}</p>
        <div className="wrap-row">
          <div onClick={this.changeLastColor} className="square red"></div>
          <div onClick={this.changeLastColor} className="square yellow"></div>
          <div onClick={this.changeLastColor} className="square green"></div>
          <div onClick={this.changeLastColor} className="square blue"></div>
        </div>
      </>
    );
  }
}

export default Color;
