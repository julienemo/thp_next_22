import React, { Component } from "react";

class DayCard extends Component {
  render() {
    let { date, icon, minTemp, maxTemp, weekDay } = this.props;
    return (
      <div className="day_card">
        <p>{weekDay.toUpperCase()}</p>
        <img
          className="card_icon"
          src={require(`assets/images/${icon}.svg`)}
          alt={icon}
        />
        <p>{date}</p>
        <p>
          min: {minTemp}°C / max: {maxTemp}°C
        </p>
      </div>
    );
  }
}

export default DayCard;
