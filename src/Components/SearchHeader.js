import React, { Component } from "react";

class SearchHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteObj: {},
      title: "",
      aniResults: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.inputChange = this.inputChange.bind(this);
  }

  inputChange(e) {
    this.setState({
      title: e.target.value,
    });

    fetch(`https://api.jikan.moe/v3/search/anime?q=${e.target.value}&page=1`)
      .then((response) => response.json())
      .then((data) => data.results)
      .then((results) => {
        this.setState({
          aniResults: results,
        });
      })
      .catch((err) => console.log(err));
  }

  handleChange() {
    this.props.fillSearch(this.state.aniResults);
  }
  componentDidMount() {}
  render() {
    return (
      <div className="header">
        <div className="search">
          <input
            className="inputStyle"
            type="text"
            placeholder="Search here..."
            value={this.state.title}
            onChange={this.inputChange}
          />
          <button className="btnStyle" onClick={this.handleChange}>
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default SearchHeader;
