import React from "react";
import { useLocation } from "react-router-dom";
import AnimeDetails from "./AnimeDetails";

const Details = () => {
  let location = useLocation();
  let data;
  let history;
  let mainData;
  let mainHistory;
  console.log(location.state);
  if (location.state) {
    data = location.state.data;
    history = location.state.history;
    window.sessionStorage.setItem("data", JSON.stringify(data));
    window.sessionStorage.setItem("history", JSON.stringify(history));
    console.log(data);

    mainData = data;
    mainHistory = history;
  } else {
    mainData = JSON.parse(window.sessionStorage.getItem("data"));
    mainHistory = JSON.parse(window.sessionStorage.getItem("history"));
  }

  return (
    <div className="details">
      <AnimeDetails data={mainData} history={mainHistory} />
    </div>
  );
};

export default Details;
