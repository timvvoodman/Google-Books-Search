import React from "react";

const SearchContext = React.createContext({
  search: "",
  handleSearchInput: () => {},
  handleSearchSubmit: () => {},
});

export default SearchContext;
