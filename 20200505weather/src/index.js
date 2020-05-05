import React, { Component } from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.css";
import "./index.scss";

import locations from "./Constants/Locations";
import access from "./Constants/Access";

import DayGallery from "./Components/DayGallery";

/* const getLocation = () => {
  navigator.geolocation.getCurrentPosition(function (position) {
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
  });
};

const printLoc = (loc) => {
  console.log(loc.long);
  console.log(loc.lat);
};
 */

class App extends Component {
  render() {
    let response = [
      {
        date: "2020-05-01",
        icon: "sunny",
        minTemp: 20,
        maxTemp: 33,
        weekDay: "mon",
      },
      {
        date: "2020-05-02",
        icon: "rainy",
        minTemp: 21,
        maxTemp: 32,
        weekDay: "tues",
      },
      {
        date: "2020-05-03",
        icon: "cloudy",
        minTemp: 22,
        maxTemp: 31,
        weekDay: "wed",
      },
      {
        date: "2020-05-04",
        icon: "windy",
        minTemp: 23,
        maxTemp: 30,
        weekDay: "thur",
      },
      {
        date: "2020-05-05",
        icon: "sunny",
        minTemp: 24,
        maxTemp: 29,
        weekDay: "fri",
      },
    ];
    return <DayGallery list={response} />;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
