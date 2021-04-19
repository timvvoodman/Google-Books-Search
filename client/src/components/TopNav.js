import React from 'react'
import { Link } from 'react-router-dom'

function TopNav() {
  return (
    <>
      <nav>
        <Link className="nav-link" to="/">
          Search
        </Link>

        <Link className="nav-link" to="/saved">
          Saved Books
        </Link>
      </nav>
    </>
  )
}

export default TopNav
