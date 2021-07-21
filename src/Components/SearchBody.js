import React, { Component } from "react";
import Card from "./Card";
import PaginatedComponent from "./PaginatedComponent";
class SearchBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardPerPage: 20,
      currentPage: 1,
      loading: false,
    };
  }

  render() {
    let lastCardIndex = this.state.currentPage * this.state.cardPerPage;
    let firstCardIndex = lastCardIndex - this.state.cardPerPage;
    let cardInPresentPage = [];
    if (this.props.data) {
      cardInPresentPage = this.props.data.slice(firstCardIndex, lastCardIndex);
    }

    const handlePagination = (num) => {
      this.setState({
        currentPage: num + 1,
      });
    };

    let cardPart;

    if (this.state.loading) {
      cardPart = (
        <div className="upperLoadingDiv">
          <div className="loader"></div>
        </div>
      );
    } else {
      if (this.props.data) {
        cardPart = (
          <div className="cardBody">
            <Card
              aniInfos={cardInPresentPage}
              history="/search"
              loading={this.state.loading}
            />
          </div>
        );
      } else {
        cardPart = (
          <div className="notValid">There is no valid search results...</div>
        );
      }
    }

    return (
      <>
        <div className="bodyHeadUpper">
          <div className="bodyHead">
            <h2>Search</h2>
          </div>
        </div>
        <div className="body">
          {this.props.data && (
            <PaginatedComponent
              aniInfos={this.props.data}
              cardPerPage={this.state.cardPerPage}
              paginate={handlePagination}
            />
          )}
          {cardPart}
        </div>
      </>
    );
  }
}

export default SearchBody;
