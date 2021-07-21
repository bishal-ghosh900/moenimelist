import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class AnimeTypeNavbar extends Component {
  render() {
    return (
      <nav style={{ zIndex: 4 }}>
        <ul className="ulList">
          <li className="liList">
            <NavLink
              exact
              activeClassName="aListWithShadow"
              className="aList"
              to="/"
            >
              Airing/Upcoming
            </NavLink>
          </li>
          <li className="liList">
            <NavLink
              activeClassName="aListWithShadow"
              className="aList"
              to="/top anime"
            >
              Top Animes
            </NavLink>
          </li>
          <li className="liList">
            <NavLink
              activeClassName="aListWithShadow"
              className="aList"
              to="/search"
            >
              Search
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default AnimeTypeNavbar;
