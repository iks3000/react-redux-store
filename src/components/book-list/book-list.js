import React, { Component } from 'react';
import BookListItem from '../book-list-item';
import './book-list.css';

class BookList extends Component {
  render() {
    const { books } = this.props;
    return (
      <ul>
        {
          books.map((bookItem) => {
            return (
              <li key={bookItem.id}>
                <BookListItem book={bookItem} />
              </li>
            )
          })
        }
      </ul>
    )
  }
};

export default BookList;
