import React, { useContext } from "react";
import ViewBtn from "./ViewBtn";
import SearchContext from "../utils/SearchContext";

function ResultListItems() {
  const { books } = useContext(SearchContext);

  return (
    <>
      <ViewBtn />
      <button type="button">Save</button>
      <li>
        <h3>Title</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </li>
    </>
  );
}

export default ResultListItems;
