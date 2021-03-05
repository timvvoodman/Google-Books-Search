import React from "react";
import { Link } from "react-router-dom";

function TopNav() {
  return (
    <>
      <div>
        <Link to="/">Search</Link>
        <Link to="/saved">Saved Books</Link>
      </div>
    </>
  );
}

export default TopNav;
