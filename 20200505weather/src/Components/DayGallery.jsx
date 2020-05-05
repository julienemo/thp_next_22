import React, { Component } from "react";
import DayCard from "./DayCard";

class DayGallery extends Component {
  render() {
    const cards = this.props.list.map((card, index) => {
      return <DayCard {...card} key={`${card.date}_${index}`} />;
    });
    return <div className="card_gallery">{cards}</div>;
  }
}

export default DayGallery;
