import React, { useState, useEffect } from 'react';
import SearchForm from '../components/SearchForm';
import BookList from '../components/BookList';
import '../styles/SearchForm.scss';

const Home = () => {
    const [initialBooks, setInitialBooks] = useState([]);
    const [filteredBooks, setFilteredBooks] = useState([]);

    // Hent innledende bokliste
    useEffect(() => {
        const fetchInitialBooks = async () => {
            try {
                const response = await fetch(`https://openlibrary.org/search.json?q=James+Bond&fields=key,title,author_name,first_publish_year`);
                const data = await response.json();
                setInitialBooks(data.docs);
                setFilteredBooks(data.docs); // Set filteredBooks to initial books
            } catch (error) {
                console.error('Error fetching initial data:', error);
            }
        };

        fetchInitialBooks();
    }, []);

    const searchBooks = (query) => {
        if (query.length >= 3) {
            const filtered = initialBooks.filter(book =>
                book.title.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredBooks(filtered);
        } else {
            // Hvis søkelengden er mindre enn 3, tilbakestill til de første bøkene
            setFilteredBooks(initialBooks);
        }
    };

    return (
        <div>
            <h1>Movie Search</h1>
            <SearchForm onSearch={searchBooks} />
            <BookList books={filteredBooks} />
        </div>
    );
};

export default Home;
