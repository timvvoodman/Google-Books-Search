import React, { useState } from 'react'
import API from '../../utils/API'
import { Container } from '../../components/Grid'
import { List, ResultItem } from '../../components/List'
import { Input, FormBtn } from '../../components/Form'

function SearchBooks() {
  //State for holding return of Google Books API Search
  const [books, setBooks] = useState([])
  //Search Form State
  const [search, setSearch] = useState('')

  //Get books function and handle click that executes from UI click
  function loadBooks(query) {
    API.getBooks(query)
      .then((res) => setBooks(res.data.items))
      .catch((err) => console.log(err))
    console.log(books)
  }

  const handleSearchSubmit = (event) => {
    event.preventDefault()
    loadBooks(search)
  }

  //updates search state
  const handleSearchInput = (event) => {
    const input = event.target.value
    setSearch(input)
  }

  //Save Book to DB Functionality

  const saveBooktToDB = (id) => {
    const book = books.find((book) => book.id === id)
    API.saveBook({
      googleId: book.etag,
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors,
      description: checkForDescription(id),
      cover: book.volumeInfo.imageLinks.thumbnail,
      link: book.volumeInfo.infoLink,
    })
  }

  function checkForDescription(id) {
    const book = books.find((book) => book.id === id)

    if (book.searchInfo) {
      return book.searchInfo.textSnippet
    }

    return 'No Description Available.'
  }

  return (
    <>
      <Container>
        <div className="searchArea">
          <h1>Search For Books</h1>
          <Input
            onChange={handleSearchInput}
            placeholder="search by title"
            value={search}
          />
          <FormBtn onClick={handleSearchSubmit}>Search</FormBtn>
        </div>
        <div className="resultsList">
          <List>
            {books.map((book) => {
              return (
                <ResultItem
                  key={book.etag}
                  title={book.volumeInfo.title}
                  author={book.volumeInfo.authors.join(', ')}
                  cover={
                    book.volumeInfo.imageLinks
                      ? book.volumeInfo.imageLinks.thumbnail
                      : 'https://via.placeholder.com/128x206.png?text=No+Cover+Available'
                  }
                  description={
                    book.searchInfo
                      ? book.searchInfo.textSnippet
                      : 'No description available'
                  }
                  href={book.volumeInfo.infoLink}
                  onClick={() => saveBooktToDB(book.id)}
                />
              )
            })}
          </List>
        </div>
      </Container>
    </>
  )
}

export default SearchBooks
