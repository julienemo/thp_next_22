import React, { Component } from "react";

class Number extends Component {
  render() {
    let { display } = this.props;
    console.log(display);
    console.log(typeof display);

    return <>{display}</>;
  }
}
export default Number;
