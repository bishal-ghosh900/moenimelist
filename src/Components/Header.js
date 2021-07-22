import React, { Component } from "react";
import Quote from "./Quote";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteObj: {},
    };
  }
  componentDidMount() {
    fetch("https://animechan.vercel.app/api/random")
      .then((response) => response.json())
      .then((quote) => {
        this.setState({
          quoteObj: quote,
        });
      })
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <div className="header">
        <Quote quoteObj={this.state.quoteObj} />
      </div>
    );
  }
}

export default Header;
