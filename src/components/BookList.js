import React from 'react';
import BookCard from './BookCard'; 
import '../styles/BookCard.scss';
import '../styles/BookList.scss';

const BookList = ({ books }) => {
  return (
    <div className="book-list-container">
      {books.map((book, index) => (
        <div key={index} className="book-card-wrapper">
          <BookCard book={book}/> 
        </div>
      ))}
    </div>
  );
};

export default BookList;
