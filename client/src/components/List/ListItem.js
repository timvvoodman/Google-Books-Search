import React from "react";
import { FormBtn } from "../Form";

export function ListItem({ title, author, cover, description, onClick, href }) {
  return (
    <li>
      <div>
        <h3>
          {title} By {author}
        </h3>
        <img src={cover} alt="cover art"></img>
        <FormBtn onClick={onClick} type="button">
          Save
        </FormBtn>
        <form action={href}>
          <input type="submit" value="View" />
        </form>

        <p>{description}</p>
      </div>
    </li>
  );
}
