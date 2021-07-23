import React, { Component } from "react";
import Card from "./Card";
import PaginatedComponent from "./PaginatedComponent";
class UpcomingAnimeBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aniInfos: [],
      cardPerPage: 20,
      currentPage: 1,
      loading: false,
    };
  }

  componentDidMount() {
    fetch("https://api.jikan.moe/v3/season/later")
      .then((res) => {
        this.setState({
          loading: true,
        });
        return res.status === 200 ? res.json() : null;
      })
      .then((data) => data.anime)
      .then((animes) => {
        this.setState({
          aniInfos: animes,
        });
        this.setState({
          loading: false,
        });
      })
      .catch((err) => {
        this.setState({
          loading: false,
        });
        console.log(err);
      });
  }

  render() {
    let lastCardIndex = this.state.currentPage * this.state.cardPerPage;
    let firstCardIndex = lastCardIndex - this.state.cardPerPage;
    let cardInPresentPage = this.state.aniInfos.slice(
      firstCardIndex,
      lastCardIndex
    );

    let cardPart;

    if (this.state.loading) {
      cardPart = (
        <div className="upperLoadingDiv">
          <div className="loader"></div>
        </div>
      );
    } else {
      cardPart = (
        <div className="cardBody">
          <Card
            aniInfos={cardInPresentPage}
            history="/upcoming anime"
            loading={this.state.loading}
          />
        </div>
      );
    }

    const handlePagination = (num) => {
      this.setState({
        currentPage: num + 1,
      });
    };

    return (
      <>
        {/* <div className="bodyHeadUpper">
          <div className="bodyHead">
            <h2>Upcoming</h2>
          </div>
        </div> */}
        <div className="body">
          <PaginatedComponent
            aniInfos={this.state.aniInfos}
            cardPerPage={this.state.cardPerPage}
            paginate={handlePagination}
          />
          {cardPart}
        </div>
      </>
    );
  }
}

export default UpcomingAnimeBody;
