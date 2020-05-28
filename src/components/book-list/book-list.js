import React, { Component } from 'react';
import BookListItem from '../book-list-item';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import { connect } from 'react-redux';

import { withBookstoreService } from '../hoc';
import { fetchBooks } from '../../actions';
import { compose } from '../../utils';
import './book-list.css';

class BookList extends Component {

  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const { books, loading, error } = this.props;
    if (loading) {
      return <Spinner />
    }
    if (error) {
      return <ErrorIndicator />
    }
    return (
      <ul className="book-list d-flex flex-wrap justify-content-start p-0">
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

const mapStateToProps = ({ books, loading, error }) => {
  return { books, loading, error }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const { bookstoreService } = ownProps;
  return {
    fetchBooks: fetchBooks(bookstoreService, dispatch)
  }
}

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);
