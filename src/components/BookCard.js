import React from 'react';
import '../styles/BookCard.scss';

const BookCard = ({ book, averageRating }) => {
  const amazonUrl = `https://www.amazon.com/s?k=${book.title}`; // Construct Amazon search URL

  return (
    <div className="book-card">
      <h3>{book.title}</h3>
      <p>Author: {book.author_name ? book.author_name.join(', ') : 'Unknown'}</p>
      <p>First Publish Year: {book.first_publish_year}</p>
      <a href={amazonUrl} target="_blank" rel="noopener noreferrer">
        <button>Buy on Amazon</button>
      </a>
    </div>
  );
};

export default BookCard;
