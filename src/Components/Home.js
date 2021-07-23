import React, { Component } from "react";
import Header from "./Header";
import AiringBody from "./AiringBody";
import { headerImages, random } from "./Images";
import AnimeTypeNavbar from "./AnimeTypeNavbar";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <AnimeTypeNavbar />
        <Header />
        <AiringBody />
        <img
          className="headImage"
          src={headerImages[random]}
          alt="Background pic"
        />
      </div>
    );
  }
}

export default Home;
