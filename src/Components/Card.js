import React, { Component } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let Infos = this.props.aniInfos.map(
      (v) =>
        !v.r18 && (
          <Link
            to={{
              pathname: "/details",
              state: {
                data: v,
                history: `${this.props.history}`,
              },
            }}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              animate={{
                width: "220px",
                height: "220px",
              }}
              initial="false"
              key={v.toString()}
              className="card"
            >
              {this.props.loading && <div>Loading...</div>}
              <img
                key={v.image_url}
                className="card-image"
                src={v.image_url}
                alt={v.title}
              />
              <div key={v.title} className="card-div">
                {v.title.length > 30 ? v.title.slice(0, 31) + "..." : v.title}
              </div>
            </motion.div>
          </Link>
        )
    );

    return <React.Fragment>{Infos}</React.Fragment>;
  }
}

export default Card;
