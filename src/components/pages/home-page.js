import React from 'react';
import BookList from '../book-list';

const HomePage = () => {
  const TestBooks = [
    {
      id: 1,
      title: 'Production-Ready Microservices',
      author: 'Susan J. Fowler'
    },
    {
      id: 2,
      title: 'Released It!',
      author: 'Michael T. Nygard'
    }
  ];
  return (
    <BookList books={TestBooks} />
  )
};

export default HomePage;
