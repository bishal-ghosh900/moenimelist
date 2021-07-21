import React, { Component } from "react";
import AnimeImageColumn from "./AnimeImageColumn";
import AnimeImageDetailsColumn from "./AnimeImageDetailsColumn";
class AnimeDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animeDetails: {},
    };
  }

  componentDidMount() {
    fetch(`https://api.jikan.moe/v3/anime/${this.props.data.mal_id}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          animeDetails: data,
        });
      });
  }

  render() {
    let data = this.state.animeDetails;
    let history = this.props.history;
    return (
      <div className="animeDetails">
        <AnimeImageColumn data={data} history={history} />
        <AnimeImageDetailsColumn data={data} />
      </div>
    );
  }
}

export default AnimeDetails;
