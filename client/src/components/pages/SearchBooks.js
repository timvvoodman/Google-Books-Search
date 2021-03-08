import React, { useState } from "react";
import Container from "../Container";
import API from "../../utils/API";
import SearchContext from "../../utils/SearchContext";

function SearchBooks() {
  //State for holding return of Google Books API Search
  const [books, setBooks] = useState([]);
  //Search Form State
  const [formObject, setFormObject] = useState({
    search: "",
  });

  function loadBooks() {
    API.getBooks(formObject.search)
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  }

  //updates formObject state with User search input
  function handleSearchInput(event) {
    const { name, value } = event.target;
    setFormObject({ [name]: value });
    console.log(formObject);
  }

  function handleSearchSubmit(event) {
    event.preventDefault();
    loadBooks();
    console.log(books);
  }

  return (
    <>
      <SearchContext.Provider
        value={{ books, formObject, handleSearchInput, handleSearchSubmit }}
      >
        <Container />
      </SearchContext.Provider>
    </>
  );
}

export default SearchBooks;
