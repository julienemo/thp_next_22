import React, { Component } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";

import "./index.scss";

class App extends Component {
  render() {
    return <button className="btn btn-outline-danger">Hey</button>;
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
