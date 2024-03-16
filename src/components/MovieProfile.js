import React, { useState, useEffect } from 'react';

const MovieProfile = ({ imdbID }) => {
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const response = await fetch(`http://www.omdbapi.com/?i=${imdbID}&apikey=YOUR_OMDB_API_KEY`);
                const data = await response.json();
                setMovie(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching movie data:', error);
            }
        };

        fetchMovie();
    }, [imdbID]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!movie) {
        return <div>Movie not found</div>;
    }

    return (
        <div className="movie-profile">
            <h2>{movie.Title}</h2>
            <p>Year: {movie.Year}</p>
            <p>Director: {movie.Director}</p>
            <p>Plot: {movie.Plot}</p>
            <p>IMDB Rating: {movie.imdbRating}</p>
            <a href={`https://www.imdb.com/title/${imdbID}`} target="_blank" rel="noopener noreferrer">View on IMDB</a>
        </div>
    );
};

export default MovieProfile;