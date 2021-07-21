import React, { Component } from "react";
import { Link } from "react-router-dom";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let Infos = this.props.aniInfos.map((v) => (
      <Link
        to={{
          pathname: "/details",
          state: {
            data: v,
            history: `${this.props.history}`,
          },
        }}
      >
        <div key={v.toString()} className="card">
          {this.props.loading && <div>Loading...</div>}
          <img
            key={v.image_url}
            className="card-image"
            src={v.image_url}
            alt="Something"
          />
          <div key={v.title} className="card-div">
            {v.title.length > 30 ? v.title.slice(0, 31) + "..." : v.title}
          </div>
        </div>
      </Link>
    ));

    return <React.Fragment>{Infos}</React.Fragment>;
  }
}

export default Card;
