import React, { Component } from "react";
import Card from "./Card";
import PaginatedComponent from "./PaginatedComponent";
class TopAnimeBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aniInfos: [],
      cardPerPage: 50,
      currentPage: 1,
      loading: false,
    };
  }

  componentDidMount() {
    this.setState({
      aniInfos: [],
    });
    for (let i = 1; i < 11; i++) {
      fetch(`https://api.jikan.moe/v3/top/anime/${i}`)
        .then((res) => {
          this.setState({
            loading: true,
          });
          return res.json();
        })
        .then((data) => data.top)
        .then((top) => {
          this.setState((state) => ({
            aniInfos: state.aniInfos.concat(top),
          }));

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
  }

  render() {
    let lastCardIndex = this.state.currentPage * this.state.cardPerPage;
    let firstCardIndex = lastCardIndex - this.state.cardPerPage;
    let cardInPresentPage = [];
    let cardPart;

    if (this.state.aniInfos) {
      cardInPresentPage = this.state.aniInfos.slice(
        firstCardIndex,
        lastCardIndex
      );

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
              history="/top anime"
              loading={this.state.loading}
            />
          </div>
        );
      }
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
            <h2>Top Animes</h2>
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

export default TopAnimeBody;
