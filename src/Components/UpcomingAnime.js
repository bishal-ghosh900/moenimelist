import React, { Component } from "react";
import Header from "./Header";
import UpcomingAnimeBody from "./UpcomingAnimeBody";

class UpcomingAnime extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="app">
        <Header />
        <UpcomingAnimeBody />
      </div>
    );
  }
}

export default UpcomingAnime;
