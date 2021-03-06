import React, { useEffect, useState } from 'react'
import API from '../../utils/API'
import { Container } from '../Grid'
import { List, SavedListItem } from '../List'

function SavedBooks() {
  //saved books State
  const [savedBooks, setSavedBooks] = useState([])

  //on page load pull saved books from DB and load into savedBooks state
  useEffect(() => {
    loadSavedBooks()
    console.log(savedBooks)
  }, [])

  //API request to MongoDB for saved books
  function loadSavedBooks() {
    API.getSaved()
      .then((res) => setSavedBooks(res.data))
      .catch((err) => console.log(err))
    console.log(savedBooks)
  }

  //Delete book from saved list(database)
  function deleteBook(id) {
    API.deleteBook(id)
      .then((res) => loadSavedBooks())
      .catch((err) => console.log(err))
  }

  return (
    <>
      <Container>
        <div className="resultsList">
          <h1>My Reading List</h1>
          <List>
            {savedBooks.map((book) => {
              return (
                <SavedListItem
                  key={book._id}
                  id={book._id}
                  title={book.title}
                  author={book.authors.join(', ')}
                  cover={book.cover}
                  description={book.description}
                  href={book.link}
                  onClick={() => deleteBook(book._id)}
                />
              )
            })}
          </List>
        </div>
      </Container>
    </>
  )
}

export default SavedBooks
