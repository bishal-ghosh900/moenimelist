import React from "react";
import { useLocation } from "react-router-dom";
import AnimeDetails from "./AnimeDetails";

const Details = () => {
  let location = useLocation();

  return (
    <div className="details">
      <AnimeDetails
        data={location.state.data}
        history={location.state.history}
      />
    </div>
  );
};

export default Details;
