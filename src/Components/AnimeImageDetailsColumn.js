import React, { Component } from "react";

class AnimeImageDetailsColumn extends Component {
  render() {
    let aniData;

    if (this.props.data) {
      let genre = "";
      let studios = "";
      if (this.props.data.genres) {
        this.props.data.genres.forEach((v) => {
          genre += v.name + ", ";
        });
      }
      genre = genre.slice(0, genre.length - 2);

      if (this.props.data.studios) {
        this.props.data.studios.forEach((v) => {
          studios += v.name + ", ";
        });
      }
      studios = studios.slice(0, studios.length - 2);

      aniData = (
        <div className="animeImageDetailsColumn">
          <h4 className="style1">Title</h4>
          <h4 className="style2">{this.props.data.title}</h4>
          {/*  */}
          <h4 className="h4Style">Episodes</h4>
          <h4 className="h4Style">
            {this.props.data.episodes ? this.props.data.episodes : "Not Fixed"}
          </h4>
          {/*  */}
          <h4 className="h4Style">Score</h4>
          <h4 className="h4Style">{this.props.data.score}</h4>
          {/*  */}
          <h4 className="h4Style">Ranked</h4>
          <h4 className="h4Style">#{this.props.data.rank}</h4>
          {/*  */}
          <h4 className="h4Style">Popularity</h4>
          <h4 className="h4Style">#{this.props.data.popularity}</h4>
          {/*  */}
          <h4 className="h4Style">Type</h4>
          <h4 className="h4Style">{this.props.data.type}</h4>
          {/*  */}
          <h4 className="h4Style">Source</h4>
          <h4 className="h4Style">{this.props.data.source}</h4>
          {/*  */}
          <h4 className="h4Style">Rating</h4>
          <h4 className="h4Style">{this.props.data.rating}</h4>
          {/*  */}
          <h4 className="h4Style">Genre</h4>
          <h4 className="h4Style">{genre}</h4>
          {/*  */}
          <h4 className="h4Style">Studios</h4>
          <h4 className="h4Style">{studios}</h4>
          {/*  */}
        </div>
      );
    }

    return <>{aniData}</>;
  }
}

export default AnimeImageDetailsColumn;
