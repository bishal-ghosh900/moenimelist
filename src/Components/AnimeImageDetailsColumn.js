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

      let rank = this.props.data.rank
        ? "#" + this.props.data.rank
        : "Not Fixed";
      let popularity = this.props.data.popularity
        ? "#" + this.props.data.popularity
        : "Not Fixed";

      let months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];

      let from = this.props.data.aired?.from;
      let to = this.props.data.aired?.to;

      let fromMonth = months[new Date(from).getMonth()];
      let fromDate = new Date(from).getDate();
      let toMonth = months[new Date(to).getMonth()];
      let toDate = new Date(to).getDate();

      let fromDateString = from ? `${fromMonth} ${fromDate} ` : "?";
      let toDateString = to ? `${toMonth} ${toDate}` : "?";

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
          <h4 className="h4Style">
            {this.props.data.score ? this.props.data.score : "Not Fixed"}
          </h4>
          {/*  */}
          <h4 className="h4Style">Ranked</h4>
          <h4 className="h4Style">{rank}</h4>
          {/*  */}
          <h4 className="h4Style">Popularity</h4>
          <h4 className="h4Style">{popularity}</h4>
          {/*  */}
          <h4 className="h4Style">Status</h4>
          <h4 className="h4Style">{this.props.data.status}</h4>
          {/*  */}
          <h4 className="h4Style">Aired</h4>
          <h4 className="h4Style">
            from {fromDateString} to {toDateString}
          </h4>
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
          <h4 className="h4Style">{studios ? studios : "Not Fixed"}</h4>
          {/*  */}
        </div>
      );
    }

    return <>{aniData}</>;
  }
}

export default AnimeImageDetailsColumn;
