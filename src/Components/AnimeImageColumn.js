import React, { Component } from "react";
import { Link } from "react-router-dom";

class AnimeImageColumn extends Component {
  render() {
    return (
      <div className="animeImageColumn">
        <Link
          className="backButton"
          exact
          to={{
            pathname: this.props.history,
          }}
        >
          <div className="backDiv">Back</div>
        </Link>
        <div className="mainImage">
          <div className="card-temp">
            <img
              className="card-temp-image"
              src={this.props.data.image_url}
              alt={this.props.data.title}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default AnimeImageColumn;
