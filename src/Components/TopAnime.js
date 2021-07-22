import React, { Component } from "react";
import Header from "./Header";
import TopAnimeBody from "./TopAnimeBody";
import { headerImages, random } from "./Images";
import AnimeTypeNavbar from "./AnimeTypeNavbar";

class TopAnime extends Component {
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
        <TopAnimeBody />
      </div>
    );
  }
}

export default TopAnime;
