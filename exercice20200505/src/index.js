import "bootstrap/dist/css/bootstrap.css";
import "./index.scss";

import React, { Component } from "react";
import ReactDOM from "react-dom";

import Color from "./components/Color";
import Counter from "./components/Counter";
import Parent from "./components/Parent";

class App extends Component {
  render() {
    return (
      <>
        <Color name="coucou" />
        <Counter />
        <Parent />
      </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
