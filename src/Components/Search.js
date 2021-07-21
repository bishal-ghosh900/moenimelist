import React, { Component } from "react";
import SearchHeader from "./SearchHeader";
import SearchBody from "./SearchBody";

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
    console.log(v);
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
        <SearchHeader fillSearch={this.fillSearch} />
        <SearchBody data={this.state.data} />
      </div>
    );
  }
}

export default Home;
