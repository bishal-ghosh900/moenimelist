import React, { Component } from "react";
import Header from "./Header";
import Body from "./Body";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="app">
        <Header />
        <Body />
      </div>
    );
  }
}

export default Home;
