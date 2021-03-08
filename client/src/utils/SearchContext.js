import React from "react";

const SearchContext = React.createContext({
  results: [],
  search: "",
  handleSearchInput: () => {},
  handleSearchSubmit: () => {},
});

export default SearchContext;
