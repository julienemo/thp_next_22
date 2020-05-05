import React, { Component } from "react";

class Button extends Component {
  render() {
    console.log(this.props.name);

    return (
      <button onClick={this.props.updateWeather}>{this.props.name}</button>
    );
  }
}

export default Button;
