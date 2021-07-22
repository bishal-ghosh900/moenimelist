import React, { Component } from "react";
import Header from "./Header";
import AiringBody from "./AiringBody";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="app">
        <Header />
        <AiringBody />
      </div>
    );
  }
}

export default Home;
