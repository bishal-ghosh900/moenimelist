import React, { Component } from "react";
import Header from "./Header";
import TopAnimeBody from "./TopAnimeBody";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="app">
        <Header />
        <TopAnimeBody />
      </div>
    );
  }
}

export default Home;
