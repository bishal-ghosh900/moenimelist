import React, { Component } from "react";
import Header from "./Header";
import UpcomingAnimeBody from "./UpcomingAnimeBody";
import { headerImages, random } from "./Images";
import AnimeTypeNavbar from "./AnimeTypeNavbar";

class UpcomingAnime extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="app">
        <AnimeTypeNavbar />
        <Header />
        <img
          className="headImage"
          src={headerImages[random]}
          alt="Background pic"
        />
        <UpcomingAnimeBody />
      </div>
    );
  }
}

export default UpcomingAnime;
