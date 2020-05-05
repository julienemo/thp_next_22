import "bootstrap/dist/css/bootstrap.css";
import "./index.scss";

import React, { Component } from "react";
import ReactDOM from "react-dom";

import Color from "./components/Color";
import Counter from "./components/Counter";

class App extends Component {
  render() {
    return (
      <>
        <Color name="coucou" />
        <Counter />
      </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
