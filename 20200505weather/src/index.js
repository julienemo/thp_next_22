import React, { Component } from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.css";
import "./index.scss";

import DayGallery from "./Components/DayGallery";
import Banner from "./Components/Banner";

class App extends Component {
  render() {
    return (
      <>
        <Banner />
        <DayGallery />
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
