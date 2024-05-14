import React, { useState } from 'react';
import { Movie } from './Movie';
import { MovieForm } from './MovieForm';
import { v4 as uuidv4 } from 'uuid';
import { Button } from 'react-bootstrap';

export const MovieWrapper = () => {
  const [movies, setMovies] = useState([]);

  const addMovie = (movie) => {
    setMovies([
      ...movies,
      { id: uuidv4(), title: movie.title, rating: parseInt(movie.rating) },
    ]);
  };

  const deleteMovie = (id) => setMovies(movies.filter((movie) => movie.id !== id));

  const sortMoviesByTitle = () => {
    const sortedMovies = [...movies].sort((a, b) => a.title.localeCompare(b.title));
    setMovies(sortedMovies);
  };

  const sortMoviesByRating = () => {
    const sortedMovies = [...movies].sort((a, b) => b.rating - a.rating);
    setMovies(sortedMovies);
  };

  return (
    <div className="MovieWrapper">
      <h1>Min filmlista</h1>
      <MovieForm addMovie={addMovie} />
      <div className="sort-buttons d-flex justify-content-between mt-3">
        <Button variant="primary" onClick={sortMoviesByTitle}>Alfabetisk ordning</Button>
        <Button variant="secondary" onClick={sortMoviesByRating}>Berygsordining</Button>
      </div>
      <h2 className="mt-4">Inlagda filmer</h2>
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} deleteMovie={deleteMovie} />
      ))}
    </div>
  );
};
