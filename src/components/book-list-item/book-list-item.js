import React from 'react';
import './book-list-item.css';

const BookListItem = ({ book }) => {
  const { title, author } = book;
  return (
    <>
      <span>{title} {author}</span>
    </>
  );
};

export default BookListItem;
