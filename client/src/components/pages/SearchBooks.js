import React, { useState } from "react";
import API from "../../utils/API";
import { Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";
import Jumbotron from "../Jumbotron";

function SearchBooks() {
  //State for holding return of Google Books API Search
  const [books, setBooks] = useState([]);
  //Search Form State
  const [search, setSearch] = useState("");

  //Get books function and handle click that executes from UI click
  function loadBooks(query) {
    API.getBooks(query)
      .then((res) => setBooks(res.data.items))
      .catch((err) => console.log(err));
    console.log(books);
  }

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    loadBooks(search);
  };

  //updates search state
  const handleSearchInput = (event) => {
    const input = event.target.value;
    setSearch(input);
    console.log(search);
  };

  //Save Book to DB Functionality

  const saveBooktToDB = (id) => {
    const book = books.find((book) => book.id === id);
    API.saveBook({
      googleId: book.etag,
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      cover: book.volumeInfo.imageLinks.thumbnail,
      link: book.volumeInfo.infoLink,
    }).then(() =>
      console.log(`Saved ${book.volumeInfo.title} to your Reading list`)
    );
  };

  return (
    <>
      <Container>
        <Jumbotron />
        <div className="searchArea">
          <h4>Search The Google Book Library</h4>
          <Input
            onChange={handleSearchInput}
            placeholder="search by title"
            value={search}
          />
          <FormBtn onClick={handleSearchSubmit}>Search</FormBtn>
        </div>
        <div className="resultsList">
          <h2>Results</h2>
          <List>
            {books.map((book) => {
              return (
                <ListItem
                  key={book.etag}
                  title={book.volumeInfo.title}
                  author={book.volumeInfo.authors}
                  cover={
                    book.volumeInfo.imageLinks
                      ? book.volumeInfo.imageLinks.thumbnail
                      : "https://via.placeholder.com/128x206.png?text=No+Cover+Available"
                  }
                  description={book.volumeInfo.description}
                  href={book.volumeInfo.infoLink}
                  onClick={() => saveBooktToDB(book.id)}
                />
              );
            })}
          </List>
        </div>
      </Container>
    </>
  );
}

export default SearchBooks;
