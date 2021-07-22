import React, { Component } from "react";
import ReactPaginate from "react-paginate";

class PaginatedComponent extends Component {
  constructor(props) {
    super(props);
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  handlePageClick(e) {
    let num = e.selected;
    this.props.paginate(num);
  }
  render() {
    let pageCount = 0;
    if (this.props.aniInfos) {
      pageCount = Math.floor(
        this.props.aniInfos.length / this.props.cardPerPage
      );
    }
    return (
      <div>
        <ReactPaginate
          previousLabel={<i class="fas fa-arrow-left"></i>}
          nextLabel={<i class="fas fa-arrow-right"></i>}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      </div>
    );
  }
}

export default PaginatedComponent;
