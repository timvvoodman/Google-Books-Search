import React from 'react'

export function List({ children }) {
  return (
    <div className="resultsEach">
      <ul>{children}</ul>
    </div>
  )
}
