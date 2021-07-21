import React, { Component } from "react";
class Quote extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="quote">
        <h4 className="quoteText">
          <i className="fa fa-quote-left leftQuote"></i>{" "}
          {this.props.quoteObj.quote}
        </h4>
        <em className="quoteAuthor">- {this.props.quoteObj.character}</em>
      </div>
    );
  }
}

export default Quote;
