import React, { useState } from "react";
import Container from "../Container";
import API from "../../utils/API";
import SearchContext from "../../utils/SearchContext";

function SearchBooks() {
  //State for holding return of Google Books API Search
  const [books, setBooks] = useState({
    result: [],
    search: "",
  });
  //Search Form State

  function loadBooks(query) {
    API.getBooks(query)
      .then((res) => setBooks({ ...books, result: res.data }))
      .catch((err) => console.log(err));
    console.log(books);
  }

  //updates formObject state with User search input
  function handleSearchInput(event) {
    const input = event.target.value;
    setBooks({ ...books, search: input });
    console.log(books.search);
  }

  function handleSearchSubmit() {
    const search = books.search;
    loadBooks(search);
    console.log(search);
  }

  return (
    <>
      <SearchContext.Provider
        value={{ books, handleSearchInput, handleSearchSubmit }}
      >
        <Container />
      </SearchContext.Provider>
    </>
  );
}

export default SearchBooks;
