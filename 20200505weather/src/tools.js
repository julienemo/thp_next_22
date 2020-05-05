var moment = require("moment");

export const weekDay = (dateString) => {
  let date = new Date(moment(dateString).format());
  return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
};
