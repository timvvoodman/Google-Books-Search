import React from "react";

export function List({ children }) {
  return (
    <div>
      <ul className="resultsEach">{children}</ul>
    </div>
  );
}
