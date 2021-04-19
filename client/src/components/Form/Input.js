import React from 'react'

export function Input(props) {
  return (
    <div className="form-group">
      <div className="searchContainer">
        <span id="search-icon" className="material-icons">
          search
        </span>
        <input {...props}></input>
      </div>
    </div>
  )
}
