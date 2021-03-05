import React from "react";
import Jumbotron from "./Jumbotron";
import Results from "./Restults";
import SearchBox from "./SearchBox";

function Container() {
  return (
    <>
      <div className="grid-container">
        <Jumbotron />
        <SearchBox />
        <Results />
      </div>
    </>
  );
}

export default Container;
