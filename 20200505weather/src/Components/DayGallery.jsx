import React, { Component } from "react";
import DayCard from "./DayCard";
import Button from "./Button";

import Locations from "../Constants/Locations";

import { weekDay } from "../tools";

class DayGallery extends Component {
  constructor(props) {
    super(props);
    this.state = { contentList: [], city: undefined };
    this.changeCity = this.changeCity.bind(this);
  }

  changeCity = (city) => {
    console.log(city);
    let long = Locations[city].long;
    console.log(long);
    let lat = Locations[city].lat;
    this.setState({ city: city, long: long, lat: lat });
    console.log(this.state.city);
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      const long = position.coords.longitude;
      const lat = position.coords.latitude;
      fetch(
        `https://api.weatherbit.io/v2.0/forecast/daily?key=${
          process.env.REACT_APP_APIKEY
        }&lang=en&lat=${this.state.lat || lat}&lon=${this.state.long || long}`
      )
        .then((response) => response.json())
        .then((response) => {
          let city = response.city_name;
          let results = response.data.slice(1, 6);
          let list = [];
          results.forEach((el) => {
            let day = {
              date: el.valid_date,
              icon: el.weather.icon,
              minTemp: el.low_temp,
              maxTemp: el.max_temp,
            };
            day.weekDay = weekDay(day.date);
            list.push(day);
          });
          return { list, city };
        })
        .then((response) => {
          this.setState({ contentList: response.list, city: response.city });
        });
    });
  }

  render() {
    const cards = this.state.contentList.map((card, index) => {
      return <DayCard {...card} key={`${card.date}_${index}`} />;
    });
    return (
      <>
        <p>Here is a 5-day forecast for {this.state.city}</p>
        <div className="card_gallery">{cards}</div>
        <p>Or see forecast of one of these cities</p>
        <div className="button_bar">
          <Button
            {...Locations.Libreville}
            onclick={() => this.changeCity("Libreville")}
          />
          <Button
            {...Locations.SanFrancisco}
            onclick={() => this.changeCity("SanFrancisco")}
          />
          <Button
            {...Locations.Tokyo}
            onclick={() => this.changeCity("Tokyo")}
          />
          <Button
            {...Locations.Montreal}
            onclick={() => this.changeCity("Montreal")}
          />
        </div>
      </>
    );
  }
}

export default DayGallery;
