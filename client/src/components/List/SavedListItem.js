import React from 'react'
import { FormBtn } from '../Form'

export function SavedListItem({
  title,
  author,
  cover,
  description,
  onClick,
  id,
  href,
}) {
  return (
    <li>
      <div className="resultContainer">
        <div className="result-img">
          <img src={cover} alt="cover art"></img>
        </div>
        <div className="result-info">
          <h3>{title}</h3>
          <h5>{author}</h5>
          <p>{description}</p>
          <div className="result-button-container">
            <FormBtn
              className="result-button delete"
              onClick={onClick}
              type="button"
            >
              Delete
            </FormBtn>
            <form action={href}>
              <input className="result-button" type="submit" value="View" />
            </form>
          </div>
        </div>
      </div>
    </li>
  )
}
