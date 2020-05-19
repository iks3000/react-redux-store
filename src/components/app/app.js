import React from 'react';
import './app.css';
import { withBookstoreService } from '../hoc';

const App = ({ bookstoreService }) => {
  console.log(bookstoreService.getBooks());

  const BooksList = () => (
    <>
      { bookstoreService.getBooks().map(book => (
        <li key={book.id}>
          <div>id: {book.id}</div>
          <div>title: {book.title}</div>
          <div>author: {book.author}</div>
        </li>
        ))
      }
    </>
  );

  return (
    <ul>
      <BooksList />
    </ul>
  )
};

export default withBookstoreService()(App);
