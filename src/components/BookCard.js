import React from 'react';
import '../styles/BookCard.scss'; //Importerer sass-cssen for Bookcard - komponenten 

//Lager en variabel, navngir den Bookcard for å definere komponenten.
const BookCard = ({ book, averageRating }) => {
  const amazonUrl = `https://www.amazon.com/s?k=${book.title}`; //Konstruer Amazon-søk-URL som leder til nettsiden, basert på tittlen på boken.
  
  //Returnerer JSX som representerer strukturen til komponenten
  return (
    <div className="book-card"> 
      <h3>{book.title}</h3> {/* Viser tittelen på boken */}
      <p>Author: {book.author_name ? book.author_name.join(', ') : 'Unknown'}</p> {/* Viser forfatteren av boken, eller "Unknown" hvis forfatteren ikke er oppgitt */}
      <p>First Publish Year: {book.first_publish_year}</p> {/* Viser det første året boken ble publisert */}
      <a href={amazonUrl} target="_blank" rel="noopener noreferrer"> {/* Lenke til Amazon-siden for å kjøpe boken */}
        <button>Buy on Amazon</button>  {/* Knapp for å kjøpe boken på Amazon */}
      </a>
    </div>
  );
};a

export default BookCard;
