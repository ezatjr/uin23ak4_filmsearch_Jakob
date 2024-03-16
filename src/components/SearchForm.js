import React, { useState } from 'react';

const SearchForm = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(query);
    };

    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <input
                className="search-input"
                type="text"
                placeholder="Search for books..."
                value={query}
                onChange={handleInputChange}
            />
            <button className="search-button" type="submit">Search</button>
        </form>
    );
};

export default SearchForm;
