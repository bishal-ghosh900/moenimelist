import React, { Component } from "react";
import { Link } from "react-router-dom";

class AnimeImageColumn extends Component {
  render() {
    return (
      <div className="animeImageColumn">
        <img
          className="card-temp-image"
          src={this.props.data.image_url}
          alt={this.props.data.title}
        />
        <Link
          className="backDiv"
          exact
          to={{
            pathname: this.props.history,
          }}
        >
          Back
        </Link>
        {/* <div className="mainImage">
          <div className="card-temp"> */}

        {/* </div>
        </div> */}
      </div>
    );
  }
}

export default AnimeImageColumn;
