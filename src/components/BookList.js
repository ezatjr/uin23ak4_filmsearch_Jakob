import React from 'react';
import BookCard from './BookCard'; // Importerer BookCard-komponenten fra './BookCard'
import '../styles/BookCard.scss'; // Importerer stilene for BookCard-komponenten
import '../styles/BookList.scss'; // Importerer stilene for BookList-komponenten


//Lager en funksjonell komponent kalt BookList som tar en prop books.
const BookList = ({ books }) => {
  //Returner JSX som representerer strukturen til Booklist-Komponenten.
  return (
    <div className="book-list-container">
      {/* Går gjennom hver bok i 'books'-arrayen og rendrer en BookCard-komponent for hver */}
      {books.map((book, index) => (  
        <div key={index} className="book-card-wrapper"> {/* En div for hvert BookCard med et unikt 'key' basert på indeks */}
          <BookCard book={book}/>  {/* Rendrer BookCard-komponenten for den gjeldende boken og sender bokobjektet som en prop */}
        </div>
      ))}
    </div>
  );
};

export default BookList;
