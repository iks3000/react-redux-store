import React, { Component } from 'react';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';

import { withBookstoreService } from '../hoc';
import { booksLoaded } from '../../actions';
import { compose } from '../../utils';
import './book-list.css';

class BookList extends Component {

  componentDidMount() {
    // 1. receive data
    const { bookstoreService } = this.props;
    const data = bookstoreService.getBooks();
    console.log(data);

    // 2. dispatch action to store
    this.props.booksLoaded(data);
  }

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

const mapStateToProps = (state) => {
  return {
    books: state.books
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     booksLoaded: (newBooks) => {
//       /*
//       dispatch({
//         type: 'BOOKS_LOADED',
//         payload: newBooks
//       })
//       */
//       dispatch(booksLoaded(newBooks))
//     }
//   }
// }

const mapDispatchToProps = {
  booksLoaded
};

// export default withBookstoreService()(
//   connect(mapStateToProps, mapDispatchToProps)(BookList)
// );

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);
