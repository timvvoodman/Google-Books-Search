import React, { useContext } from "react";
import SearchContext from "../utils/SearchContext";

function SearchBox() {
  const { handleSearchInput, handleSearchSubmit } = useContext(SearchContext);

  return (
    <>
      <div className="item2">
        <h3>Search</h3>
        <input
          type="text"
          onChange={handleSearchInput}
          placeholder="Search by name, author, etc..."
        ></input>
        <button type="button" onClick={handleSearchSubmit}>
          Search
        </button>
      </div>
    </>
  );
}

export default SearchBox;
