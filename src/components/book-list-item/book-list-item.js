/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './book-list-item.css';

const BookListItem = ({ book, onAddedToCart }) => {
  const { title, author, price, coverImage } = book;
  return (
    <div className="book-list-item bg-light rounded shadow p-3">
      <div className="book-cover">
        <img src={coverImage} alt="cover"/>
      </div>
      <div className="book-details">
        <span className="book-title">{title}</span>
        <div className="book-author">{author}</div>
        <div className="book-price">${price.toFixed(2)}</div>
        <button
          onClick={onAddedToCart}
          className="btn btn-info add-to-cart shadow-none">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default BookListItem;
