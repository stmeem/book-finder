import React from "react";
import BookList from "./BookList";

function Book(props) {
  return (
    <div className="cards">
      {props.books.map((book, i) => {
        return (
          <BookList
            key={i}
            image={book.volumeInfo.imageLinks.thumbnail}
            title={book.volumeInfo.title}
            author={book.volumeInfo.authors}
            published={book.volumeInfo.publishedDate}
            url={book.volumeInfo.infoLink}
          />
        );
      })}
    </div>
  );
}
export default Book;