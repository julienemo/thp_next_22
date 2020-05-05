import "bootstrap/dist/css/bootstrap.css";
import "./index.scss";

import React, { Component } from "react";
import ReactDOM from "react-dom";

import Color from "./components/Color";

class App extends Component {
  render() {
    return <Color name="coucou" />;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
