import React from "react";
import { Link } from "react-router-dom";

function TopNav() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Search</Link>
          </li>
          <li>
            <Link to="/saved">Saved Books</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default TopNav;
