import React, { Component } from "react";
import SearchHeader from "./SearchHeader";
import SearchBody from "./SearchBody";
import { headerImages, random } from "./Images";
import AnimeTypeNavbar from "./AnimeTypeNavbar";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    this.changeState = this.changeState.bind(this);
    this.fillSearch = this.fillSearch.bind(this);
  }

  changeState(v) {
    this.setState({
      data: v,
    });
  }

  fillSearch(v) {
    this.changeState(v);
  }

  render() {
    return (
      <div className="app">
        <AnimeTypeNavbar />
        <SearchHeader fillSearch={this.fillSearch} />
        <img
          className="headImage"
          src={headerImages[random]}
          alt="Background pic"
        />
        <SearchBody data={this.state.data} />
      </div>
    );
  }
}

export default Home;
