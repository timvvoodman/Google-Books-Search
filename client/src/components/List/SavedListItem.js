import React from "react";
import { FormBtn } from "../Form";

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
      <div>
        <h3>
          {title} By {author}
        </h3>
        <img src={cover} alt="cover art"></img>
        <form action={href}>
          <input type="submit" value="View" />
        </form>

        <FormBtn type="button" onClick={() => onClick(id)}>
          Delete
        </FormBtn>

        <p>{description}</p>
      </div>
    </li>
  );
}
