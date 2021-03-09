import React from "react";

export function Container({ children }) {
  return (
    <>
      <div className="grid-container">{children}</div>
    </>
  );
}
