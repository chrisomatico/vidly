import React from "react";

const Filter = ({ genres, onGenreChange, selectedGenre }) => {
  return (
    <ul className="list-group">
      {genres.map((genre) => (
        <li
          key={genre._id}
          className={
            genre === selectedGenre
              ? "list-group-item active"
              : "list-group-item"
          }
          style={{ cursor: "pointer" }}
          onClick={() => onGenreChange(genre)}
        >
          {genre.name}
        </li>
      ))}
    </ul>
  );
};

export default Filter;
