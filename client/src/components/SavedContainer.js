import React from "react";
import Jumbotron from "./Jumbotron";
import SavedList from "./SavedList";

function SavedContainer() {
  return (
    <>
      <div className="grid-container">
        <Jumbotron />
        <SavedList />
      </div>
    </>
  );
}

export default SavedContainer;
